import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ReviewForm() {
  return (
    <ReviewFormBody>
      <div className="center">
        <div className="form">
          <div className="bold title">후기 작성</div>
          <div>상품명 </div>
          <input></input>
          <div>리뷰 사진 등록</div>
          <input type="file"></input>
          <div>상세 후기 작성</div>
          <input className="detail"></input>
        </div>

        <div className="buttons">
          <SubmitBtn>등록취소</SubmitBtn>
          <SubmitBtn>후기등록</SubmitBtn>
        </div>
      </div>
    </ReviewFormBody>
  );
}

export default ReviewForm;

const ReviewFormBody = styled.div`
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
