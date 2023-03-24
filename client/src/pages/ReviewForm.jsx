import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Rating from "../components/ReviewScore";

function ReviewForm(props) {
  // const navigate = useNavigate();
  const [score, setScore] = useState();
  const [review, setReview] = useState("");
  const [reviewPhoto, setReviewPhoth] = useState();
  const [title, setTitle] = useState();

  const itemId = props.itemId;
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  const [itemData, setItemData] = useState({});
  //! itemId로 item 정보 가져오는 요청
  function getItemInfo(itemId) {
    return axios
      .get(`http://localhost:8080/products/${itemId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setItemData(res.data);
      })
      .catch((err) => {
        console.log("itemData GET error");
      });
  }
  //! 페이지 로딩됨과 동시에 user 정보를 가져오기 위한 useEffect
  // useEffect(()=>{getItemInfo(itemId)},[])

  //! 리뷰 등록요청
  const formData = new FormData();
  formData.images = reviewPhoto;

  const value = {
    content: review,
    score: score,
    title: title,
  };

  // const blob = new Blob([JSON.stringify(value)], { type: "application/json" });

  // formData.post = blob;
  formData.post = JSON.stringify(value);
  function postReview() {
    console.log(formData);
  }

  return (
    <ReviewFormBody>
      <div className="center">
        {/* <div className="form">
          <div className="bold title">후기 작성</div>
          <div className="item-information">
            <img className="img" src={"images/img_dummy1.png"}></img>
            <div>
              <div className="item-name"> 상품명 : itemData.name</div>
            </div>
          </div>
          <Rating setScore={setScore} />
          <div>리뷰 사진 등록</div>
          <input type="file" onChange={(e) => setReviewPhoth(e.target.value)}></input>
          <div>상세 후기 작성</div>
          <textarea className="detail" onChange={(e) => setReview(e.target.value)}></textarea>
        </div> */}

        <form className="form" encType="multipart/form-data" method="post">
          <div className="bold title">후기 작성</div>
          <div className="item-information">
            <img className="img" src={"images/img_dummy1.png"}></img>
            <div>
              <div className="item-name"> 상품명 : itemData.name</div>
            </div>
          </div>
          <Rating setScore={setScore} />
          <div>리뷰 사진 등록</div>
          <input type="file" accept="image/jpg, image/jpeg, image/png, image/gif" onChange={(e) => setReviewPhoth(e.target.value)}></input>
          <div>리뷰 제목 작성</div>
          <input onChange={(e) => setTitle(e.target.value)}></input>
          <div>상세 후기 작성</div>
          <textarea className="detail" onChange={(e) => setReview(e.target.value)}></textarea>
        </form>

        <div className="buttons">
          <SubmitBtn>등록취소</SubmitBtn>
          <SubmitBtn onClick={() => postReview()}>후기등록</SubmitBtn>
        </div>
        <div>
          <SubmitBtn onClick={() => dispatch({ type: "USER_LOGIN", payload: { userId: "리덕스", id: "성공", name: "!!!" } })}>로그인</SubmitBtn>
          <SubmitBtn onClick={() => dispatch({ type: "USER_LOGOUT" })}>로그아웃</SubmitBtn>
        </div>
        <div> {state.user.userId}</div>
        <div> {state.user.id}</div>
        <div> {state.user.name}</div>
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
  .item-name {
    margin-top: 10px;
    font-size: x-large;
    font-weight: 400;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #feeade;
    width: 50%;
    height: 750px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px gray;
    margin-top: 4rem;
    .title {
      margin-top: 2rem;
      margin-left: 5px;
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
        width: 100%;
      }
      .img {
        width: 120px;
        height: 120px;
        margin-right: 20px;
      }
      .item-information {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        margin-bottom: 15px;
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
