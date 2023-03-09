import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Mypage from "./pages/Mypage";
import SellerMypage from "./pages/SellerMypage";
import AdminMypage from "./pages/AdminMypage";

const Content = styled.div``;
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div>Header</div>
      <Content>
        <Routes>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/sellermypage" element={<SellerMypage />}></Route>
          <Route path="/adminmypage" element={<AdminMypage />}></Route>
        </Routes>
      </Content>
      <div>Footer</div>
    </BrowserRouter>

    // <div>asdfasdf</div>
  );
}

export default App;
