import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CursorNya from "../Components/CursorNya";
import CardGlass from "../Components/CardGlass";

const messages = [
  "Terima kasih sudah jadi teman paling ribut",
  "Maaf kalau sering ngejek 😅",
  "Tapi serius…",
  "Hidup kamu bikin hidup orang lain rame",
  "Jangan berubah (kecuali makin kaya 💰)",
];

export default function PageTwo() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <CursorNya>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <CardGlass text={messages[index]} />

        <div>
          <button onClick={() => setIndex(Math.max(0, index - 1))}>◀</button>
          <button onClick={() => setIndex(Math.min(4, index + 1))}>▶</button>
        </div>

        {index === 4 && (
          <button
            onClick={() => navigate("/gallery")}
            style={{
              position: "absolute",
              bottom: 40,
              right: 40,
              opacity: 0,
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 1)}
            onMouseLeave={(e) => (e.target.style.opacity = 0)}
          >
            ?
          </button>
        )}
      </div>
    </CursorNya>
  );
}
