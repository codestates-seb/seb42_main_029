import React from "react";
import styled from "styled-components";
import dogCatImg from "../assets/img/aboutImg.png";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <Wrapper>
      {/* <Fade left> */}
      <LeftWrapper>
        <Title>🐶 모두댕냥 🐱</Title>
        <p>모두댕냥은 반려동물과 그 주인을 위한 종합 펫쇼핑몰입니다. </p>
        <p>다양한 종류의 반려동물 용품과 음식, 건강 보조제, 그리고 애견용품 등을 제공합니다.</p>
        <p>저희의 제품은 높은 품질, 안정성보장과 다양한 브랜드의 제품을 보유하고 있습니다.</p>
        <p>또한, 무료배송 서비스를 제공하여 고객의 편리성을 최우선으로 생각합니다.</p>
        <p>목표는 고객과 반려동물이 함께 행복하고 건강한 생활을 도와드리는 것 입니다.</p>
        <p>따라서, 우리는 항상 고객의 요구를 충족시키기 위해 노력하고,</p>
        <p> 최상의 상품과 서비스를 제공하기 위해 노력할 것입니다.</p>
        <p>만약 반려동물과 함께 건강하고 행복한 삶을 원하신다면, 모두댕냥을 방문해주세요!</p>
      </LeftWrapper>
      {/* </Fade> */}

      <RightWrapper>
        <Fade right>
          <img src={dogCatImg} alt="dogCatImg" />
        </Fade>
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem 2rem 0 1rem;
  font-family: "Dovemayo_gothic";

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const LeftWrapper = styled.div`
  flex: 1;
  /* margin-right: 3rem; */

  p {
    margin: 1.2rem 0 1.2rem 1.2rem;
    font-size: 1.1rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 2rem 0 2rem 1rem;
`;

const RightWrapper = styled.div`
  flex: 1;
  img {
    width: 500px;
    height: 500px;
    border-radius: 15px;
    margin-left: 2rem;

    @media screen and (max-width: 1024px) {
      width: 430px;
      height: 430px;
      margin-top: 2rem;
    }

    @media screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
      margin-top: 2rem;
    }
  }
`;
