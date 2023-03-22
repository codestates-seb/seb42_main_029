import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  //! 온클릭 및 여러가지 나중에 함 api 명세서 나왔을 때
  return (
    <OrderBody>
      <div className="bold">주문 목록 </div>
      {OrderExData.map((el) => (
        <div className="order">
          <div className="order-left">
            <div className="important">주문 번호: {el.order_id}</div>
            <div className="important">상품 이름: {el.name}</div>
            <div className="important">
              <span>{`가격 :${el.price} 원 ,`}</span> <span>{`수량 :${el.count}`}</span>
            </div>

            <div>주소 :{el.address}</div>
            <div>받는 사람 : {el.receiver}</div>
            <div>연락처 : {el.phone}</div>
          </div>
          <div className="order-right">
            <div>
              <button className="button cancle" style={{ float: "right" }}>
                주문 취소
              </button>
            </div>
            <br />

            <div>주문일:{el.created_at}</div>
            <div className="important">
              합계 금액: {el.price * el.count} {" 원"}
            </div>
            <div>운송장 번호 : {el.pardel_number}</div>
            <div>상태 : {el.status}</div>

            <button className="button" style={{ float: "right" }}>
              <Link className="link">후기 작성</Link>
            </button>
          </div>
        </div>
      ))}
    </OrderBody>
  );
}
export default OrderList;

const OrderBody = styled.div`
  display: flex;
  flex-direction: column;
  /* .bold {
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 10px;
  } */
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
      padding: 3px 15px;
      width: 100px;
      border-radius: 3px;
      border: 1.5px solid black;
      cursor: pointer;
    }
    .cancle {
      background-color: #f9a9a9;
      font-size: small;
      padding: 0;
      width: 60px;
    }
    .order-left {
      width: 65%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .order-right {
      width: 33%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
