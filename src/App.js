import { Routes, Route } from "react-router-dom";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/dark" element={<PageTwo />} />
      <Route path="/gallery" element={<PageThree />} />
    </Routes>
  );
}
