import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SelectBox from "./statusSelectBox";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

function OrderBox(props) {
  const { el } = props; //구조분해할당
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const statusOption = [
    //배송상태 선택지
    { value: "status", name: el.orderProductStatus },
    { value: "결제대기", name: "결제대기" },
    { value: "결제완료", name: "결제완료" },
    { value: "배송 준비 중", name: "배송 준비 중" },
    { value: "배송 중", name: "배송 중" },
    { value: "배송 완료", name: "배송 완료" },
  ];

  const [status, setStatus] = useState("");
  const [pardelNumber, setPardelNumber] = useState(el.pardel_number);

  const pardelNumberHandleChange = (e) => {
    setPardelNumber(e.target.value);
    console.log(e.target.value);
  };

  //! 변경사항 요청 날리는 함수           완료
  const [ordersData, setOrdersData] = useState();
  const withBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  function patchOrderData(e) {
    e.preventDefault();
    const patchOrderData = {};
    patchOrderData.status = status;
    patchOrderData.pardelNumber = pardelNumber;
    return axios
      .patch(`${process.env.REACT_APP_AWS_EC2}/orders/${el.orderProductId}`, patchOrderData, withBodyOptions)
      .then((res) => {
        console.log(`주문정보 변경 성공 res.data:`);
        console.log(res.data);
        setOrdersData(res.data.data);
      })
      .catch((err) => {
        console.log("주문정보 변경( 상태, 운송장번호) patch 에러");
        console.log(patchOrderData);
        console.log(el.orderProductId);
      });
  }
  return (
    <div className="order">
      <div className="order-left">
        <div className="important">주문 번호: {el.orderProductId}</div>
        <div>
          <div className="individuel-product">
            <div className="important">상품 이름: {el.productName}</div>
            <div>
              <span>{`가격 :${el.productPrice} 원   `}</span>
              <span>{`수량 :${el.productCount}`}</span>
            </div>
          </div>

          {/* <div>{`가격 :${el.productPrice} 원 `}</div>
          <div>{`수량 :${el.productCount}`}</div> */}
          <div>받는 사람 : {el.receiver}</div>
          <div>연락처 : {el.phone}</div>
          <div>주소 :{el.receivingAddress}</div>
        </div>
      </div>
      <div className="order-right">
        <div>주문일:{el.createdAt}</div>
        {/* <div>받는 사람 : {el.receiver}</div>
        <div>연락처 : {el.phone}</div>
        <div>주소 :{el.receivingAddress}</div> */}
        <div style={{ marginBottom: "7px" }}>
          상태 :{" "}
          <span>
            <SelectBox setStatus={setStatus} options={statusOption} defaultValue={el.orderProductStatus}></SelectBox>
          </span>
        </div>

        <div>운송장 번호 : {el.pardelNumber !== undefined ? el.pardelNumber : <input title="운송장번호" onChange={pardelNumberHandleChange}></input>}</div>

        <button className="button" style={{ float: "right" }} onClick={patchOrderData}>
          변경사항 저장
        </button>
      </div>
    </div>
  );
}

export default OrderBox;
