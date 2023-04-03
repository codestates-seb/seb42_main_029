import { React, useEffect, useState } from "react";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Rating from "../components/ReviewScore";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

/**
 * 관리자와 리뷰작성자만 해당 리뷰를 제거 가능하게 구현
 * 리뷰 C R U D
 */

function ReviewForm(props) {
  const navigate = useNavigate();
  const [score, setScore] = useState();
  const [review, setReview] = useState("");
  const [reviewPhoto, setReviewPhoto] = useState();
  const [title, setTitle] = useState();
  //!쿠키 담기
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const productId = useParams().productId;

  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  console.log(state);
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  const [itemData, setItemData] = useState({});

  //! productId로 item 정보 가져오는 요청                 테스트 완료
  function getItemInfo(productId) {
    return axios
      .get(`${process.env.REACT_APP_AWS_EC2}/products/${productId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setItemData(res.data.data);
      })
      .catch((err) => {
        console.log("itemData GET error");
      });
  }

  //! 페이지 로딩됨과 동시에 user 정보를 가져오기 위한 useEffect
  useEffect(() => {
    getItemInfo(productId);
  }, []);
  //! 리뷰 등록요청

  function imageHandleChange(e) {
    setReviewPhoto(e.target.files[0]);
  }

  // ! 리뷰 등록 post                              XXXXXXXXXXXXXXX
  function postReview(productId) {
    const patchdata = new FormData();
    const jsondata = {
      productId: productId,
      content: review,
      score: score,
      title: title,
    };

    patchdata.append("post", new Blob([JSON.stringify(jsondata)], { type: "application/json" }));

    patchdata.append("image", reviewPhoto);

    patchdata.append("images", reviewPhoto);

    return axios
      .post(`${process.env.REACT_APP_AWS_EC2}/reviews`, patchdata, {
        headers: { Authorization: cookies.accessToken, "Content-Type": "multipart" },
      })
      .then((res) => {
        console.log(`리뷰 등록 성공 res.data:`);
        console.log(res.data);
        alert("리뷰 작성 완료 !");
        navigate("/mypage");
      })
      .catch((err) => {
        console.log("리뷰 등록 에러");
        console.log(patchdata);
        console.log(state.user.sellerId);
      });
  }
  // const backpage(){
  //   navigate(-1)
  // }

  return (
    <ReviewFormBody>
      <div className="center">
        <form className="form" encType="multipart/form-data" method="post">
          <div className="bold title">후기 작성</div>
          <div className="item-information">
            <img className="img" alt="product thumbnail" src={itemData.thumbnailLink}></img>
            <div>
              <div className="item-name"> 상품명 : {itemData.name}</div>
            </div>
          </div>
          <Rating setScore={setScore} />
          <div>리뷰 사진 등록</div>
          <input type="file" accept="image/jpg, image/jpeg, image/png, image/gif" onChange={imageHandleChange}></input>
          <div>리뷰 제목 작성</div>
          <input onChange={(e) => setTitle(e.target.value)}></input>
          <div>상세 후기 작성</div>
          <textarea className="detail" onChange={(e) => setReview(e.target.value)}></textarea>
        </form>
        <div className="buttons">
          <SubmitBtn onClick={() => navigate(-1)}>등록취소</SubmitBtn>
          <SubmitBtn onClick={() => postReview(productId)}>후기등록</SubmitBtn>
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
  font-family: "Dovemayo_gothic";

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
