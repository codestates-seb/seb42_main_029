import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PayCompleteForm from "../components/pay/payComplete/PayCompleteForm";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function PayComplete() {
  const navigate = useNavigate();

  const shoppingBtnHandle = () => {
    navigate("/mypage");
  };

  const homeBtnHandle = () => {
    navigate("/");
  };

  //! 주문 내역 get
  const [orderData, setOrderData] = useState([]);

  const [cookies] = useCookies(["accessToken"]);

  const options = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  const orderDataGet = async () => {
    return await axios
      .get(`${process.env.REACT_APP_AWS_EC2}/orders?page=1&size=12`, options)
      .then((res) => {
        console.log(res);
        setOrderData(res);
      })
      .catch((err) => {
        console.log(err);
        console.log("주문내역 받아오기 실패");
      });
  };

  useEffect(() => {
    orderDataGet();
  }, []);

  return (
    <Wrapper>
      <PayCompleteForm />
      <BtnGrp>
        <button onClick={shoppingBtnHandle}>주문내역 확인하기</button>
        <button onClick={homeBtnHandle}>홈으로 가기</button>
      </BtnGrp>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Dovemayo_gothic";
`;

const BtnGrp = styled.div`
  button {
    width: 220px;
    height: 70px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.4rem;
    background-color: #fbd8d8;
    margin-left: 1rem;

    :hover {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      width: 110px;
      height: 50px;
      font-size: 0.8rem;
    }
  }
`;
