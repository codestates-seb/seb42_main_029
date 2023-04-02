import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

const ProductInfo = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  //! 리액트 쿠키
  const [cookies] = useCookies(["accessToken"]);

  const productId = useParams().productId;
  // console.log(productId)

  // 셀러,관리자 장바구니담기 금지 시키기
  const state = useSelector((state) => state);
  const sellerRole = state.user.role;

  // 아이템 get

  const url = `${process.env.REACT_APP_AWS_EC2}/products/${productId}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { name, thumbnailLink, productDetailLinks, productDetail, price, stock, productStatus } = data;

  //장바구니에 추가하기

  const addCartProduct = async (id) => {
    const options = {
      headers: {
        Authorization: cookies.accessToken,
      },
      withCredentials: true,
    };

    if (sellerRole === "SELLER") {
      alert("판매자는 장바구니 담기 금지!");
      return navigate("/");
    }

    if (sellerRole === "ADMIN") {
      alert("관리자는 장바구니 담기 금지!");
      return navigate("/");
    }

    return await axios
      .post(`${process.env.REACT_APP_AWS_EC2}/carts/products/${id}`, { productId }, options)
      .then((res) => {
        //console.log(res)
            Swal.fire({
      position: "center",
      icon: "success",
      title: "장바구니에 추가완료!!",
      showConfirmButton: false,
      timer: 1200,
    });
        navigate("/cart");
      })
      .catch((err) => {
        console.log(err);
        alert("이미 장바구니에 있습니다..");
      });
  };

  return (
    <Container>
      {/* 상단 상품이미지, 상품명, 가격, 배송비 */}
      <ContainerTop>
        <ItemsImage src={thumbnailLink} loading="lazy" />
        <TextArea>
          <TextContainer>
            <b>상품명</b> <TextPosition>{name}</TextPosition>
          </TextContainer>
          <TextContainer>
            <b>가격</b>
            <TextPosition>
              <TextOrange>{price}원</TextOrange>
            </TextPosition>
          </TextContainer>
          <TextContainer>
            <b>배송비</b> <TextPosition>무료</TextPosition>
          </TextContainer>
          <ButtonWrapper>
            {/* <ButtonStyle onClick={() => handleAddToCart({ image: product6_img, name: product6_name, price:product6_price, id:product6_proid })}> */}
            {}
            <ButtonStyle onClick={() => addCartProduct(productId)}>장바구니에 담기</ButtonStyle>
          </ButtonWrapper>
        </TextArea>
      </ContainerTop>

      {/* 상단 버튼 구매하기, 장바구니에 담기  */}

      {/* 상품설명/사진 */}
      <Information>
        <InformationText>제품 상세 설명</InformationText>
        <img src={productDetailLinks} alt="상품설명img" loading="lazy" />
      </Information>

      {/* QnA */}
      <CommonContainer>
        <CommonTitle>
          <Category>QnA</Category>
          <QnaQuestionbtn>QnA 작성하기</QnaQuestionbtn>
        </CommonTitle>

        <Contents>
          <CommonNo>
            <QnaInfo>No</QnaInfo>
          </CommonNo>
          <CommonSubject>
            <QnaInfo>Subject</QnaInfo>
          </CommonSubject>
          <CommonWriter>
            <QnaInfo>Writer</QnaInfo>
          </CommonWriter>
          <CommonDate>
            <QnaInfo>Date</QnaInfo>
          </CommonDate>
        </Contents>
      </CommonContainer>

      {/* 사용후기 */}
      <CommonContainer>
        <CommonTitle>
          <Category>사용후기</Category>
        </CommonTitle>

        <Contents>
          <CommonNo>
            <QnaInfo>No</QnaInfo>
          </CommonNo>
          <Star>
            <QnaInfo>Star</QnaInfo>
          </Star>
          <CommonCategory>
            <QnaInfo>Category</QnaInfo>
          </CommonCategory>
          <CommonSubject>
            <QnaInfo>Subject</QnaInfo>
          </CommonSubject>
          <CommonWriter>
            <QnaInfo>Writer</QnaInfo>
          </CommonWriter>
          <CommonDate>
            <QnaInfo>Date</QnaInfo>
          </CommonDate>
        </Contents>
      </CommonContainer>
    </Container>
  );
};
export default ProductInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0 0 0;
  font-family: "Dovemayo_gothic";
`;
const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  width: 70%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const ItemsImage = styled.img`
  width: 400px;
  height: 350px;
  flex: 1;

  @media screen and (max-width: 1024px) {
    width: 450px;
  }

  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;
const TextArea = styled.div`
  flex: 3;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: 3rem;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;
const TextContainer = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    margin-left: 1.2rem;
  }
`;
const TextPosition = styled.span`
  margin-left: 50px;
`;
const TextOrange = styled.span`
  color: #ff5c00;
  margin-left: 1rem;

  @media screen and (max-width: 767px) {
    margin-left: 0.7rem;
  }
`;

// top button
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 150px;
`;

const ButtonStyle = styled.button`
  font-size: 1.6rem;
  width: 150px;
  height: 60px;
  margin: 1rem 2rem 0 0;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background-color: #fcb3bf;
  &:hover{
    font-size: 18px;
    cursor: pointer;
  }
  &:active{
    background-color:silver;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    width: 100px;
    height: 50px;
  }
`;

// 상품설명 img
const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    img {
      width: 500px;
    }
  }

  @media screen and (max-width: 767px) {
    img {
      width: 300px;
    }
  }
`;

const InformationText = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 1.7rem;
  font-weight: bold;
`;
const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background-color: #f9e8e8;
  border-radius: 15px;
  width: 80%;
  height: auto;
`;
const CommonTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  /* margin-bottom: 20px;
  margin-top: 20px; */
`;
const QnaInfo = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`;
const QnaQuestionbtn = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: #fbb3b3;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 40px;
  &:hover {
    background-color: #fcb3bf;
    color: #ffffff;
  }

  @media screen and (max-width: 767px) {
    width: 90px;
    height: 35px;
    font-size: 0.7rem;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const CommonNo = styled.div`
  height: 1rem;
  background-color: #fbd8d8;
  width: 5%;
  margin-right: 1rem;
`;
const CommonSubject = styled.div`
  height: 1rem;
  background-color: #ffc2c2;
  width: 50%;
  margin-right: 1rem;
`;
const CommonWriter = styled.div`
  height: 1rem;
  background-color: #a48686;
  width: 10%;
  margin-right: 1rem;
`;
const CommonDate = styled.div`
  height: 1rem;
  background-color: #dda9a9;
  width: 10%;
`;
const CommonCategory = styled.div`
  height: 1rem;
  background-color: #cda9a9;
  width: 10%;
`;
const Star = styled.div`
  height: 1rem;
  background-color: #dda9a9;
  width: 7%;
`;
const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90px;
  height: 70px;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 20px;
`;
