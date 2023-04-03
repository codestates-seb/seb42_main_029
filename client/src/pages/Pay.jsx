import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BtnGrp from "../components/pay/BtnGrp";
import BuyerInfo from "../components/pay/BuyerInfo";
import PayInfo from "../components/pay/PayInfo";
import ReceiverInfo from "../components/pay/ReceiverInfo";

export default function Pay() {
  // 구매자 정보에 넣을거
  const [userData, setUserData] = useState({});

  const allCharge = useLocation();

  //? 장바구니 물건 id와 카운트
  const [cartData, setCartData] = useState([]);

  const cartProductDtoList = cartData.map((el) => {
    const productId = el.productResponse.productId;
    const productCount = el.productCount;

    return { productId, productCount };
  });
  // console.log(cartData)
  console.log(cartProductDtoList)

  //? 총 결제 금액
  const totalPrice = allCharge.state;

  //? receiver info
  const [receiver, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [receivingAddress, setReceivingAddress] = useState("");

  // console.log(receiver);
  // console.log(phone);
  // console.log(receivingAddress);

  //! 리액트 쿠키
  const [cookies] = useCookies(["accessToken"]);

  //! 구매자 정보 get ,, users/mypage
  const options = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  const userInfoAxios = async () => {
    return await axios

      .get(`${process.env.REACT_APP_AWS_EC2}/users/my-page`, options)

      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log("userData GET error");
      });
  };

  //! 장바구니 아이템 get ,,
  const cartGetItem = async () => {
    return await axios
      .get(`${process.env.REACT_APP_AWS_EC2}/carts?page=1&size=10`, options)
      .then((res) => {
        console.log(res.data)
        setCartData(res.data.cartProductDtoList);
      })
      .catch((err) => {
        console.log(err);
        console.log("장바구니 아이템 받아오기 에러");
      });
  };

  useEffect(() => {
    userInfoAxios();
    cartGetItem();
  }, []);

  // console.log(userData)
  return (
    <Wrapper>
      <Title>🐶 주문/결제</Title>
      <SubTitle>받는사람정보를 입력후 주문하기를 눌러주세요!</SubTitle>
      <BuyerInfo userData={userData} />
      <ReceiverInfo
        userData={userData}
        receiver={receiver}
        setUsername={setUsername}
        phone={phone}
        setPhone={setPhone}
        receivingAddress={receivingAddress}
        setReceivingAddress={setReceivingAddress}
      />
      <PayInfo totalPrice={totalPrice} />
      <BtnGrp
        receiver={receiver}
        phone={phone}
        receivingAddress={receivingAddress}
        totalPrice={totalPrice}
        orderProductDtos={cartProductDtoList}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem 3rem;
  font-family: "Dovemayo_gothic";
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const SubTitle = styled.div`
  margin: 0 0 1.5rem 0.5rem;
`;
