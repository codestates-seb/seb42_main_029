import React from "react";
import styled, { keyframes } from "styled-components";
import Slide from "../components/Main/Slide";
import Product from "./Product";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import runningdog from "../assets/img/running dog.gif";

// import { useScrollFadeIn } from "../hooks";

export default function MainAnimation() {
  const state = useSelector((state) => state);
  // const animatedItem = useScrollFadeIn();
  console.log(state);
  const navigate = useNavigate();
  const linkToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <Dog src={runningdog} onClick={linkToAbout}></Dog>

      <WrapperSlide>
        <Slide />
      </WrapperSlide>

      <Product />
    </>
  );
}

const WrapperSlide = styled.div`
  .dog-container {
    /* width: 90%; */
    overflow: hidden;
    max-width: 100%;
  }
  font-family: "Dovemayo_gothic";
`;
const move = keyframes`
0%{
  top: 3.5rem;
  right: 100%;
}
50%{
  top: 3.5rem;
  left: 99%;
  transform: scaleX(1);
}
51%{
  transform: scaleX(-1);
}
100%{
  transform: scaleX(-1);

  top: 3.5rem;
  /* right: 0%; */
  right: 0px;
}
`;

const Dog = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
  overflow: hidden;
  max-width: 100%;

  width: auto;
  height: 80px;
  position: absolute;
  top: 3.2rem;
  left: -40%;
  z-index: 600;
  transition: 1s;
  animation: ${move} 19s 0s infinite;
`;
