import React from 'react'
import styled from 'styled-components';
import AnswerForm from '../components/qna/answer/AnswerForm';
import BtnGrp from '../components/qna/answer/BtnGrp';

export default function QnAAnswer() {
  return (
    <Wrapper>
      <AnswerForm></AnswerForm>
      <BtnGrp></BtnGrp>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;