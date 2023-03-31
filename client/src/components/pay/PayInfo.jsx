import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

//! 장바구니 api 에서 결제정보인 > 상품가격과, 총 결제금액 get 해서 뿌려주기
export default function PayInfo() {
  const [cartData, setCartData] = useState({});

  //! 리액트 쿠키
  const [cookies] = useCookies(["accessToken"]);

  // 현재 장바구니 정보 get ,,
  const options = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  const cartDataAxiosGet = async () => {
    return await axios
      .get(`${process.env.REACT_APP_AWS_EC2}/`, options)
      .then((res) => {
        console.log(res);
        setCartData(res);
      })
      .catch((err) => {
        console.log("장바구니 > 총 결제금액 GET error");
        console.log(err);
      });
  };

  useEffect(() => {
    cartDataAxiosGet();
  }, []);

  return (
    <>
      <Title>결제정보</Title>

      <Wrapper>
        <LeftWrapper>
          <p>배송비</p>
          <p>결제금액</p>
          <p>결제방법</p>
        </LeftWrapper>
        <RightWrapper>
          <p>무료배송</p>
          <p>{`${40000}원`}</p>
          <p>무통장입금</p>
        </RightWrapper>
      </Wrapper>
    </>
  );
}

const Title = styled.div`
  font-size: 1.3rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #fef4f4;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

const LeftWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #d1bdbd;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const RightWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 2rem;
`;
