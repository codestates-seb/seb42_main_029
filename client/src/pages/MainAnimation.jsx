import React from "react";
import styled, { keyframes } from "styled-components";
import Slide from "../components/Main/Slide";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import mainLogo from "../assets/svg/headerLogoDog.svg";
import slideImg1 from "../assets/slide/slideImage1.png";
import slideImg2 from "../assets/slide/slideImage2.png";
import slideImg3 from "../assets/slide/slideImage3.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";

import runningdog from "../assets/img/running dog.gif";
import runningdogs from "../assets/img/picmix.com_2018219.gif";
import runningdog3 from "../assets/img/runningdog3.gif";

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
      {/* <Dog src={runningdogs} onClick={linkToAbout}></Dog> */}

      <WrapperSlide>
        <Slide />
      </WrapperSlide>
      {/* <div>
        <Fade right>
          <div>
            <img src={slideImg1}></img>
          </div>
        </Fade>
        <Zoom>
          <div>
            <img src={slideImg2}></img>
          </div>
        </Zoom>
      </div> */}
      <Product />
    </>
  );
}

const WrapperSlide = styled.div`
  @keyframes Loop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-270%, 0, 0);
      transform: translate3d(-270%, 0, 0);
    }
  }
`;
const move = keyframes`
0%{
  top: 4rem;
  left: -35%;
}
/* 10%{
  top: 4rem;
  left: 7%;
}
20%{
  top: 4rem;
  left: 19%;
}
30%{
  top: 4rem;
  left: 29%;
}
40%{
  top: 4rem;
  left: 40%;
}
47%{
  top: 4rem;
  left: 49%;
}
55%{
  top: 4rem;
  left: 58%;
}
60%{
  top: 4rem;
  left: 67%;
}
70%{
  top: 4rem;
  left: 77%;
}
80%{
  top: 4rem;
  left: 85%;
}
90%{
  top: 4rem;
  left: 94%;
}
97%{
  top: 4rem;
  left: 105%;
} */
100%{
  top: 4rem;
  left: 100%;
}
`;
const Dog = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: auto;
  height: 80px;
  position: absolute;
  top: 3.2rem;
  left: -40%;
  z-index: 600;
  transition: 1s;
  animation: ${move} 10s 0s infinite;
  /* border-bottom: -300px;
  padding-bottom: -100px; */
`;

const Animation = styled.div`
  /* animation: Loop 30s linear infinite; */
`;
