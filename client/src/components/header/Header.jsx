import React, { useState } from "react";
import styled from "styled-components";
import dogLogo from "../../assets/svg/headerLogoDog.svg";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const LogOutHandle = () => {
    alert("로그아웃 하시겠습니까?");
  };
  return (
    <Wrapper>
      <LeftSide>
        <p>Home</p>
        <p>Shop</p>
        <p>About</p>
      </LeftSide>

      <MiddleSide>
        <img src={dogLogo} alt="headerLogo" />
        <p>Pet Shop</p>
      </MiddleSide>

      {!isLogin ? (
        <RightSide>
          <p>Login</p>
          <p>SignUp</p>
          <p>Seller SignUp</p>
          <p>Cart</p>
        </RightSide>
      ) : (
        <RightSide>
          <p onClick={LogOutHandle}>LogOut</p>
          <p>My Page</p>
          <p>Cart</p>
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
`;
