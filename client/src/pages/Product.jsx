import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dummy from "../assets/dummy/dummy.json";
import ProductInfo from "./ProductInfo";

// import img_dummy1 from '../assets/productImage/img_dummy1.png';
// import img_dummy2 from '../assets/productImage/img_dummy2.png';
// import img_dummy3 from '../assets/productImage/img_dummy3.png';
// import img_dummy4 from '../assets/productImage/img_dummy4.png';
// import img_dummy5 from '../assets/productImage/img_dummy5.png';
// import img_dummy6 from '../assets/productImage/img_dummy6.png';
// import img_dummy7 from '../assets/productImage/img_dummy7.png';
// import img_dummy8 from '../assets/productImage/img_dummy8.png';


const Product = () => {
  console.log(dummy.sample);
  return (
    <div style={{ margin: " 0 3rem " , color: "#363636"}}>
      {/* dummy.json을 호출 */}
      <TextSelect>
        <span>인기상품 몇몇선택</span> <span>최신등록순/인기순</span>
      </TextSelect>
      {/*  */}
      <ItemContainer>
        {dummy.sample.map((val) => (
          <ItemContents key={val.product_id}>
            <Link
              to="/ProductInfo"
              style={{ color: "black", textDecoration: "none" }}
            >
              <ItemsImage src={val.image} alt="못찾겠따" />
              <TextTitle>{val.name}</TextTitle>
              <TextPrice>{val.price} </TextPrice>
            </Link>
          </ItemContents>
        ))}
      </ItemContainer>
    </div>
  );
};

export default Product;

// ItemContainer 축잡는 용도로 사용
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

// ItemContents
const ItemContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 24%;
  min-width: 330px;

  height: 360px;
  border-radius: 10px;
  margin-bottom: 1%;
`;

const ItemsImage = styled.img`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 270px;
`;

const TextTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 20px;
  color : #363636;
`;

const TextPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-size: 20px;
  color: #ff5c00;
`;

const TextSelect = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-top: 100px;
  margin-bottom: 30px;
`;