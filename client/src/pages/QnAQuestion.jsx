import React from "react";
import styled from "styled-components";
import BtnGrp from "../components/qna/question/BtnGrp";
import QuestionsForm from "../components/qna/question/QuestionsForm";

export default function QnAQuestion() {
  return (
    <Wrapper>
      <QuestionsForm />
      <BtnGrp />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Dovemayo_gothic';
`;
