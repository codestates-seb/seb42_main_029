import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import AdminItemList from "../components/admin/AdminItemList";
import AdminReview from "../components/admin/AdminReview";
import SellerSignUpReqeust from "../components/admin/SellerSignUpRequest";

function AdminMypage() {
  const tabArray = [
    { id: 0, title: "판매자 회원가입 신청" },
    // { id: 1, title: "후기 관리 " },
    // { id: 2, title: "판매 상품 관리" },
  ];
  const [focus, setFocus] = useState(0);

  return (
    <AdminBody>
      {" "}
      <h1 className="page_title">🛠️ 관리자 마이페이지</h1>
      <ul className="tab">
        {tabArray.map((el) => (
          <li key={el.id} onClick={() => setFocus(el.id)} className={el.id === focus ? "focus" : ""}>
            {el.title}
          </li>
        ))}
      </ul>
      <div className="content">
        <div className="tab-content"> {focus === 0 ? <SellerSignUpReqeust /> : focus === 1 ? <AdminReview /> : focus === 2 ? <AdminItemList /> : null}</div>
      </div>
    </AdminBody>
  );
}

export default AdminMypage;
const AdminBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-family: 'Dovemayo_gothic';
  margin-bottom: 10rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 15px;
  }
  .page_title {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .bold {
    font-size: 20px;
    font-weight: bold;
  }
  .tab {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    margin-bottom: 20px;
    position: sticky;
    top: 8%;

    .focus {
      background-color: #dfaeae;
    }
    > li {
      @media screen and (max-width: 768px) {
        font-size: 0.9rem;
      }
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
    > div {
      border-radius: 12px;
    }
    .tab-content {
      background-color: #ffeade;
      width: 100%;
      padding: 20px;
      margin-right: 10px; //간격확보
    }
  }
`;
