export default function FotoFoto({ src }) {
  return (
    <img
      src={src}
      style={{
        width: 180,
        transform: `rotate(${Math.random() * 10 - 5}deg)`,
        cursor: "pointer",
      }}
      onClick={() => alert("😂")}
    />
  );
}
