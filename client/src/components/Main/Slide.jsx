import slideImg1 from "../../assets/slide/slideImage1.png";
import slideImg2 from "../../assets/slide/slideImage2.png";
import slideImg3 from "../../assets/slide/slideImage3.png";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <img src={slideImg1} alt="봄나들이 하네스 & 리드줄 가획전" />
        </div>
        <div>
          <img src={slideImg2} alt="집콕 댕냥이 관절&장 건강 키우기" />
        </div>
        <div>
          <img src={slideImg3} alt="국제 강아지의 날 기념" />
        </div>
      </Slider>
    </Wrapper>
  );
}

export default Slide;

const Wrapper = styled.div`
  margin-top: 3rem;
  z-index: 500;

  img {
    width: 100%;
  }
`;
