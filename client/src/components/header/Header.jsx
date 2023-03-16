import React, { useState } from "react";
import styled from "styled-components";
import dogLogo from "../../assets/svg/headerLogoDog.svg";
import LogoutModal from "./LogoutModal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {

  const [modalOpen, setModalOpen] = useState(false);
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <LeftSide>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <p>Home</p>
        </Link>
        <p>Shop</p>
        <p>About</p>
      </LeftSide>

      <MiddleSide>
        <img src={dogLogo} alt="headerLogo" />
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <p>모두댕냥</p>
        </Link>
      </MiddleSide>

      {!state.user.isLogin ? (
        <RightSide>
          <Link to="/login" style={{ textDecorationLine: "none" }}>
            <p>Login</p>
          </Link>

          <Link to="/signUp" style={{ textDecorationLine: "none" }}>
            <p>SignUp</p>
          </Link>

          <Link to="/sellerSignUp" style={{ textDecorationLine: "none" }}>
            <p>Seller SignUp</p>
          </Link>

          <Link to="/cart" style={{ textDecorationLine: "none" }}>
            <p>Cart</p>
          </Link>
        </RightSide>
      ) : (
        <RightSide>
          <p onClick={showModal}>LogOut</p>
          {modalOpen && <LogoutModal setModalOpen={setModalOpen} />}
          <p>My Page</p>
          <Link to="/cart">
            <p>Cart</p>
          </Link>
        </RightSide>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;
  background-color: #fbd8d8;
  font-size: 12px;
  position: sticky;
  top: 0;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;

  p {
    color: black;
  }
  p:hover {
    cursor: pointer;
    font-weight: 600;
    color: #ffffff;
  }
`;
const MiddleSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 1.6rem;
  font-weight: 600;

  img {
    height: 7rem;
    width: 7rem;
  }

  p {
    position: relative;
    right: 1rem;
    color: black;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;

  p {
    color: black;
  }
  p:hover {
    cursor: pointer;
    font-weight: 600;
    color: #ffffff;
  }
`;
