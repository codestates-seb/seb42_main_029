import React from "react";
import styled from "styled-components";
import Slide from "../components/Main/Slide";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import mainLogo from "../assets/svg/headerLogoDog.svg";
import slideImg1 from "../assets/slide/slideImage1.png";
import slideImg2 from "../assets/slide/slideImage2.png";
import slideImg3 from "../assets/slide/slideImage3.png";

export default function MainAnimation() {
  const state = useSelector((state) => state);

  console.log(state);
  return (
    <>
      <WrapperSlide>
        <Slide />
      </WrapperSlide>
      <img src={mainLogo}></img>
      <img src={slideImg1}></img>
      <img src={slideImg2}></img>
      <img src={slideImg3}></img>

      <Product />
    </>
  );
}

const WrapperSlide = styled.div``;
