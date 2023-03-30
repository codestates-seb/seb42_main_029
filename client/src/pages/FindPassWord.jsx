import React from 'react'
import styled from 'styled-components';
import FindPassWordForm from '../components/find/FindPassWordForm';

export default function FindPassWord() {
  return (
    <>
    <Wrapper>
      <FindPassWordForm/>
    </Wrapper>
  </>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Dovemayo_gothic';
`;
