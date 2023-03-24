import React from "react";
import styled from "styled-components";

export default function Modal(props) {
  const closeModal = () => {
    props.setModalOpen(false);
  };

  const submitHandle = (e) => {
    console.log(e);
    props.axiosfunction(props.data);
    props.setModalOpen(false);
  };
  return (
    <WrapperOut>
      <Wrapper>
        <h2> 정말 {props.keyword} 을(를) 하시겠습니까?</h2>
        <ButtonGrp>
          <button onClick={submitHandle}>확인</button>
          <button onClick={closeModal}>취소</button>
        </ButtonGrp>
      </Wrapper>
    </WrapperOut>
  );
}

const WrapperOut = styled.div`
  z-index: 200;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.135);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  background-color: #feeade;
  /* border: 1px solid gray; */
  box-shadow: 1px 2px 3px gray;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 25%;
  }

  /* 최상단 */
  z-index: 999;

  /* 중앙 */
  position: absolute;
  top: 20rem;
  left: 40%;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 30%;
    left: 15%;
  }

  h2 {
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
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
