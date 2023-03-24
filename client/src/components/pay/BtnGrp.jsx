import React from "react";
import styled from "styled-components";

export default function BtnGrp() {
  return (
    <Wrapper>
      <form>
        <button>장바구니로 돌아가기</button>
        <button>결제하기</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  form {
    button {
      width: 170px;
      height: 60px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1rem;
    }
    button:last-child {
      margin-left: 1rem;
      :hover {
        color: #ffffff;
      }
    }

    button:first-child {
      background-color: #a48686;
      margin-right: 2rem;

      :hover {
        color: #ffffff;
      }
    }
  }
`;
