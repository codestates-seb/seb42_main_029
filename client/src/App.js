import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styled from "styled-components";
import Pay from "./pages/Pay";
import { CookiesProvider } from "react-cookie";
import TopButton from "./components/topbutton";
import axios from "axios";
import LazyPage from "./pages/LazyPage";

// 모든 요청에 withCredentials가 true로 설정됩니다.
axios.defaults.withCredentials = true;

function App() {
  const About = React.lazy(() => import("./pages/About"));
  const Main = React.lazy(() => import("./pages/Main"));
  const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
  const Shop = React.lazy(() => import("./pages/Shop"));
  const ProductInfo = React.lazy(() => import("./pages/ProductInfo"));
  const Login = React.lazy(() => import("./pages/login"));
  const SignUp = React.lazy(() => import("./pages/SignUp"));
  const SellerSignUp = React.lazy(() => import("./pages/SellerSignUp"));
  const FindId = React.lazy(() => import("./pages/FindId"));
  const FindPassWord = React.lazy(() => import("./pages/FindPassWord"));
  const PayComplete = React.lazy(() => import("./pages/PayComplete"));
  const QnAQuestion = React.lazy(() => import("./pages/QnAQuestion"));
  const QnAAnswer = React.lazy(() => import("./pages/QnAAnswer"));
  const Mypage = React.lazy(() => import("./pages/Mypage"));
  const SellerMypage = React.lazy(() => import("./pages/SellerMypage"));
  const AdminMypage = React.lazy(() => import("./pages/AdminMypage"));
  const ReviewForm = React.lazy(() => import("./pages/ReviewForm"));
  const Cart = React.lazy(() => import("./pages/Cart"));
  const NewItemRegistrationForm = React.lazy(() => import("./pages/NewItemRegistrationForm"));

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <Wrapper>
          <Suspense fallback={<LazyPage />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/lazy" element={<LazyPage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/productInfo/:productId" element={<ProductInfo />} />
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
              <Route path="/reviewForm/:productId" element={<ReviewForm />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/newItemForm" element={<NewItemRegistrationForm />} />

              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
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
  padding-bottom: 20%;
  margin: 0 auto;
`;
