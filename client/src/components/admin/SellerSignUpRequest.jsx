import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Modal from "../modal";
import Paging from "../pagination/pagination";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

const SellerSignUpReqeust = () => {
  const SellerSignupExData = [
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
    {
      sellerId: "sellerId",
      id: "id",
      password: "password",
      name: "name",
      registrationNumber: "registrationNumber",
      address: "address",
      phone: "phone",
      sellerStatus: "sellerStatus",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
      accoutNumber: "accoutNumber",
      bankName: "bankName",
    },
  ];
  const navigate = useNavigate();
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook

  //! 모달
  const [modalIndex, setModalIndex] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  //! 판매자 회원가입 요청 get
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const noBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  const [sellerRequestData, setSellerRequestData] = useState({}); //판매자 데이터 담아서 나중에 sellerRequestData.map()

  function sellerRequestAxios() {
    //!        페이지네이션 구현해야하는데 아직임
    return axios
      .get(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/admin?page=1&size=12`, noBodyOptions)
      .then((res) => {
        console.log(`판매자 신청 get 완료 res.data:`);
        console.log(res.data);
        console.log(res.data.data);
        setSellerRequestData(res.data.data);
        console.log(sellerRequestData);
      })
      .catch((err) => {
        console.log("sellerRequestData GET error");
      });
  }
  //! 페이지 로딩됨과 동시에 user 정보를 가져오기 위한 useEffect
  useEffect(() => {
    sellerRequestAxios();
  }, []);

  //! 판매자 신청 거절 함수
  const deleteSellerRequest = (sellerId) => {
    return axios
      .patch(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/admin/rejected/${sellerId}`, noBodyOptions)
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log("판매자신청 거절 에러");
        console.log(sellerId);
      });
  };

  //! 판매자 신청 승인 함수
  const acceptSellerRequest = (sellerId) => {
    return axios
      .patch(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/admin/approval/${sellerId}`, noBodyOptions)
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log("판매자신청 승인 에러");
        console.log(sellerId);
      });
  };

  //!pagination
  const [page, setPage] = useState(1);

  return (
    <AdminSellerSignUpRequestBody>
      <div className="bold">판매자 회원가입 신청 </div>
      {Array.isArray(sellerRequestData) &&
        sellerRequestData.map((el, index) => (
          <div className="sellerinfo" key={index}>
            <div className="sellerinfo-left">
              <div>판매자 번호: {el.sellerId}</div>
              <div className="important">상호 명 : {el.name}</div>
              <div className="important">사업자 등록번호: {el.registrationNumber}</div>
              <div className="important">주소 : {el.address}</div>
              <div className="important">전화번호 : {el.phone}</div>
            </div>
            <div className="sellerinfo-right">
              <br />

              <div className="important">계좌번호 : {el.accountNumber}</div>
              <div>은행 : {el.bankName}</div>
              <div className="important">상태 : {el.sellerStatus}</div>

              <button className="button accept" style={{ float: "right" }} onClick={() => acceptSellerRequest(el.sellerId)}>
                <Link className="link">판매자 승인</Link>
              </button>

              {/* <button className="button deny" style={{ float: "right" }} onClick={() => deleteSellerRequest(el.sellerId)}>
              <Link className="link">판매자 거절</Link>
            </button> */}
              <button
                className="button deny"
                style={{ float: "right" }}
                onClick={() => {
                  setModalIndex(index);
                  showModal();
                }}
              >
                <Link className="link">판매자 거절</Link>
              </button>
              {/* {modalOpen && <Modal setModalOpen={setModalOpen} axiosfunction={deleteSellerRequest} data={el.sellerId} keyword="판매자 거절" />} */}
              {modalOpen && (
                <Modal
                  setModalOpen={setModalOpen}
                  axiosfunction={deleteSellerRequest}
                  data={sellerRequestData}
                  index={sellerRequestData.findIndex((element, index) => index === modalIndex)}
                  objectKey="sellerId"
                  keyword="판매신청 거절"
                />
              )}
            </div>
          </div>
        ))}

      <Paging page={page} setPage={setPage} />
    </AdminSellerSignUpRequestBody>
  );
};

export default SellerSignUpReqeust;

const AdminSellerSignUpRequestBody = styled.div`
  display: flex;
  flex-direction: column;
  /* .bold {
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 10px;
  } */
  .sellerinfo {
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
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
    .accept {
      background-color: #c4ff80;
      margin-left: 10px;
    }
    .deny {
      background-color: #ffa480;
    }
    .cancle {
      background-color: #f9a9a9;
      font-size: small;
      padding: 0;
      width: 60px;
    }
    .sellerinfo-left {
      width: 65%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .sellerinfo-right {
      width: 33%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
