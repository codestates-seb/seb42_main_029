import React from "react";
import Shop from "./pages/Shop";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductInfo from "./pages/ProductInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="ProductInfo" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
