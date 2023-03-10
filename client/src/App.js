import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SellerSignUp from "./pages/SellerSignUp";
import FindId from "./pages/FindId";
import FindPassWord from "./pages/FindPassWord";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styled from "styled-components";
import Pay from "./pages/Pay";
import PayComplete from "./pages/PayComplete";
import QnAQuestion from "./pages/QnAQuestion";
import QnAAnswer from "./pages/QnAAnswer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Wrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/sellerSignUp" element={<SellerSignUp />} />
          <Route path="/findId" element={<FindId />} />
          <Route path="/findPassWord" element={<FindPassWord />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/payComplete" element={<PayComplete />} />
          <Route path="/qnaQuestion" element={<QnAQuestion />} />
          <Route path="/qnaAnswer" element={<QnAAnswer />} />
        </Routes>
      </Wrapper>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100%;
  padding-bottom: 200px;
  margin: 0 6rem;
`;
