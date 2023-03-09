import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SelectBox from "./statusSelectBox";
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

  const statusOption = [
    //배송상태 선택지
    { value: "status", name: "status" },
    { value: "결제 전", name: "결제 전" },
    { value: "결제 완료", name: "결제 완료" },
    { value: "배송 준비중", name: "배송 준비중" },
    { value: "배송 중", name: "배송 중" },
    { value: "배송 완료", name: "배송 완료" },
  ];

  const statusOptionHandleChange = (e) => {
    // event handler ->나중에 setStatus 들어갈 예정
    console.log(e.target.value);
  };

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

            <div>받는 사람 : {el.receiver}</div>
            <div>연락처 : {el.phone}</div>
            <div>주소 :{el.address}</div>
          </div>
          <div className="order-right">
            <div>주문일:{el.created_at}</div>
            <div className="important">
              합계 금액: {el.price * el.count} {" 원"}
            </div>
            <div>
              상태 :{" "}
              <span>
                <SelectBox onChange={statusOptionHandleChange} options={statusOption} defaultValue={el.status}></SelectBox>
              </span>
            </div>

            <div>운송장 번호 : {el.pardel_number !== "" ? el.pardel_number : <input title="운송장번호"></input>}</div>

            <button className="button" style={{ float: "right" }}>
              변경사항 저장
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

  .order {
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
    }
    .order-right {
      width: 40%;
    }
  }
`;
