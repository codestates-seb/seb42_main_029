import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrderList from "../components/mypage/OrderList";
import QnAList from "../components/mypage/QnAList";
import ReviewList from "../components/mypage/ReviewList";
import Button from "react-bootstrap/Button";

function Mypage() {
  //회원정보 axios userInfo

  //주문목록, qna , 후기는 컴포넌트화 해서 연결

  //탭 제작
  const tabArray = [
    { id: 0, title: "주문 목록" },
    { id: 1, title: "Q&A 목록" },
    { id: 2, title: "후기 목록" },
  ];

  const [focus, setFocus] = useState(0);

  return (
    <MypageBody>
      <ul className="tab">
        {tabArray.map((el) => (
          <li key={el.id} onClick={() => setFocus(el.id)} className={el.id === focus ? "focus" : ""}>
            {el.title}
          </li>
        ))}
        {/* <li>주문 목록</li>
        <li>Q&A 목록</li>
        <li>후기 목록</li> */}
      </ul>
      <div className="content">
        <div className="tab-content"> {focus === 0 ? <OrderList /> : focus === 1 ? <QnAList /> : focus === 2 ? <ReviewList /> : ""}</div>
        <div className="user-information">
          <div className="bold">회원정보 변경</div>
          <div>이름</div>
          <div className="cant-change">userInfo.name</div>
          <div>
            아이디
            {/* <button className="submit-button" style={{ float: "right" }}>
              중복검사
            </button> */}
          </div>
          <div className="cant-change">userInfo.id</div>
          <div>비밀번호</div>
          <input></input>
          <div>비밀번호 확인</div>
          <input></input>
          <div>이메일</div>
          <input></input>
          <div>주소</div>
          <input></input>
          <div>
            <button className="submit-button center">저장</button>
          </div>
          <div>
            <button className="submit-button quit" style={{ float: "right" }}>
              회원탈퇴
            </button>
          </div>
        </div>
      </div>
    </MypageBody>
  );
}
export default Mypage;

const MypageBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 1200px;
  /* align-items: center; */

  .bold {
    font-size: x-large;
    font-weight: bold;
  }
  .tab {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    .focus {
      background-color: #dfaeae;
    }
    > li {
      cursor: pointer;
      font-size: large;
      font-weight: 600;
      background-color: #ebc8c8;
      border-radius: 3px;
      padding: 4px 25px;
      margin-right: 1vw;
      border: 2px solid black;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .tab-content {
      background-color: #ffeade;
      width: 69%;
      padding: 20px;
      margin-right: 10px; //간격확보
    }
    .user-information {
      background-color: #ececec;
      width: 23%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      > div {
        margin: 2px 0;
      }
      > input {
        margin: 2px 0;
        width: 98%;
        border: none;
        padding: 4px;
      }
      .submit-button {
        background-color: #ebc8c8;
        padding: 2px 10px;
        width: 80px;
        border-radius: 3px;
        border: 1.5px solid black;
        cursor: pointer;
      }
      .center {
        /* float: "center"; */
        /* justify-content: "center"; */
        margin-left: 35%;
        margin-top: 20px;
      }
      .quit {
        background-color: #f9a9a9;
        font-size: small;
        padding: 0;
        width: 60px;
        margin-top: 50px;
      }
      .cant-change {
        font-weight: 600;
        color: #9f480ede;
      }
    }
  }
`;
