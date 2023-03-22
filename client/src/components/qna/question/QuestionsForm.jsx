import React, { useState } from "react";
import styled from "styled-components";

export default function QuestionsForm() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");

  const titleHandle = (e) => {
    setQuestionTitle(e.target.value);
  };

  const contentHandle = (e) => {
    setQuestionContent(e.target.value);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Q&A 게시판</Title>
        <p>질문하기</p>

        <Form>
          <label>제목</label>
          <input onChange={titleHandle}></input>

          <label>내용</label>
          <textarea onChange={contentHandle}></textarea>
        </Form>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 80%;
  background-color: #fef7f7;
  margin: 3rem 0;
`;

const InnerWrapper = styled.div`
  margin: 0 2rem;

  /* 질문하기 p */
  p {
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

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.7rem;
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
    height: 17rem;
    border: none;
    resize: none;
  }
`;
