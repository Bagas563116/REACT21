export default function CursorNya({ children }) {
  const handleMove = (e) => {
    e.currentTarget.style.setProperty("--x", `${e.clientX}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      style={{
        "--x": "50%",
        "--y": "50%",
        height: "100vh",
        background:
          "radial-gradient(circle 120px at var(--x) var(--y), rgba(255,255,255,0.15), #000)",
      }}
    >
      {children}
    </div>
  );
}
