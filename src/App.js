import React from "react";
import Shop from "./pages/Shop";
import ProductInfo from "./pages/ProductInfo";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
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
import Mypage from "./pages/Mypage";
import SellerMypage from "./pages/SellerMypage";
import AdminMypage from "./pages/AdminMypage";
import ReviewForm from "./pages/ReviewForm";
import NewItemRegistrationForm from "./pages/NewItemRegistrationForm";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Main from "./pages/Main";
import { CookiesProvider } from "react-cookie";
import ErrorPage from "./pages/ErrorPage";
import TopButton from "./components/topbutton";
import axios from "axios";

// 모든 요청에 withCredentials가 true로 설정됩니다.
axios.defaults.withCredentials = true;

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/productInfo" element={<ProductInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/sellerSignUp" element={<SellerSignUp />} />
            <Route path="/findId" element={<FindId />} />
            <Route path="/findPassWord" element={<FindPassWord />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/payComplete" element={<PayComplete />} />
            <Route path="/qnaQuestion" element={<QnAQuestion />} />
            <Route path="/qnaAnswer" element={<QnAAnswer />} />
            <Route path="/myPage" element={<Mypage />} />
            <Route path="/sellerMypage" element={<SellerMypage />} />
            <Route path="/adminMypage" element={<AdminMypage />} />
            <Route path="/reviewForm" element={<ReviewForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/newItemForm" element={<NewItemRegistrationForm />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Wrapper>
        <TopButton />
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1450px;
  min-height: 100%;
  padding-bottom: 200px;
  margin: 0 auto;
`;