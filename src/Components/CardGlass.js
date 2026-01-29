export default function CardGlass({ text }) {
  return (
    <div
      style={{
        padding: 30,
        maxWidth: 400,
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.1)",
        borderRadius: 20,
        color: "white",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}
