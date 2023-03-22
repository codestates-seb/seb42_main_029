import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import close from "../../assets/img/close.png";
import LogoutModal from "./LogoutModal";

export default function MobileMenu({ setMobileModalOpen, modalOpen, setModalOpen }) {
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook

  // 모바일 메뉴 닫기
  const closeModal = () => {
    setMobileModalOpen(false);
  };

  // 로그아웃 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      {!state.user.isLogin ? (
        <WrapperOut>
          <Wrapper>
            <MenuList>
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
              <img src={close} alt="closeBtnImg" onClick={closeModal} />
            </MenuList>
          </Wrapper>
        </WrapperOut>
      ) : (
        <WrapperOut>
          <Wrapper>
            <MenuList style={{ marginBottom: "5.3rem", marginRight: "2.1rem" }}>
              <p onClick={showModal} style={{ cursor: "pointer" }}>
                LogOut
              </p>
              {modalOpen && <LogoutModal setModalOpen={setModalOpen} />}

              <Link to="/mypage" style={{ textDecorationLine: "none" }}>
                <p>My Page</p>
              </Link>

              <Link to="/cart" style={{ textDecorationLine: "none" }}>
                <p>Cart</p>
              </Link>
              <img src={close} alt="closeBtnImg" onClick={closeModal} style={{ position: "absolute", top: "11.8rem", left: "6.7rem" }} />
            </MenuList>
          </Wrapper>
        </WrapperOut>
      )}
    </>
  );
}

const WrapperOut = styled.div`
  position: fixed;
  right: 10.1rem;

  background: rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 240px;
  background-color: #fbd8d8;
  /* border: 1px solid gray; */
  box-shadow: 1px 1px 1px 1px gray;
  border-radius: 7px;

  /* 최상단 */
  z-index: 999;

  /* 중앙 */
  position: absolute;

  button {
    width: 100px;
    height: 30px;
    border: none;
    background-color: #faa36f;
    border-radius: 5px;
    color: #ffffff;
    margin: 0 0.7rem;

    :hover {
      cursor: pointer;
      background-color: #faa333;
    }
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
  p {
    padding: 0.8rem;
    color: #363636;
    font-size: 1.2rem;

    p:hover {
      cursor: pointer;
      font-weight: 600;
      color: #ffffff;
    }
  }

  img {
    position: relative;
    top: 0.7rem;
    left: 5.8rem;
    padding: 0.7rem;
  }
`;
