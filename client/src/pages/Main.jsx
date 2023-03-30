import React from "react";
import styled from "styled-components";
import Slide from "../components/Main/Slide";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const state = useSelector((state) => state);

  console.log(state);
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
  font-family: 'Dovemayo_gothic';
  `;
