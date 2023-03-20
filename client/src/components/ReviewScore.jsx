import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

function Rating(props) {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    //클릭된곳까지 true로 만들어줌
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    props.setScore(score);
  };

  return (
    <Wrap>
      {/* <RatingText>평가하기</RatingText> */}
      <div>평점</div>
      <Stars>
        {ARRAY.map((el, idx) => {
          return <FaStar key={idx} size="35" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
        })}
      </Stars>
    </Wrap>
  );
}

export default Rating;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

// const RatingText = styled.div`
//   color: #787878;
//   font-size: 12px;
//   font-weight: 400;
// `;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
