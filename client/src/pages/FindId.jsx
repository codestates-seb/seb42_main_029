import React from "react";
import styled from "styled-components";
import FindIdForm from "../components/find/FindIdForm";

export default function FindId() {
  return (
    <>
      <Wrapper>
        <FindIdForm/>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Dovemayo_gothic';
`;
