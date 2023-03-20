import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function ReviewList() {
  const ReviewExData = [
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
    {
      reviewId: "reviewId",
      userId: "userId",
      productId: "productId",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
  ];

  // 별점만큼 하트 찍는 함수
  function stars(num) {
    let star = "";
    for (let i = 0; i < num; i++) {
      star += "💛";
    }
    return star;
  }

  // 해당회원 userId로 회원이 쓴 리뷰 가져오기
  const [reviewData, setReviewData] = useState({}); //판매자 데이터 담아서 나중에 reviewData.map()

  function reviewDataAxios(userId) {
    return axios
      .get(`http://localhost:8080/reviews/${userId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setReviewData(res.data);
      })
      .catch((err) => {
        console.log("reviewData GET error");
      });
  }

  //! 페이지 로딩과 동시에 질문 데이터 get
  // useEffect(()=>{reviewDataAxios(reduxUserId)},[])

  //! question 삭제함수
  const deleteReview = (reviewId) => {
    // e.preventDefault();
    alert("정말 리뷰를 삭제 하시겠습니까?");
    return axios
      .delete(`http://localhost:8080/reviews/${reviewId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("리뷰삭제 에러");
        console.log(reviewId);
      });
  };

  return (
    <ReviewBody>
      <div className="bold">후기 목록 </div>
      {ReviewExData.map((el) => (
        <div className="review">
          <div className="photo">
            {" "}
            <div>{el.image}</div>{" "}
          </div>
          <div className="review-left">
            <div className="important">주문 번호: {el.reviewId}</div>
            <div className="important">
              상품 이름: {el.name} {el.productId}
            </div>
            <div>제목: {el.title}</div>
            <div className="content">{el.content}</div>
          </div>
          <div className="review-right">
            <div> 게시일:{el.createdAt}</div>
            <br />
            <div> 평점 : {stars(el.score)}</div>
            <br />
            <br />
            <button className="button" style={{ float: "right" }} onClick={() => deleteReview(el.reviewId)}>
              <Link className="link">삭제</Link>
            </button>
          </div>
        </div>
      ))}
    </ReviewBody>
  );
}
export default ReviewList;

const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;

  .photo {
    height: 100px;
    width: 100px;
    background-color: #f9a9a9;
    margin-right: 5px;
  }
  .review {
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
    .content {
      word-break: break-all;
      margin-top: 10px;
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
    .review-left {
      width: 65%;
      padding-right: 10px;
      padding-left: 5px;
    }
    .review-right {
      width: 33%;
    }
  }
`;
