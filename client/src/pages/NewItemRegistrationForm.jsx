import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function NewItemRegistrationForm() {
  const navigate = useNavigate();
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook
  //! 상품등록시 post 요청하는 함수 필요

  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState(0);
  const [stock, setStoke] = useState(0);

  function postNewItem(sellerId) {
    // e.preventDefault();
    console.log(name, image, content, price, stock);
    if (!name) {
      alert("상품 이름을 입력하세요.");
    } else if (!image) {
      alert("상품 메인사진을 등록하세요.");
    } else if (!content) {
      alert("상품 설명사진을 등록하세요.");
    } else if (!price) {
      alert("상품 가격을 입력하세요.");
    } else if (!stock) {
      alert("상품 재고를 입력하세요.");
    } else {
      alert("상품을 등록하시겠습니까? ");
      const patchdata = {};
      patchdata.name = name;
      patchdata.image = image;
      patchdata.content = content;
      patchdata.price = price;
      patchdata.stock = stock;

      return axios
        .post(`http://localhost:8080/products/${sellerId}`, patchdata, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          console.log(`res.data:`);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("구매자 유저정보 변경 patch 에러");
          console.log(patchdata);
        })
        .then(navigate("/sellermypage"));
    }
  }
  return (
    <NewItemRegistrationFormBody>
      <div className="center">
        {/* <div className="form">
          <div className="bold title">상품 등록 </div>
          <div>상품명 </div>
          <input onChange={(e) => setName(e.target.value)}></input>
          <div>메인사진 (정방형 사진 권장)</div>
          <input onChange={(e) => setImage(e.target.value)} type="file"></input>
          <div>상세설명 (jpg 파일 형식)</div>
          <input onChange={(e) => setContent(e.target.value)} type="file"></input>
          <div>상품가격 (원)</div>
          <input onChange={(e) => setPrice(e.target.value)}></input>
          <div>재고 수 (숫자)</div>
          <input onChange={(e) => setStoke(e.target.value)}></input>
        </div> */}

        <form className="form" encType="multipart/form-data" method="post">
          <div className="bold title">상품 등록 </div>
          <div>상품명 </div>
          <input onChange={(e) => setName(e.target.value)}></input>
          <div>메인사진 (정방형 사진 권장)</div>
          <input onChange={(e) => setImage(e.target.value)} type="file"></input>
          <div>상세설명 (jpg 파일 형식)</div>
          <input onChange={(e) => setContent(e.target.value)} type="file"></input>
          <div>상품가격 (원)</div>
          <input onChange={(e) => setPrice(e.target.value)}></input>
          <div>재고 수 (숫자)</div>
          <input onChange={(e) => setStoke(e.target.value)}></input>
        </form>

        <div className="buttons">
          <SubmitBtn onClick={() => navigate(-1)}>등록취소</SubmitBtn>
          <SubmitBtn onClick={() => postNewItem(state.user.sellerId)}>상품등록</SubmitBtn>
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
    height: 450px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px gray;
    margin-top: 4rem;
    @media screen and (max-width: 768px) {
      width: 80%;
    }
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
