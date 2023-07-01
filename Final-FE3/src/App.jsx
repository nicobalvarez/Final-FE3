import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favoritos from "./Routes/Favoritos";
import Contacto from "./Routes/Contacto";
import Details from "./Routes/Details";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
