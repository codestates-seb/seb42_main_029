import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SellerSignUpReqeust = () => {
  const SellerSignupExData = [
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
    {
      seller_id: "seller_id",
      id: "id",
      password: "password",
      name: "name",
      registration_number: "registration_number",
      address: "address",
      phone: "phone",
      seller_status: "seller_status",
      created_at: "created_at",
      modified_at: "modified_at",
      accout_number: "accout_number",
      bank: "bank",
    },
  ];
  return (
    <AdminSellerSignUpRequestBody>
      <div className="bold">판매자 회원가입 신청 </div>
      {SellerSignupExData.map((el) => (
        <div className="sellerinfo">
          <div className="sellerinfo-left">
            <div>판매자 번호: {el.seller_id}</div>
            <div className="important">상호 명 : {el.name}</div>
            <div className="important">사업자 등록번호: {el.registration_number}</div>
            <div className="important">주소 : {el.address}</div>
            <div className="important">전화번호 : {el.phone}</div>
          </div>
          <div className="sellerinfo-right">
            <br />

            <div>신청일 :{el.created_at}</div>
            <div className="important">계좌번호 : {el.accout_number}</div>
            <div>은행 : {el.bank}</div>
            <div className="important">상태 : {el.seller_status}</div>

            <button className="button accept" style={{ float: "right" }}>
              <Link className="link">판매자 승인</Link>
            </button>
          </div>
        </div>
      ))}
    </AdminSellerSignUpRequestBody>
  );
};

export default SellerSignUpReqeust;

const AdminSellerSignUpRequestBody = styled.div`
  display: flex;
  flex-direction: column;
  /* .bold {
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 10px;
  } */
  .sellerinfo {
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
    .accept {
      background-color: #c4ff80;
    }
    .cancle {
      background-color: #f9a9a9;
      font-size: small;
      padding: 0;
      width: 60px;
    }
    .sellerinfo-left {
      width: 65%;
    }
    .sellerinfo-right {
      width: 33%;
    }
  }
`;
