import { Routes, Route } from "react-router-dom";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";
import MusicAll from "./Components/MusicAll";

export default function App() {
  return (
    <>
      <MusicAll /> {}
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/message" element={<PageTwo />} />
        <Route path="/secret" element={<PageThree />} />
      </Routes>
    </>
  );
}
