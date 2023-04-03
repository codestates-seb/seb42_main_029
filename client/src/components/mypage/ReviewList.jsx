import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useCookies } from "react-cookie";
import Modal from "../modal";

function ReviewList() {
  const ReviewExData = [
    {
      reviewId: "1",
      userId: "userId1",
      productId: "productId1",
      title: "1titletitletitletitletitle",
      content: "1contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "1imageimageimage",
      createdAt: "1createdAt",
      name: "1name",
    },
    {
      reviewId: "2",
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
      reviewId: "3",
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
      reviewId: "4",
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
      reviewId: "12reviewId",
      userId: "12userId",
      productId: "12productId",
      title: "12titletitletitletitletitle",
      content: "c12ontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      createdAt: "createdAt",
      name: "name",
    },
  ];

  //! 모달
  const [modalIndex, setModalIndex] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  // 별점만큼 하트 찍는 함수
  function stars(num) {
    let star = "";
    for (let i = 0; i < num; i++) {
      star += "💛";
    }
    return star;
  }

  //! 해당회원 userId로 회원이 쓴 리뷰 가져오기
  const [reviewData, setReviewData] = useState({}); //판매자 데이터 담아서 나중에 reviewData.map()

  // 토큰 및 옵션
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const noBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  function reviewDataAxios() {
    return axios
      .get(`${process.env.REACT_APP_AWS_EC2}/reviews`, noBodyOptions)
      .then((res) => {
        console.log(`리뷰 데이터 get 성공 res.data:`);
        console.log(res.data);
        setReviewData(res.data.data);
      })
      .catch((err) => {
        console.log("reviewData GET error");
      });
  }

  //! 페이지 로딩과 동시에 질문 데이터 get
  useEffect(() => {
    reviewDataAxios();
  }, []);

  //! question 삭제함수
  const deleteReview = (reviewId) => {
    // e.preventDefault();
    return axios
      .delete(`${process.env.REACT_APP_AWS_EC2}/reviews/${reviewId}`, noBodyOptions)
      .then((res) => {
        console.log(`리뷰 삭제 완료 res.data:`);
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
      {ReviewExData.map((el, index) => (
        <div className="review" key={index}>
          <div className="photo">
            {" "}
            <div>{el.image}</div>{" "}
          </div>
          <div className="review-left">
            <div className="important">리뷰 번호: {el.reviewId}</div>
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
            {/* <button className="button" style={{ float: "right" }} onClick={() => deleteReview(el.reviewId)}>
              <Link className="link">삭제</Link>
            </button> */}
            <button
              className="button"
              style={{ float: "right" }}
              onClick={() => {
                setModalIndex(index);
                showModal();
              }}
            >
              <Link className="link">삭제</Link>
            </button>
            {modalOpen && (
              <Modal
                setModalOpen={setModalOpen}
                axiosfunction={deleteReview}
                data={ReviewExData}
                // index={ReviewExData[modalIndex]?.reviewId} //! 오류나서 개선함
                index={ReviewExData.findIndex((element, index) => index === modalIndex)}
                objectKey="reviewId"
                keyword="후기삭제"
              />
            )}
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
    @media screen and (max-width: 768px) {
      height: 60px;
      width: 60px;
    }
  }
  .review {
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    background-color: #fef4f4;
    padding: 13px;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
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
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .review-right {
      width: 33%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
