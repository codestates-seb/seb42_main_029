import React from "react";
import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  return (
    <>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
