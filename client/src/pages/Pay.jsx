import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import BtnGrp from "../components/pay/BtnGrp";
import BuyerInfo from "../components/pay/BuyerInfo";
import PayInfo from "../components/pay/PayInfo";
import ReceiverInfo from "../components/pay/ReceiverInfo";

export default function Pay() {
  const [userData, setUserData] = useState({});

  //? receiver info
  const [receiver, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [receivingAddress, setReceivingAddress] = useState("");

  console.log(receiver);
  console.log(phone);
  console.log(receivingAddress);

  //! 리액트 쿠키
  const [cookies] = useCookies(["accessToken"]);

  // 구매자 정보 get ,, users/mypage
  const options = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  function userInfoAxios() {
    return axios
      .get(
        `http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/users/my-page`,
        options
      )
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log("userData GET error");
      });
  }

  useEffect(() => {
    userInfoAxios();
  }, []);

  // console.log(userData)
  return (
    <Wrapper>
      <Title>🐶 주문/결제</Title>
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
      <PayInfo />
      <BtnGrp
        receiver={receiver}
        phone={phone}
        receivingAddress={receivingAddress}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem 3rem;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;
