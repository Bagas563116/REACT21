import { useState } from "react";
import "../Styles/PageThree.css";
import kaget from "../Assets/jumpscare.jpeg";

export default function PageThree() {
  const [showPopup, setShowPopup] = useState(true);
  const [showJumpscare, setShowJumpscare] = useState(false);

  const handleOk = () => {
    setShowPopup(false);

    // delay kecil biar dramatis
    setTimeout(() => {
      setShowJumpscare(true);
    }, 300);
  };

  return (
    <div className="pagethree-container">
      {/* VIRUS POPUP */}
      {showPopup && (
        <div className="virus-overlay">
          <div className="virus-popup">
            <div className="virus-title">⚠ WARNING</div>
            <div className="virus-text">
              Perangkat anda terkena virus.
              <br />
              Klik OK untuk menghapus virus pada perangkat anda
              <br />
              dikarenakan membuka situs ilegal.
            </div>
            <button className="virus-btn" onClick={handleOk}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* JUMPSCARE */}
      {showJumpscare && (
        <div className="jumpscare-overlay">
          <img src={kaget} alt="jumpscare" />
        </div>
      )}
    </div>
  );
}
