import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PageOne.css";
// import music from "../Assets/music.mp3";
import pp from "../Assets/pp.png";

export default function PageOne() {
  const [showPopup, setShowPopup] = useState(true);
  const [musicOn, setMusicOn] = useState(true);
  const [fireworks, setFireworks] = useState([]);
  const [spaceCount, setSpaceCount] = useState(0);

  const audioRef = useRef(null);
  const navigate = useNavigate();

  // // music
  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.volume = 0.5;
  //     audioRef.current.play().catch(() => {});
  //   }
  // }, []);

  // space listener
  useEffect(() => {
    const handleSpace = (e) => {
      if (e.code === "Space") {
        e.preventDefault();

        spawnFirework();
        setSpaceCount((prev) => {
          const next = prev + 1;
          if (next >= 21) {
            prev = 20;
            setTimeout(() => {
              navigate("/message");
            }, 800);
          }
          return Math.min(next, 21);
        });
      }
    };

    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, [navigate]);

  const spawnFirework = () => {
    const id = Date.now();
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    setFireworks((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setFireworks((prev) => prev.filter((f) => f.id !== id));
    }, 1200);
  };

  // tombol music toggle
  // const toggleMusic = () => {
  //   if (!audioRef.current) return;

  //   if (musicOn) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setMusicOn(!musicOn);
  // };

  return (
    <div className="pageone-container">
      {/* <audio ref={audioRef} src={music} loop />

      <div className="music-toggle" onClick={toggleMusic}>
        {musicOn ? "🎵" : "🔇"}
      </div> */}

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box">
            <div className="profile">
              <img src={pp} alt="profile" />
              <span>Len563116</span>
            </div>
            <div className="message-box">
              <p>
                To: Lyco <br></br>
                <br></br>
                Selamat ulang tahun Qonita Shoobiha As Samda 😋, maaff yah kirim
                ini agak telat 🫠 (yang penting belum ganti bulan) <br></br>
                Tenang aja di akhir bakal ada <b>WEB JUDOL</b>nya kok hehehe 😁
                <br></br>
                <br></br>
                Selamat mengikuti alurnya semoga kamu suka yahh... ohya jangan
                lupa jumlah spasi yang akan kamu klik nanti dihitung ya soalnya
                bakal kepake
                <br></br>
                <br></br>
                <span>From: Len.. </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {fireworks.map((f) => (
        <div
          key={f.id}
          className="firework"
          style={{ left: `${f.x}%`, top: `${f.y}%` }}
        />
      ))}

      <div className="press-space">Press Space ({spaceCount})</div>
    </div>
  );
}
