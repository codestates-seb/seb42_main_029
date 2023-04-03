import React, { useState } from "react";
import styled from "styled-components";

export default function AnswerForm() {
  const [answerContent, setAnswerContent] = useState("");

  const contentHandle = (e) => {
    setAnswerContent(e.target.value);
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Q&A 게시판</Title>
        <h2>답변하기</h2>

        <MiddleContents>
          <h1>제목</h1>
          {/* 받아올 QnA 제목 */}
          <p>배송 미도착</p>

          <h1>내용</h1>
          {/* 받아올 QnA 내용 */}
          <p>일주일 전에 주문한 물건이 아직 안왔습니다. 배송현황 알려주세요 </p>
        </MiddleContents>

        <Form>
          <label>답변내용</label>
          <textarea onChange={contentHandle}></textarea>
        </Form>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 730px;
  width: 80%;
  background-color: #fef7f7;
  margin: 3rem 0;
`;

const InnerWrapper = styled.div`
  margin: 0 2rem;

  /* 답변하기 h2 */
  h2 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const MiddleContents = styled.div`
  margin-bottom: 10rem;
  h1 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  /* 내용 */
  p {
    margin-bottom: 6rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  label {
    margin-bottom: 0.7rem;
    font-size: 1.1rem;
  }
  input {
    width: 100%;
    height: 2rem;
    border: none;
    resize: none;
    margin-bottom: 2rem;
  }

  textarea {
    width: 100%;
    height: 10rem;
    border: none;
    resize: none;
  }
`;
