import React from "react";
import Shop from "./pages/Shop";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductInfo6 from "./pages/ProductInfo6";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="ProductInfo6" element={<ProductInfo6 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
