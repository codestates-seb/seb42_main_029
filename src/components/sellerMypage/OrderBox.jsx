import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SelectBox from "./statusSelectBox";

function OrderBox(props) {
  const { el } = props; //구조분해할당

  const statusOption = [
    //배송상태 선택지
    { value: "status", name: el.status },
    { value: "결제 전", name: "결제 전" },
    { value: "결제 완료", name: "결제 완료" },
    { value: "배송 준비중", name: "배송 준비중" },
    { value: "배송 중", name: "배송 중" },
    { value: "배송 완료", name: "배송 완료" },
  ];

  const [status, setStatus] = useState("");
  const [pardelNumber, setPardelNumber] = useState(el.pardel_number);

  const pardelNumberHandleChange = (e) => {
    setPardelNumber(e.target.value);
    console.log(e.target.value);
  };

  // 변경사항 요청 날리는 함수
  function patchOrderData(e) {
    e.preventDefault();
    const patchOrderData = {};
    patchOrderData.status = status;
    patchOrderData.pardelNumber = pardelNumber;
    return axios
      .patch(`http://localhost:8080/orders/${el.order_id}`, patchOrderData, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("주문정보 변경( 상태, 운송장번호) patch 에러");
        console.log(patchOrderData);
      });
  }
  return (
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
        <div style={{ marginBottom: "7px" }}>
          상태 :{" "}
          <span>
            <SelectBox setStatus={setStatus} options={statusOption} defaultValue={el.status}></SelectBox>
          </span>
        </div>

        <div>운송장 번호 : {el.pardel_number !== "" ? el.pardel_number : <input title="운송장번호" onChange={pardelNumberHandleChange}></input>}</div>

        <button className="button" style={{ float: "right" }} onClick={patchOrderData}>
          변경사항 저장
        </button>
      </div>
    </div>
  );
}

export default OrderBox;