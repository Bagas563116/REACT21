import { useNavigate } from "react-router-dom";
import Music from "../Components/Music";
import bg from "../Assets/bg.png";

export default function PageOne() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* <Music /> */}
      <h1>🎉 Selamat Ulang Tahun 🎉</h1>
      <p>Untuk manusia paling ngeselin tapi dirindukan 😌</p>

      <button
        onClick={() => navigate("/dark")}
        style={{
          marginTop: 20,
          padding: "12px 24px",
          borderRadius: 12,
          border: "none",
          cursor: "pointer",
        }}
      >
        NEXT →
      </button>
    </div>
  );
}
