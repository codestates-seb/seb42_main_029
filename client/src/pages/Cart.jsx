import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
/*
 * 현재는 상품수량 모두 counter 하나로 공유합니다.
 */
const Cart = () => {
  // const productId = useParams().productId;

  const navigate = useNavigate();

  //! 장바구니 get

  const [cartData, setCartData] = useState([]);

  const [cookies] = useCookies(["accessToken"]);

  const options = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  const cartGetItem = async () => {
    return await axios
      .get(`${process.env.REACT_APP_AWS_EC2}/carts?page=1&size=10`, options)
      .then((res) => {
        setCartData(res.data.cartProductDtoList);
      })
      .catch((err) => {
        console.log(err);
        console.log("장바구니 아이템 받아오기 에러");
      });
  };

  useEffect(() => {
    cartGetItem();
  }, []);

  console.log(cartData);
  // console.log(cartData[0].productResponse.productId)

  const proId = cartData.map((el) => {
    return el.productResponse.productId;
  });
  console.log(proId);
  //! 장바구니의 각 상품 수량 증가함수
  const handleIncrease = async (id) => {
    const data = {};

    return await axios
      .patch(
        `${process.env.REACT_APP_AWS_EC2}/carts/products/${id}/plus`,
        data,
        options
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //! 장바구니의 상품 수량 감소함수
  const handleDecrease = async (id) => {
    const data = {};

    return await axios
      .patch(
        `${process.env.REACT_APP_AWS_EC2}/carts/products/${id}/minus`,
        data,
        options
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //! 장바구니 삭제
  const handleDelete = async () => {
    return await axios
      .patch(`${process.env.REACT_APP_AWS_EC2}/carts/products/`, options)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //! 총 결제 금액

  // 가격 받아온것
  const charge = cartData.map((el) => {
    return el.productResponse.price;
  });

  // 가격 받아온거 더한 거
  const allCharge = charge.reduce((a, b) => a + b, 0);
  // console.log(allCharge)

  //! 주문하러가기

  const payBtn = () => {
    navigate("/pay", { state: allCharge });
  };

  return (
    <Container>
      <CartTitle>장바구니</CartTitle>
      <ProductContainer>
        <ProductTitle>일반상품(8)</ProductTitle>
        <ProductBox>{/* AllCheckbox 컴포넌트 */}</ProductBox>

        {/* props로 내려줄때 상품이 하나씩 추가되어야함 */}

        {cartData.map((data, index) => (
          <ProductBox key={index}>
            <ItemStyle>
              {/* 여기에 체크박스 컴포넌트 넣기 */}
              {/* singleCheckbox 컴포넌트 */}
            </ItemStyle>
            <ItemStyle>
              <ItemsImage
                src={data.productResponse.thumbnailLink}
                alt="이미지"
              />
            </ItemStyle>
            <ItemStyle maxwid="200">
              {data.productResponse.productDetail}
            </ItemStyle>
            <ItemStyle color="#ff5c00">
              {`${data.productResponse.price}`}원
            </ItemStyle>
            <ItemStyle></ItemStyle>
            <ItemStyle>
              <CountBtn
                onClick={() =>
                  handleDecrease(cartData[1].productResponse.productId)
                }
              >
                -
              </CountBtn>
              {data.productsCount}
              <CountBtn
                onClick={() =>
                  handleIncrease(cartData[1].productResponse.productId)
                }
              >
                +
              </CountBtn>
            </ItemStyle>
            {/* {console.log(data.data.productId)}
            {console.log(data.data)} */}
            {/* 합계: 수량 * {data.price} */}
            <DeleteBtn onClick={() => handleDelete()}>삭제하기</DeleteBtn>
          </ProductBox>
        ))}
      </ProductContainer>

      <PayBox color="#f5f5f0">결제할 금액</PayBox>
      <PayBox color="#96CAFF">{allCharge}</PayBox>
      <PayBox color="#f5f5f0">
        {/* <PayBtn>선택한 상품 결제하기</PayBtn> */}
        <PayBtn onClick={payBtn}>주문하러가기</PayBtn>
      </PayBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  // justify-content:center;
  font-family: "Dovemayo_gothic";
  margin-bottom: 2rem;
`;

const CartTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid black;
  background-color: #f5f5f0;
`;
const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 30px;
`;
const Title = styled.span`
  display: flex;
`;
const ProductBox = styled.div`
  display:grid;
  grid-template-columns:0.5fr 1fr 3fr 1fr 1fr 1fr 1fr;
  grid-auto-rows:minmax(150px, auto)
  height:150px;
  align-items:center;
  border: 1px solid gray;
  background-color:white;
`;
const ItemsImage = styled.img`
  height: 70px;
`;
const PayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  height: 80px;
  width: 90%;
  font-size: 24px;
  font-weight: bold;
  font-family: "Dovemayo_gothic";
`;
const DeleteBtn = styled.button`
  width: 70px;
  height: 50px;
  border-radius: 10px;
  background-color: red;
  color: white;
  font-family: "Dovemayo_gothic";
`;
const PayBtn = styled.button`
  width: 100%;
  height: ${(props) => props.height || "100%"};
  font-size: 24px;
  font-weight: bold;
  font-family: "Dovemayo_gothic";
  background-color: #a48686;
  border: none;
  cursor: pointer;

  &:hover {
    font-size: 26px;
    color: #ffffff;
  }
  &:active {
    background-color: gray;
  }
`;

const ItemStyle = styled.div`
  color: ${(props) => props.color || "black"};
`;

const CountBtn = styled.button`
  flex-direction: row;
  border: none;
  outline: none;
  background-color: silver;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  &:active {
    background-color: #1565c0;
  }
`;

export default Cart;
