import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LogoutModal({ setModalOpen }) {
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const logoutHandle = () => {
    //! 쿠키제거
    // removeCookie("accessToken", {
    //   path: "/",
    //   domain: "http://localhost:3000/",
    // });

    setCookie("accessToken", "tokenXX", { path: "/" });
    // 헤드바 로그인 상태변경
    dispatch({ type: "USER_ISLOGOUT" });

    alert("성공적으로 로그아웃 했습니다.");
    navigate("/login");
    // 리로드시 기존 토큰 값에서 tokenXX 값 변경
    window.location.reload();
  };
  return (
    <WrapperOut>
      <Wrapper>
        <h2>로그아웃 하시겠습니까?</h2>
        <ButtonGrp onSubmit={logoutHandle}>
          <button>확인</button>
          <button onClick={closeModal}>취소</button>
        </ButtonGrp>
      </Wrapper>
    </WrapperOut>
  );
}

const WrapperOut = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: #feeade;
  /* border: 1px solid gray; */
  box-shadow: 1px 2px 3px gray;
  border-radius: 7px;

  /* 최상단 */
  z-index: 999;

  /* 중앙 */
  position: absolute;
  top: 20rem;
  left: 40%;

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 20rem;
    left: 15%;
  }

  h2 {
    font-size: 1.2rem;
  }

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

const ButtonGrp = styled.form`
  display: flex;
  margin-top: 2rem;
`;
