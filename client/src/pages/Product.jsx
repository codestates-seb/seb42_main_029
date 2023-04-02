import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dummy from "../assets/dummy/dummy.json";
import ProductInfo from "./ProductInfo";
import axios from "axios";
import Fade from "react-reveal/Fade";

const Product = () => {
  const [data, setData] = useState([]);
  const url = `${process.env.REACT_APP_AWS_EC2}/products?page=1&size=12`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ margin: " 0 3rem ", color: "#363636" }}>
      <TextSelect>
        <span>인기상품 몇몇선택</span> <span>최신등록순/인기순</span>
      </TextSelect>
      <ItemContainer>
        {Array.isArray(data) &&
          data.map((datas) => (
            <ItemContents key={datas.productId}>
              <Fade bottom>
                <Link
                  to={{
                    pathname: `/ProductInfo/${datas.productId}`,
                    state: { datas: datas },
                  }}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {/* Shop이미지는 thumbnailLink의 주소 그대로쓰기 */}

                  <ItemsImage src={datas.thumbnailLink} alt="못찾겠따" loading="lazy" />
                  <TextTitle>{datas.name}</TextTitle>
                  <TextPrice>{datas.price}원 </TextPrice>
                </Link>
              </Fade>
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
  font-family: "Dovemayo_gothic";
`;

// ItemContents
const ItemContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 24%;
  min-width: 300px;

  height: 360px;
  border-radius: 10px;
  margin-bottom: 1%;
`;

const ItemsImage = styled.img`
  display: flex;
  flex-direction: row;
  width: 270px;
  height: 270px;
`;

const TextTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 20px;
  color: #363636;
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

  font-family: 'Dovemayo_gothic';

  @media screen and (max-width: 768px){
    font-size: 1rem;
  }
`;
