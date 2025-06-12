import "./App.css";
import { productos } from "../data/dataProducts.js";
import { ProductList } from "../components/ProductList.jsx";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner.jsx";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(20);
  const handleAumentarContador = () => {
    setContador((prevCont) => prevCont + 1);
    setContador((prevCont) => prevCont + 1);
    setContador((prevCont) => prevCont + 1);
  };
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <button onClick={handleAumentarContador}>Aumentar Contador</button>
      <p>{contador}</p>
      <ProductList productos={productos}></ProductList>
      <Footer></Footer>
    </>
  );
}

export default App;
