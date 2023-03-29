import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BtnGrp() {
  const navigate = useNavigate();
  //! 리액트 쿠키
  const [cookies] = useCookies(["accessToken"]);

  // 주문 내용 get

  // 장바구니 프로덕트 id, count get

  // 장바구니 api 나오면 navigate 링크 수정
  const goCartPage = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const payBtn = async (e) => {
    e.preventDefault();


    const postData= {}

    const options = {
      headers: {
        Authorization: cookies.accessToken,
      },
      withCredentials: true,
    };
    // 주문 Post api > paycomplete

    return axios
      .post(
        `http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/orders`,
        postData,
        options
      )
      .then((res) => {
        console.log(res);
        // navigate('/payComplete')
      })
      .catch((err) => {
        console.log("cart post error");
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <form>
        <button onClick={goCartPage}>장바구니로 돌아가기</button>
        <button onClick={payBtn}>주문하기</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  form {
    button {
      width: 170px;
      height: 60px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1rem;
    }
    button:last-child {
      margin-left: 1rem;
      :hover {
        color: #ffffff;
      }
    }

    button:first-child {
      background-color: #a48686;
      margin-right: 2rem;

      :hover {
        color: #ffffff;
      }
    }
  }

  @media screen and (max-width: 768px) {
    form {
      button {
        font-size: 0.8rem;
        width: 7.5rem;
        height: 3rem;
      }
      button:first-child {
        margin-right: 0.7rem;
      }
    }
  }
`;
