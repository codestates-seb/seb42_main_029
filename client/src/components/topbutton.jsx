import { useState, useEffect } from "react";
import styled from "styled-components";
//
function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 400) {
        //700밑으로 내려갔을때만 탑버튼 보이도록
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <Wrapper>
        <div className="scroll__container">
          <button id="top" onClick={scrollToTop} type="button">
            {" "}
            TOP
          </button>
        </div>
      </Wrapper>
    )
  );
}

export default TopButton;

const Wrapper = styled.div`
  .scroll__container {
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 1;
  }
  #top {
    font-weight: bold;
    font-size: 20px;
    padding: 15px 10px;
    background-color: #fdb8b8;
    color: #fff;
    border: 1px solid rgb(210, 204, 193);
    border-radius: 50%;
    border: 3px solid #ff9696;

    outline: none;
    cursor: pointer;
  }
  #top:hover {
    color: rgb(242, 99, 99);
  }
`;
