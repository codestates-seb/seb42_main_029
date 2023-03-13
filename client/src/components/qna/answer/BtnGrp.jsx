import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BtnGrp() {
  // 취소나 완료 둘 다 해당 상세페이지로 navigate
  const navigate = useNavigate();

  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button>등록 취소</button>
        <button>등록 완료</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  form {
    button {
      width: 200px;
      height: 70px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1.3rem;
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
