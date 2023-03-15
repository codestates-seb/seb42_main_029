import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrderList from "../components/sellerMypage/OrderList";
import SellingItemList from "../components/sellerMypage/SellingItemList";
// import Button from "react-bootstrap/Button";
import axios from "axios";

function Mypage() {
  const data = {
    name: "name",
    id: "id",
    password: "password",
    email: "email",
    account: "account",
    bankName: "bank",
    address: "address",
    registrationNumber: "registrationNumber",
    phone: "phone",
  };

  //! 판매자 정보  axios sellerInfo

  const [sellerData, setSellerData] = useState({}); //판매자 데이터 담아서 나중에 sellerData.map()

  function sellerInfoAxios(id) {
    return axios
      .get(`http://localhost:8080/sellers/${id}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setSellerData(res.data);
      })
      .catch((err) => {
        console.log("SellerData GET error");
      });
  }

  //! 페이지 로딩됨과 동시에 seller 정보를 가져오기 위한 useEffect
  // useEffect(()=>{patchSellerData(reduxUserId)},[])

  //! 변경사항 서버에 patch하기 위한 함수

  function patchSellerData(e, id) {
    e.preventDefault();
    console.log(password, password2, email, account, bank, address, phone);
    const patchdata = {};
    if (password !== "" && password2 !== "" && password === password2) {
      patchdata.password = password;
    }
    if ((password !== "" || password2 !== "") && password !== password2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
    if (email) {
      patchdata.email = email;
    }
    if (account) {
      patchdata.account = account;
    }
    if (bank) {
      patchdata.bank = bank;
    }
    if (address) {
      patchdata.address = address;
    }
    if (phone) {
      patchdata.phone = phone;
    }
    return axios
      .patch(`http://localhost:8080/sellers/${id}`, patchdata, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("판매자정보 변경 patch 에러");
        console.log(patchdata);
      });
  }

  //! 판매자 회원 탈퇴요청 함수 추가하고, 탈퇴버튼 온클릭에 연결

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [bank, setBank] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

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
          <div className="cant-change">{data.name}</div>
          <div>아이디</div>
          <div className="cant-change">{data.id}</div>
          <div>비밀번호</div>
          <input onChange={(e) => setPassword(e.target.value)} defaultValue={data.password} type="text"></input>
          <div>비밀번호 확인</div>
          <input onChange={(e) => setPassword2(e.target.value)} defaultValue={data.password}></input>
          <div>이메일</div>
          <input onChange={(e) => setEmail(e.target.value)} defaultValue={data.email}></input>
          <div>
            사업자 등록번호
            {/* <button className="submit-button" style={{ float: "right" }}>
                    중복검사
                  </button> */}
          </div>
          <div className="cant-change">{data.registrationNumber}</div>
          <div>계좌번호</div>
          <input onChange={(e) => setAccount(e.target.value)} defaultValue={data.account}></input>
          <div>은행 명</div>
          <input onChange={(e) => setBank(e.target.value)} defaultValue={data.bankName}></input>
          <div>사업장 주소</div>
          <input onChange={(e) => setAddress(e.target.value)} defaultValue={data.address}></input>
          <div>전화번호</div>
          <input onChange={(e) => setPhone(e.target.value)} defaultValue={data.phone}></input>
          <div>
            <button className="submit-button center" onClick={patchSellerData}>
              저장
            </button>
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
