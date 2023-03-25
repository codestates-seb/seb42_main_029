import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import OrderList from "../components/mypage/OrderList";
import QnAList from "../components/mypage/QnAList";
import ReviewList from "../components/mypage/ReviewList";
// import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "../components/modal";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
function Mypage() {
  const data = {
    userId: "userId",
    name: "name",
    id: "id",
    password: "password",
    email: "email",
    address: "address",
    createdAt: "createdAt",
    modifiedAt: "modifiedAt",
    userStatus: "userStatus",
  };
  const navigate = useNavigate();
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook
  //! 모달
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  //! 모든 요청에 withCredentials가 true로 설정됩니다.
  axios.defaults.withCredentials = true;

  //! 회원정보 axios userInfo
  const [userData, setUserData] = useState({}); //판매자 데이터 담아서 나중에 userData.map()

  //! 리액트 쿠키
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  console.log(cookies.accessToken);

  const options = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  function userInfoAxios() {
    return (
      axios
        .get(`http://ec2-3-36-78-57.ap-northeast-2.compute.amazonaws.com:8080/users/my-page`, options)
        .then((res) => {
          console.log(`res.data:`);
          console.log(res.data);
          setUserData(res.data.data);

          console.log(res.data.data);
          dispatch({ type: "USER_INFORMATION", payload: res.data.data });
          // 디스패치는 되다가 안되다가 함 아직 보완 필요
        })
        // .then(() => {
        //   console.log(userData);
        // dispatch({ type: "USER_INFORMATION", payload: userData });
        //   console.log(state.user);
        // })
        .catch((err) => {
          console.log("userData GET error");
          console.log(options);
        })
    );
  }
  //! 페이지 로딩됨과 동시에 user 정보를 가져오기 위한 useEffect
  useEffect(() => {
    console.log(state);

    userInfoAxios();
    // dispatch({ type: "USER_INFORMATION", payload: userData });
    console.log(state);
  }, []);

  //! 변경사항 서버에 patch하기 위한 함수

  function patchUserData(id) {
    console.log(password, password2, email, address);
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
    if (address) {
      patchdata.address = address;
    }
    return axios
      .patch(`http://localhost:8080/users/${id}`, patchdata, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        navigate("/mypage");
      })
      .catch((err) => {
        console.log("구매자 유저정보 변경 patch 에러");
        console.log(patchdata);
        navigate("/mypage");
      });
  }

  //! 회원 탈퇴요청 함수 추가하고, 탈퇴버튼 온클릭에 연결
  const deleteUser = (id) => {
    // e.preventDefault();
    return axios
      .delete(`http://localhost:8080/users/${id}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("회원탈퇴 에러");
        console.log(id);
      });
  };

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  //탭 제작
  const tabArray = [
    { id: 0, title: "주문 목록" },
    { id: 1, title: "Q&A 목록" },
    { id: 2, title: "후기 목록" },
  ];

  const [focus, setFocus] = useState(0);

  return (
    <MypageBody>
      <h1 className="page_title">🏠 회원 마이페이지</h1>
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
          <div className="cant-change">{userData.name}</div>
          <div>
            아이디
            {/* <button className="submit-button" style={{ float: "right" }}>
              중복검사
            </button> */}
          </div>
          <div className="cant-change">{userData.loginId}</div>
          <div>비밀번호</div>
          <input onChange={(e) => setPassword(e.target.value)} defaultValue={userData.password}></input>
          <div>비밀번호 확인</div>
          <input onChange={(e) => setPassword2(e.target.value)} defaultValue={userData.password}></input>
          <div>이메일</div>
          <input onChange={(e) => setEmail(e.target.value)} defaultValue={userData.email}></input>
          <div>주소</div>
          <input onChange={(e) => setAddress(e.target.value)} defaultValue={userData.address}></input>
          <div>
            <button onClick={() => patchUserData(userData.userId)} className="submit-button center">
              저장
            </button>
            {/* <button onClick={showModal} className="submit-button center">
              저장
            </button> */}
            {/* {modalOpen && <Modal setModalOpen={setModalOpen} axiosfunction={patchUserData} data={data.userId} keyword="회원정보 변경" />} */}
          </div>
          <div>
            <button onClick={showModal} className="submit-button quit" style={{ float: "right" }}>
              회원탈퇴
            </button>
            {modalOpen && <Modal setModalOpen={setModalOpen} axiosfunction={deleteUser} data={data.userId} keyword="회원탈퇴" />}
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
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 15px;
  }
  /* align-items: center; */
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
    position: sticky;
    top: 8%;
    z-index: 100;
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    margin-bottom: 20px;
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
      z-index: 100;
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
