import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

  //! 장바구니의 각 상품 수량 증가함수
  const handleIncrease = async (id) => {

    return await axios
      .patch(
        `${process.env.REACT_APP_AWS_EC2}/carts/products/${id}/plus`,
        null,
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
    // const data = {}

    return await axios
      .patch(
        `${process.env.REACT_APP_AWS_EC2}/carts/products/${id}/minus`,
        null,
        options
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("상품 수량은 1개 이상 담으세요!")
      });
  };

  //! 장바구니 삭제
  const handleDelete = async (id) => {
    return await axios
      .delete(`${process.env.REACT_APP_AWS_EC2}/carts/products/${id}`, options)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //! 총 결제 금액

  const totalPrice = (cartData) => {
    let tPrice = 0;

    for (let i = 0; i < cartData.length; i++) {
      tPrice += cartData[i].productResponse.price * cartData[i].productsCount;
    }
    return tPrice;
  };
  // console.log(totalPrice(cartData));

  //! 주문하러가기

  const goOrderBtn = () => {
    if(totalPrice(cartData) === 0) {
      return alert('총 결제금액이 0원 입니다.. 수량은 1개 이상부터 주문 가능!')
    }
    
    navigate("/pay", { state: totalPrice(cartData) });
  };

  return (
    <Container>
      <CartTitle>장바구니</CartTitle>
      <ProductContainer>
        <ProductTitle>상품</ProductTitle>
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
              {`${data.productResponse.price * data.productsCount}`}원
            </ItemStyle>
            <ItemStyle></ItemStyle>
            <ItemStyle>
              <CountBtn
                onClick={() => handleDecrease(data.productResponse.productId)}
              >
                -
              </CountBtn>
              {data.productsCount}
              <CountBtn
                onClick={() => handleIncrease(data.productResponse.productId)}
              >
                +
              </CountBtn>
            </ItemStyle>
            <DeleteBtn
              onClick={() => handleDelete(data.productResponse.productId)}
            >
              삭제하기
            </DeleteBtn>
          </ProductBox>
        ))}
      </ProductContainer>

      <PayBox color="#FFE3E1">결제금액</PayBox>
      <PayBoxCharge color="#FFD1D1">{`${totalPrice(cartData)}`}원</PayBoxCharge>
      <PayBox color="#FF9494">
        {/* <PayBtn>선택한 상품 결제하기</PayBtn> */}
        <PayBtn onClick={goOrderBtn}>주문하러가기</PayBtn>
      </PayBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
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
  background-color: #f5f5f0;
`;
const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 30px;
`;

const ProductBox = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
  border: 1px solid #ffffff;
  background-color: white;
`;

const ItemsImage = styled.img`
  height: 70px;

  @media screen and (max-width: 768px) {
    margin: 0.3rem 0.6rem 0.3rem 0.2rem;
  }
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
  color: #363636;
`;

const PayBoxCharge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  height: 80px;
  width: 90%;
  font-size: 24px;
  font-weight: bold;
  font-family: "Dovemayo_gothic";
  color: #ff5c00;
`;

const DeleteBtn = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  background-color: #fc5050;
  color: #ffffff;
  font-family: "Dovemayo_gothic";
  cursor: pointer;

  :hover {
    font-size: 1rem;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CountBtn = styled.button`
  flex-direction: row;
  border: none;
  outline: none;
  background-color: silver;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  cursor: pointer;

  &:active {
    background-color: #1565c0;
  }

  :hover {
    color: #ffffff;
  }
`;

export default Cart;
