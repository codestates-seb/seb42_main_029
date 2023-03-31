import React from "react";
import styled from "styled-components";

export default function LazyPage() {
  return <Wrapper>Loading...</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: #fbd8d8;
  font-family: 'Dovemayo_gothic';
`;
