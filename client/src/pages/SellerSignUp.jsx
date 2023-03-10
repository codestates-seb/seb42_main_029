import React from "react";
import styled from "styled-components";
import SellerSignUpForm from "../components/signup/SellerSignUpForm";

export default function SellerSignUp() {
  return (
    <>
      <Wrapper>
        <SellerSignUpForm />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
