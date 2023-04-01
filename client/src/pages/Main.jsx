import React from "react";
import styled from "styled-components";
import Slide from "../components/Main/Slide";
import Product from "./Product";

export default function Main() {
  return (
    <>
      <WrapperSlide>
        <Slide />
      </WrapperSlide>

      <Product />
    </>
  );
}

const WrapperSlide = styled.div`
  font-family: "Dovemayo_gothic";
`;
