import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NewItemRegistrationForm() {
  return (
    <NewItemRegistrationFormBody>
      <div className="center">
        <div className="form">
          <div className="bold title">상품 등록 </div>
          <div>상품명 </div>
          <input></input>
          <div>메인사진 (정방형 사진 권장)</div>
          <input type="file"></input>
          <div>상세설명 (jpg 파일 형식)</div>
          <input type="file"></input>
          <div>상품가격</div>
          <input></input>
          <div>재고 수</div>
          <input></input>
          <div>카테고리 -향후 셀렉트박스 형식으로도 가능 </div>
          <input></input>
        </div>

        <div className="buttons">
          <SubmitBtn>등록취소</SubmitBtn>
          <SubmitBtn>상품등록</SubmitBtn>
        </div>
      </div>
    </NewItemRegistrationFormBody>
  );
}

export default NewItemRegistrationForm;

const NewItemRegistrationFormBody = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center */

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #feeade;
    width: 50%;
    height: 550px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px gray;
    margin-top: 4rem;
    .title {
      margin-top: 2rem;
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .form {
      width: 80%;
      /* height: 90%; */

      input {
        margin: 5px 0;
        width: 95%;
      }
      .detail {
        height: 250px;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      width: 75%;
    }
  }
`;
const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  font-size: 13px;
  text-align: center;
  background-color: #faa36f;
  padding: 10px;
  margin: 5px 3px;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin-top: 1.5rem;
  cursor: pointer;
`;
