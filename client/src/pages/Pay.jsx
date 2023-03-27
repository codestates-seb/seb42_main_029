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

  console.log(userData)


  //! 리액트 쿠키
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

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
        `http://ec2-3-36-78-57.ap-northeast-2.compute.amazonaws.com:8080/users/my-page`,
        options
      )
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log("userData GET error");
      });
  }

  //! 페이지 로딩됨과 동시에 user 정보를 가져오기 위한 useEffect
  useEffect(() => {
    userInfoAxios();
  }, []);
  return (
    <Wrapper>
      <Title>주문/결제</Title>
      <BuyerInfo />
      <ReceiverInfo />
      <PayInfo />
      <BtnGrp />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

