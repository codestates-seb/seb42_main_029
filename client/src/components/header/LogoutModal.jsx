import React from "react";
import styled from "styled-components";

export default function LogoutModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const logoutHandle = (e) => {
    console.log(e);
  };
  return (
    <WrapperOut>
      <Wrapper>
        <h2>로그아웃 하시겠습니까?</h2>
        <ButtonGrp>
          <button onClick={logoutHandle}>확인</button>
          <button onClick={closeModal}>취소</button>
        </ButtonGrp>
      </Wrapper>
    </WrapperOut>
  );
}

const WrapperOut = styled.div`
  background-color: gray;
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

const ButtonGrp = styled.div`
  display: flex;
  margin-top: 2rem;
`;
