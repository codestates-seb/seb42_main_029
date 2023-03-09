import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <h1>Team : K5</h1>
      <h2>ProjectName : 모두댕냥</h2>
      <p>FrontEnd : 김동원, 김지현, 김민혁</p>
      <p>BackEnd : 김례화, 김규하, 이경민</p>
      <p>대략 차후수정~</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: gainsboro;
`;
