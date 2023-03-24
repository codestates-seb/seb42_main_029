import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnswerList from "./AnswerList";
import axios from "axios";
function QnAList() {
  const QnAExData = [
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
    {
      questionId: "questionId",
      userId: "userId",
      productId: "productId",
      title: "titletitle titletitle",
      content: "contentcontent contentcontent content contentcontent contentcontent contentcontent content contentcontent contentcontent contentcontent",
      createdAt: "createdAt",
      name: "name",
    },
  ];

  // 해당회원 userId로 회원이 쓴 질문 전부 가져오기
  const [questionData, setQuestionData] = useState({}); //판매자 데이터 담아서 나중에 questionData.map()

  function questionDataAxios(userId) {
    return axios
      .get(`http://localhost:8080/questions/${userId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setQuestionData(res.data);
      })
      .catch((err) => {
        console.log("questionData GET error");
      });
  }

  //! 페이지 로딩과 동시에 질문 데이터 get
  // useEffect(()=>{questionDataAxios(reduxUserId)},[])

  //! question 삭제함수
  const deleteQuestion = (questionId) => {
    // e.preventDefault();
    alert("정말 문의글을 삭제 하시겠습니까?");
    return axios
      .delete(`http://localhost:8080/questions/${questionId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("문의글 삭제 에러");
        console.log(questionId);
      });
  };

  return (
    <QnABody>
      {/* userId기분으로 해당 유저 질문 전부get 하고 각 질문 id기준으로 각각 답변 get 해서 붙여서 깔아줌 */}
      <div className="bold">Q&A 목록 </div>
      {QnAExData.map((el) => (
        <div>
          <div className="Qna">
            <div className="Qna-left">
              <div className="important">주문 번호: {el.questionId}</div>
              <div className="important">
                상품 이름: {el.name} {el.productId}
              </div>
              <div>문의 제목: {el.title}</div>
              <div className="content">{el.content}</div>
            </div>
            <div className="Qna-right">
              <button
                className="button"
                style={{ float: "right" }}
                onClick={() => {
                  deleteQuestion(el.questionId);
                }}
              >
                <Link className="link">삭제</Link>
              </button>
              <div style={{ marginTop: "15px" }}> 게시일:{el.createdAt}</div>
            </div>
          </div>
          <AnswerList questionId={el.questionId} />
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
    .Qna-left {
      width: 65%;
      padding-right: 10px;
      padding-left: 5px;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .Qna-right {
      width: 33%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
