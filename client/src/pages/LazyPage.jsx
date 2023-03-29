import React from "react";
import styled from "styled-components";

export default function LazyPage() {

  return <div style={{ "font-size": "xx-large", margin: "5%" }}>Loading...</div>;

}

const Wrapper = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: #fbd8d8;
`;
