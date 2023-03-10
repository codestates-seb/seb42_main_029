import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrderList from "../components/sellerMypage/OrderList";
import SellingItemList from "../components/sellerMypage/SellingItemList";
// import Button from "react-bootstrap/Button";

function Mypage() {
  //회원정보 axios sellerInfo

  //주문목록, qna , 후기는 컴포넌트화 해서 연결

  //탭 제작
  const tabArray = [
    { id: 0, title: "주문 목록" },
    { id: 1, title: "판매 상품 목록" },
  ];

  const [focus, setFocus] = useState(0);

  return (
    <MypageBody>
      <h1 className="page_title">🏠 판매자 마이페이지</h1>
      <ul className="tab">
        {tabArray.map((el) => (
          <li key={el.id} onClick={() => setFocus(el.id)} className={el.id === focus ? "focus" : ""}>
            {el.title}
          </li>
        ))}
      </ul>
      <div className="content">
        <div className="tab-content"> {focus === 0 ? <OrderList /> : focus === 1 ? <SellingItemList /> : null}</div>
        <div className="user-information">
          <div className="bold">판매자 정보 변경</div>
          <div>상호명</div>
          <div className="cant-change">sellerInfo.name</div>
          <div>아이디</div>
          <div className="cant-change">sellerInfo.id</div>
          <div>비밀번호</div>
          <input></input>
          <div>비밀번호 확인</div>
          <input></input>
          <div>이메일</div>
          <input></input>
          <div>
            사업자 등록번호
            {/* <button className="submit-button" style={{ float: "right" }}>
                    중복검사
                  </button> */}
          </div>
          <div className="cant-change">sellerInfo.registration_number</div>
          <div>계좌번호</div>
          <input></input>
          <div>은행 명</div>
          <input></input>
          <div>사업장 주소</div>
          <input></input>
          <div>전화번호</div>
          <input></input>
          <div>
            <button className="submit-button center">저장</button>
          </div>
          <div>
            <button className="submit-button quit" style={{ float: "right" }}>
              회원탈퇴
            </button>
          </div>
          <div className="sales">
            <div className="bold"> 매출 현황 </div>
            <div> 총 매출은 쉬움 전부 더하면 됨 </div>
            <div> 월별매출은 어떤식으로 구현할 지 더 고민해봐야함</div>
            <div> api에 따라 판매내역을 어떤 기준으로 한번에 얼마나 많은 양을 요청하느냐에 따라 다름 </div>
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
    > div {
      border-radius: 12px;
    }
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
      /* display: flex; */
      /* flex-direction: column; */
      .sales {
        margin-top: 100px;
      }
      .bold {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      > div {
        margin: 2px 0;
      }

      > input {
        margin: 2px 0;
        width: 100%;
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
        margin: 5px 0;
      }
    }
  }
`;
