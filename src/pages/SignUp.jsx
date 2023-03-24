import React from "react";
import styled from "styled-components";
import SignUpForm from "../components/signup/SignUpForm";

export default function SignUp() {
  return (
    <>
      <Wrapper>
        <SignUpForm />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;