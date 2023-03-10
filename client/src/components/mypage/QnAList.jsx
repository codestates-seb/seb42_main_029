import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnswerList from "./AnswerList";
function QnAList() {
  const QnAExData = [
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
    {
      question_id: "question_id",
      user_id: "user_id",
      product_id: "product_id",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      created_at: "created_at",
      name: "name",
    },
  ];
  return (
    <QnABody>
      {/* user_id기분으로 해당 유저 질문 전부get 하고 각 질문 id기준으로 각각 답변 get 해서 붙여서 깔아줌 */}
      <div className="bold">Q&A 목록 </div>
      {QnAExData.map((el) => (
        <div>
          <div className="Qna">
            <div className="Qna-left">
              <div className="important">주문 번호: {el.question_id}</div>
              <div className="important">
                상품 이름: {el.name} {el.product_id}
              </div>
              <div>문의 제목: {el.title}</div>
              <div className="content">{el.content}</div>
            </div>
            <div className="Qna-right">
              <div> 게시일:{el.created_at}</div>
              <br />
              <br />
              <br />
              <button className="button" style={{ float: "right" }}>
                <Link className="link">삭제</Link>
              </button>
            </div>
          </div>
          <AnswerList question_id={el.question_id} />
        </div>
      ))}
    </QnABody>
  );
}
export default QnAList;

const QnABody = styled.div`
  display: flex;
  flex-direction: column;
  /* .bold {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 10px;
} */
  .photo {
    height: 100px;
    width: 100px;
    background-color: #f9a9a9;
    margin-right: 5px;
  }
  .Qna {
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
    .Qna-left {
      width: 65%;
      padding-right: 10px;
      padding-left: 5px;
    }
    .Qna-right {
      width: 33%;
    }
  }
`;
