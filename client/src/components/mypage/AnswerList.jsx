import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function AnswerList(questionId) {
  //axios로 quesitonId 보내서 fetch 함
  //데이터 있으면 각각 깔아주고 없으면 빈값 반환하도록 해야함

  const answerExData = {
    answerId: "answerId",
    sellerId: "sellerId",
    name: "판매자 이름",
    questionId: "questionId",
    content: "contentcontentcontent contentcontent contentcontent contentcontent contentcontentcontent contentcontentcontent contentcontent",
    createdAt: "createdAt",
  };

  return (
    <AnswerBody>
      {answerExData === {} ? null : (
        <div className="Answer">
          <div className="Answer-left">
            <div className="minititle"> 🏠 판매자 답변 </div>

            <div className="important">답변 번호: {answerExData.answerId}</div>
            <div className="important">
              판매자 명: {answerExData.name} {answerExData.sellerId}
            </div>
            <div className="content">{answerExData.content}</div>
          </div>
          <div className="Answer-right">
            <div> 게시일:{answerExData.createdAt}</div>
            <br />
            <br />
            <br />
            {/* <button className="button" style={{ float: "right" }}>
              <Link className="link">삭제</Link>
            </button> */}
          </div>
        </div>
      )}
    </AnswerBody>
  );
}
export default AnswerList;

const AnswerBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-bottom: 15px;
  .minititle {
    font-weight: 900;
    color: #5b5bd9;
    margin-bottom: 5px;
  }

  .Answer {
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    background-color: #ffe1d2;
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
    .Answer-left {
      width: 65%;
      padding-right: 10px;
      padding-left: 5px;
    }
    .Answer-right {
      width: 33%;
    }
  }
`;
