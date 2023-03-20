import React from "react";
import styled from "styled-components";
import mainLogo from "../../assets/svg/headerLogoDog.svg";
import github from "../../assets/img/github.png";

export default function Footer() {
  return (
    <Wrapper>
      <LeftWrapperWhole>
        <LeftWrapper>
          <img src={mainLogo} alt="MainLogo" />
          <LeftTitle>모두댕냥</LeftTitle>
        </LeftWrapper>

        <LeftParagraph>
          <p>반려동물 쇼핑몰</p>
          <p>Team__K5</p>
        </LeftParagraph>
      </LeftWrapperWhole>

      <RightWrapper>
        <RightTitle>C O N T A C T</RightTitle>
        <BestMaker>
          <a href="https://github.com/Ktuna95" target="_blank">
            <img src={github} alt="githubImg" />
            김동원_F
          </a>
        </BestMaker>
        <BestMaker>
          <a href="https://github.com/Min-hh-k" target="_blank">
            <img src={github} alt="githubImg" />
            김민혁_F
          </a>
        </BestMaker>
        <BestMaker>
          <a href="https://github.com/wlgus3" target="_blank">
            <img src={github} alt="githubImg" />
            김지현_F
          </a>
        </BestMaker>
        <BestMaker>
          <a href="https://github.com/steadykyu" target="_blank">
            <img src={github} alt="githubImg" />
            김규하_B
          </a>
        </BestMaker>
        <BestMaker>
          <a href="https://github.com/ryehwa" target="_blank">
            <img src={github} alt="githubImg" />
            김례화_B
          </a>
        </BestMaker>
        <BestMaker>
          <a href="https://github.com/ciaomin" target="_blank">
            <img src={github} alt="githubImg" />
            이경민_B
          </a>
        </BestMaker>
        <p>Copyrightⓒ 2023 All rights reserved by 모두댕냥_Project.</p>
      </RightWrapper>
      <EndWrapper></EndWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 280px;
  background-color: #f9e8e8;
  display: flex;
  color: #363636;
`;

const LeftWrapperWhole = styled.div`
  flex: 2.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  /* 이미지- 타이틀 아래 설명 p */
  p {
    font-size: 0.9rem;
    position: relative;
    right: 0.6rem;
    margin-bottom: 5px;
  }


`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 2rem;

    img {
      margin-right: 3rem;
      margin-top : 0.5rem;
    }
  }
`;

const LeftTitle = styled.div`
  font-size: 1.5rem;
  position: relative;
  right: 17px;
  top: 6px;
`;

const LeftParagraph = styled.div``;

const RightWrapper = styled.div`
  flex: 4;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 2.7rem;

  /* contact 하단 copyright */
  p {
    font-size: 0.7rem;
    margin-top: 0.8rem;
  }
  @media screen and (max-width: 500px) {
    margin-left: 1rem;
  }
`;

const RightTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 15px;
`;

const BestMaker = styled.div`
  margin-bottom: 10px;
  font-size: 0.8rem;

  a {
    color: #363636;
    text-decoration-line: none;
    cursor: pointer;

    :hover {
      color: #7c7c7c;
    }
  }

  img {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 6px;
  }
`;

// 공간 주기~
const EndWrapper = styled.div`
  flex: 2;
`;
