import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ReviewList() {
  const ReviewExData = [
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
    {
      review_id: "review_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitletitletitletitle",
      content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
      score: 5,
      image: "imageimageimage",
      created_at: "created_at",
      name: "name",
    },
  ];

  function stars(num) {
    let star = "";
    for (let i = 0; i < num; i++) {
      star += "💛";
    }
    return star;
  }

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
            <div className="important">주문 번호: {el.review_id}</div>
            <div className="important">
              상품 이름: {el.name} {el.product_id}
            </div>
            <div>제목: {el.title}</div>
            <div className="content">{el.content}</div>
          </div>
          <div className="review-right">
            <div> 게시일:{el.created_at}</div>
            <br />
            <div> 평점 : {stars(el.score)}</div>
            <br />
            <br />
            <button className="button" style={{ float: "right" }}>
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
