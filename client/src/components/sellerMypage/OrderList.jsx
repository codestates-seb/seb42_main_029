import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SelectBox from "./statusSelectBox";
import Paging from "../pagination/pagination";
import OrderBox from "./OrderBox";

import axios from "axios";
import Modal from "../modal";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
function OrderList() {
  const OrderExData = [
    {
      orderId: 1,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 2,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
      ],
    },
    {
      orderId: 3,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
      ],
    },
    {
      orderId: 4,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 5,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 6,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 7,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 8,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 9,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 10,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 11,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 12,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 13,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      orderProductDtos: [
        {
          productId: "1productId",
          sellerId: "1sellerId",
          name: "1 name",
          image: "1imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2 name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
  ];

  const navigate = useNavigate();
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  //! 주문목록 상태, 운송장번호 입력해서 통신하는 함수 필요

  //!pagination
  const [page, setPage] = useState(1);

  //! 주문목록 get              테스트 실패 -> 서버 로직 수정한다고 하심
  const [orderData, setOrderData] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  // console.log(cookies.accessToken);

  const noBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  function OrdersAxios() {
    return axios
      .get(`${process.env.REACT_APP_AWS_EC2}/sellers/orders?page=${page}&size=12`, noBodyOptions)
      .then((res) => {
        console.log(`판매자 마이페이지 orderdata get success res.data:`);
        console.log(res.data);
        setOrderData(res.data.data);
      })
      .catch((err) => {
        console.log("판매자 마이페이지 orderdata GET error");
      });
  }

  useEffect(() => {
    OrdersAxios();
  }, [page]);

  return (
    <OrderBody>
      <div className="bold">주문 목록 </div>
      {Array.isArray(orderData) && orderData.map((el, index) => <OrderBox el={el} key={index} />)}
      <Paging page={page} setPage={setPage} />
    </OrderBody>
  );
}
export default OrderList;

const OrderBody = styled.div`
  display: flex;
  flex-direction: column;

  .order {
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    background-color: #fef4f4;
    padding: 13px;
    justify-content: space-between;
    .important {
      font-weight: bold;
      margin: 3px 0px;
      > span {
        margin-right: 20px;
      }
    }

    .link {
      text-decoration-line: none;
      color: black;
    }

    .button {
      background-color: #ebc8c8;
      padding: 3px 10px;
      width: 100px;
      border-radius: 3px;
      border: 1.5px solid black;
      cursor: pointer;
      margin-top: 10px;
    }
    .cancle {
      background-color: #f9a9a9;
      font-size: small;
      padding: 0;
      width: 60px;
    }
    .individuel-product {
      margin: 7px 0;
      border-bottom: 1px solid #fcc3c3;
      padding-bottom: 6px;
    }
    .order-left {
      width: 45%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .order-right {
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
