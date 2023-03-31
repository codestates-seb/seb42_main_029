import React, { useState } from "react";
import styled from "styled-components";
import dogLogo from "../../assets/svg/headerLogoDog.svg";
import hamburgerLogo from "../../assets/img/hamburger.png";
import LogoutModal from "./LogoutModal";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  // 로그아웃 모달 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모바일 모달 state
  const [mobileModalOpen, setMobileModalOpen] = useState(false);

  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  // 로그아웃 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  // 모바일 모달창 노출
  const showMobileMenuModal = () => {
    setMobileModalOpen(true);
  };

  return (
    <Wrapper>
      <LeftSide>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <p>Home</p>
        </Link>
        <Link to="/shop" style={{ textDecorationLine: "none" }}>
          <p>Shop</p>
        </Link>
        <Link to="/about" style={{ textDecorationLine: "none" }}>
          <p>About</p>
        </Link>
      </LeftSide>

      <MiddleSide>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <img src={dogLogo} alt="headerLogo" />
        </Link>

        <Link to="/" style={{ textDecorationLine: "none" }}>
          <p>모두댕냥</p>
        </Link>
      </MiddleSide>

      {!state.user.isLogin ? (
        <>
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
          <MenuLogo>
            <img
              src={hamburgerLogo}
              alt="MobileMenu"
              onClick={showMobileMenuModal}
            />
            {mobileModalOpen && (
              <MobileMenu setMobileModalOpen={setMobileModalOpen} />
            )}
          </MenuLogo>
        </>
      ) : (
        <>
          <RightSide>
            <p onClick={showModal}>LogOut</p>
            {modalOpen && <LogoutModal setModalOpen={setModalOpen} />}

            {/* mypage 조건부 랜더링 가능하도록 하는 코드  */}
            {state.user.role === "BUYER" ? (
              <Link to="/mypage" style={{ textDecorationLine: "none" }}>
                <p>My Page</p>
              </Link>
            ) : state.user.role === "SELLER" ? (
              <Link to="/sellerMypage" style={{ textDecorationLine: "none" }}>
                <p>My Page</p>
              </Link>
            ) : (
              <Link to="/adminMypage" style={{ textDecorationLine: "none" }}>
                <p>My Page</p>
              </Link>
            )}

            <Link to="/cart" style={{ textDecorationLine: "none" }}>
              <p>Cart</p>
            </Link>
          </RightSide>
          <MenuLogo>
            <img
              src={hamburgerLogo}
              alt="MobileMenu"
              onClick={showMobileMenuModal}
            />
            {mobileModalOpen && (
              <MobileMenu
                setMobileModalOpen={setMobileModalOpen}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            )}
          </MenuLogo>
        </>
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
  color: #363636;
  z-index: 900;
  border-bottom: 1.2px solid #af9393;
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  font-family: 'Dovemayo_gothic';
  
  p {
    color: #363636;
  }
  p:hover {
    cursor: pointer;
    font-weight: 600;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// 로고 && 메인타이틀
const MiddleSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Dovemayo_gothic';

  img {
    height: 7rem;
    width: 7rem;
  }

  p {
    position: relative;
    right: 1rem;
    color: black;
  }

  // 모바일 로고 && 타이틀
  @media screen and (max-width: 768px) {
    justify-content: flex-start;

    img {
      width: 5.5rem;
      height: 5.5rem;
    }

    p {
      position: relative;
      top: 0.2rem;
    }
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  font-family: 'Dovemayo_gothic';

  p {
    color: black;
  }
  p:hover {
    cursor: pointer;
    font-weight: 600;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuLogo = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin-right: 0.3rem;
    padding: 1.2rem;
    cursor: pointer;

    :hover {
      width: 22px;
      height: 22px;
    }
  }
  // ipad mini width === 768 >= min-width;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
