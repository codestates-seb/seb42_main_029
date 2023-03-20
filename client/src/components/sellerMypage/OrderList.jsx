import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SelectBox from "./statusSelectBox";

import OrderBox from "./OrderBox";
function OrderList() {
  const OrderExData = [
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
    {
      order_id: "order_id",
      user_id: "user_id",
      seller_id: "seller_id",
      count: 10,
      created_at: "created_at",
      status: "status",
      pay_by: "pay_by",
      receiver: "receiver",
      phone: "phone",
      address: "address",
      pardel_number: "pardel_number",
      name: "name",
      price: 15000,
    },
  ];

  //! 주문목록 상태, 운송장번호 입력해서 통신하는 함수 필요

  // const statusOption = [
  //   //배송상태 선택지
  //   { value: "status", name: "status" },
  //   { value: "결제 전", name: "결제 전" },
  //   { value: "결제 완료", name: "결제 완료" },
  //   { value: "배송 준비중", name: "배송 준비중" },
  //   { value: "배송 중", name: "배송 중" },
  //   { value: "배송 완료", name: "배송 완료" },
  // ];

  // const statusOptionHandleChange = (e) => {
  //   // event handler ->나중에 setStatus 들어갈 예정
  //   console.log(e.target.value);
  // };

  return (
    <OrderBody>
      <div className="bold">주문 목록 </div>
      {OrderExData.map((el) => (
        <OrderBox el={el} />
      ))}
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

    .order-left {
      width: 55%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .order-right {
      width: 40%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
