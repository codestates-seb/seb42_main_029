import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import OrderList from "../components/sellerMypage/OrderList";
import SellingItemList from "../components/sellerMypage/SellingItemList";
import axios from "axios";
import Modal from "../components/modal";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

function Mypage() {
  const data = {
    sellerId: "sellerId",
    userId: "userId",
    name: "name",
    loginId: "loginId",
    password: "password",
    email: "email",
    accountNumber: "accountNumber",
    bankName: "bank",
    address: "address",
    registrationNumber: "registrationNumber",
    phone: "phone",
  };
  const navigate = useNavigate();
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  //! 모달
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  //! 쿠키 , 바디없는 옵션 먼저 선언
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  console.log(cookies.accessToken);

  const noBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  //! 판매자 정보  axios sellerInfo

  const [sellerData, setSellerData] = useState({});

  function sellerInfoAxios() {
    return axios
      .get(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/sellers/my-page`, noBodyOptions)
      .then((res) => {
        console.log(`판매자 정보 요청 성공 res.data:`);
        console.log(res.data);
        setSellerData(res.data.data);
        dispatch({ type: "SELLER_INFORMATION", payload: res.data.data });
      })
      .catch((err) => {
        console.log("SellerData GET error");
      });
  }

  //! 페이지 로딩됨과 동시에 seller 정보를 가져오기 위한 useEffect
  useEffect(() => {
    console.log(state);
    console.log("sellerInfoAxios 전");
    sellerInfoAxios();
    console.log("sellerInfoAxios 후");
  }, []);

  console.log(state);

  //! 변경사항 서버에 patch하기 위한 함수

  const withBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  function patchSellerData(id) {
    // e.preventDefault();
    console.log(email, address, phone);
    const patchdata = {};

    if (email) {
      patchdata.email = email;
    }
    if (address) {
      patchdata.address = address;
    }
    if (phone) {
      patchdata.phone = phone;
      // 변경사항 없을때 어떻게 처리해야 할지 모르겠음
    }
    return axios
      .patch(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/sellers/${id}`, patchdata, withBodyOptions)
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        alert("회원정보 변경 완료!"); //여기서는 리로드 필요 없다 어차피 화면에서도 값이 바뀌어있으니
      })
      .catch((err) => {
        console.log("판매자정보 변경 patch 에러");
        console.log(patchdata);
      });
  }

  //! 판매자 회원 탈퇴요청 함수
  const deleteSeller = () => {
    return axios
      .delete(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/users/${state.user.sellerId}`, noBodyOptions)
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        dispatch({ type: "USER_ISLOGOUT" });
        setCookie("accessToken", "tokenXX");
        alert("판매자 회원탈퇴가 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.log("판매자 탈퇴 에러");
        console.log(state.user.userId);
      });
  };

  const [email, setEmail] = useState("");

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
          <div className="cant-change">{sellerData.name}</div>
          <div>아이디</div>
          <div className="cant-change">{sellerData.loginId}</div>
          <div>이메일</div>
          <input onChange={(e) => setEmail(e.target.value)} defaultValue={sellerData.email}></input>
          <div>사업자 등록번호</div>
          <div className="cant-change">{sellerData.registrationNumber}</div>
          <div>계좌번호</div>
          <div className="cant-change">{sellerData.accountNumber}</div>
          <div>은행 명</div>
          <div className="cant-change">{sellerData.bankName}</div>
          <div>사업장 주소</div>
          <input onChange={(e) => setAddress(e.target.value)} defaultValue={sellerData.address}></input>
          <div>전화번호</div>
          <input onChange={(e) => setPhone(e.target.value)} defaultValue={sellerData.phone}></input>
          <div>
            <button className="submit-button center" onClick={() => patchSellerData(state.user.sellerId)}>
              저장
            </button>
          </div>
          <div>
            {/* <button className="submit-button quit" style={{ float: "right" }} onClick={showModal}>
              회원탈퇴
            </button>
            {modalOpen && <Modal setModalOpen={setModalOpen} axiosfunction={deleteSeller} data={sellerData.sellerId} keyword="판매자 탈퇴" />} */}
          </div>
          <div className="sales"></div>
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
  font-family: 'Dovemayo_gothic';
  
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
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
      border-radius: 12px;
    }
    .tab-content {
      @media screen and (max-width: 768px) {
        width: 90%;
      }
      background-color: #ffeade;
      width: 69%;
      padding: 20px;
      margin-right: 10px; //간격확보
    }
    .user-information {
      @media screen and (max-width: 768px) {
        width: 90%;
        margin-bottom: 15px;
      }
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
