import React, { useState } from "react";
import styled from "styled-components";
import dogLogo from "../../assets/svg/headerLogoDog.svg";
import LogoutModal from "./LogoutModal";
import { Link } from "react-router-dom";
export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <LeftSide>
        <Link to="/">Home</Link>
        <p>Shop</p>
        <p>About</p>
      </LeftSide>

      <MiddleSide>
        <img src={dogLogo} alt="headerLogo" />
        <Link to="/">
          <p>모두댕냥</p>
        </Link>
      </MiddleSide>

      {!isLogin ? (
        <RightSide>
          <Link to="/login">
            <p>Login</p>
          </Link>

          <Link to="/signUp">
            <p>SignUp</p>
          </Link>

          <Link to="/sellerSignUp">
            <p>Seller SignUp</p>
          </Link>

          <Link to="/cart">
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
    text-decoration: none;
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
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;

  p:hover {
    cursor: pointer;
    font-weight: 600;
    color: #ffffff;
  }
`;
