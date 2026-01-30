import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PageTwo.css";
import pp from "../Assets/pp.png";

const messages = [
  "SSeperti biasa akan selalu ada kata kata di web 😁, semoga kamu tidak bosen yah. Jangan salfok sama bg nya, terlalu gacorr emang",
  "MMenurutku ini bukan cuman sekedar web, mungkin kayak rare episode yg berkelanjutan yang udah pasti rilis cuman ada 4 episode. Anggap aja itu season satu lahh yaa, daannnn... semoga akan ada season season selanjutnya...",
  "UUmur 21 yahh... semester enemm.. mungkin kalo dibaca sekarang kayak 'huifftt suatu pencapaian yg capek banget yah' tapi kalo kamu/aku yg di masa depan buka ini mungkin cuman ketawa sambil bilang 'gilss apaandah' 🫠, yaudahhlahh yaa... ",
  "MMakasihhh yaa udah sering ada buat aku selama ini. makasih udah menyelesaikan masalah bersama sama, menghabiskan waktu sama sama dan terimakasih sama sama tiap hari... apadah aneh bnget. itulah pokoknya",
  "OOhya saat ini kamu lagi sakit, cepet sembuh yaa nita. dan apakahh Kamu mau ke web judol untuk selanjutnya? (iya/tidak)",
];

export default function PageTwo() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(false);

  const [answer, setAnswer] = useState("");
  const [stage, setStage] = useState(1);
  // 1 = messages
  // 2 = question space
  // 3 = hint + hidden button

  const [spaceAnswer, setSpaceAnswer] = useState("");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();
  const hiddenBtnRef = useRef(null);

  /* ================= TYPING EFFECT ================= */
  useEffect(() => {
    if (stage !== 1) return;

    setDisplayText("");
    setTyping(true);
    let i = 0;
    const text = messages[index];

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setTyping(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [index, stage]);

  //   useEffect(() => {
  //     if (stage !== 1) return;

  //     setDisplayText("");
  //     setTyping(true);
  //     let i = 0;

  //     const interval = setInterval(() => {
  //       setDisplayText((prev) => prev + messages[index][i]);
  //       i++;
  //       if (i >= messages[index].length) {
  //         clearInterval(interval);
  //         setTyping(false);
  //       }
  //     }, 40);

  //     return () => clearInterval(interval);
  //   }, [index, stage]);

  /* ================= CURSOR TRACK ================= */
  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ================= PROXIMITY DETECTION ================= */
  useEffect(() => {
    if (stage !== 3 || !hiddenBtnRef.current) return;

    const btn = hiddenBtnRef.current.getBoundingClientRect();
    const dx = cursor.x - (btn.left + btn.width / 2);
    const dy = cursor.y - (btn.top + btn.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 150) {
      hiddenBtnRef.current.classList.add("reveal");
    } else {
      hiddenBtnRef.current.classList.remove("reveal");
    }
  }, [cursor, stage]);

  return (
    <div
      className="pagetwo-container"
      style={{
        "--x": `${cursor.x}px`,
        "--y": `${cursor.y}px`,
      }}
    >
      {/* ================= POPUP SYSTEM ================= */}
      {stage !== 3 && (
        <div className="popup-overlay">
          <div className="popup-box">
            {/* PROFILE HEADER */}
            <div className="profile">
              <img src={pp} alt="profile" />
              <span>Len563116</span>
            </div>

            {/* ================= STAGE 1 ================= */}
            {stage === 1 && (
              <>
                <div className="message-box">
                  <p>{displayText}</p>
                </div>

                {index < messages.length - 1 ? (
                  <div className="nav-btns">
                    <button
                      disabled={index === 0}
                      onClick={() => setIndex(index - 1)}
                    >
                      Prev
                    </button>
                    <button
                      disabled={typing}
                      onClick={() => setIndex(index + 1)}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <div className="input-box">
                    <input
                      placeholder="jawaban..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        if (answer.toLowerCase() === "iya") {
                          setStage(2);
                        }
                      }}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ================= STAGE 2 ================= */}
            {stage === 2 && (
              <>
                <div className="message-box">
                  <p>berapa space yg kamu tekan di awal tadi? heheheh</p>
                </div>

                <div className="input-box">
                  <input
                    placeholder="jawaban..."
                    value={spaceAnswer}
                    onChange={(e) => setSpaceAnswer(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      if (spaceAnswer === "21") {
                        setStage(3);
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ================= FINAL HINT ================= */}
      {stage === 3 && (
        <div className="final-hint">carilah button disekitar sini</div>
      )}

      {/* ================= HIDDEN BUTTON ================= */}
      <button
        ref={hiddenBtnRef}
        className="hidden-btn"
        onClick={() => navigate("/secret")}
      >
        →
      </button>
    </div>
  );
}
