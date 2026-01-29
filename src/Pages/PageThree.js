import FotoFoto from "../Components/FotoFoto";
import img1 from "../Assets/kolase1.png";
import img2 from "../Assets/kolase2.png";
import img3 from "../Assets/kolase3.png";
import img4 from "../Assets/kolase4.png";
import img5 from "../Assets/kolase5.png";
import img6 from "../Assets/kolase6.png";

export default function PageThree() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div
      style={{
        height: "100vh",
        background: "#111",
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {images.map((img, i) => (
        <FotoFoto key={i} src={img} />
      ))}
    </div>
  );
}
