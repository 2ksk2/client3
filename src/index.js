import { useState, useEffect, React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Menu from "./App";
import Category from "./Category";
import Login from "./Login";
import Resep from "./resep";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import reportWebVitals from "./reportWebVitals";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Loader /> : <Content />}</div>;
}

function Loader() {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={style}>
      <h1>Loading bang</h1>
    </div>
  );
}

function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} /> {/* Renders at / */}
        <Route path="/category" element={<Category />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/resep" element={<Resep />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
