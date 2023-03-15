import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

  //! 판매자 회원가입 요청 get
  const [sellerRequestData, setSellerRequestData] = useState({}); //판매자 데이터 담아서 나중에 sellerRequestData.map()

  function sellerRequestAxios(userId) {
    //!        페이지네이션 구현해야하는데 아직임
    return axios
      .get(`http://localhost:8080/sellers/admin?page=0&size=12`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        setSellerRequestData(res.data);
      })
      .catch((err) => {
        console.log("sellerRequestData GET error");
      });
  }
  //! 페이지 로딩됨과 동시에 user 정보를 가져오기 위한 useEffect
  // useEffect(()=>{sellerRequestAxios(reduxUserId)},[])

  //! 판매자 신청 거절 함수
  const deleteSellerRequest = (sellerId) => {
    // e.preventDefault();
    alert("정말 판매자 신청을 거절 하시겠습니까?");
    return axios
      .delete(`http://localhost:8080/admin/sellers/${sellerId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("판매자신청 거절 에러");
        console.log(sellerId);
      });
  };

  //! 판매자 신청 승인 함수
  const acceptSellerRequest = (sellerId) => {
    // e.preventDefault();

    return axios
      .patch(
        `http://localhost:8080/admin/sellers/${sellerId}`,
        { sellerId: sellerId, sellerStatus: "SELLER_APPROVE" },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("판매자신청 승인 에러");
        console.log(sellerId);
      });
  };
  return (
    <AdminSellerSignUpRequestBody>
      <div className="bold">판매자 회원가입 신청 </div>
      {SellerSignupExData.map((el) => (
        <div className="sellerinfo">
          <div className="sellerinfo-left">
            <div>판매자 번호: {el.sellerId}</div>
            <div className="important">상호 명 : {el.name}</div>
            <div className="important">사업자 등록번호: {el.registrationNumber}</div>
            <div className="important">주소 : {el.address}</div>
            <div className="important">전화번호 : {el.phone}</div>
          </div>
          <div className="sellerinfo-right">
            <br />

            <div>신청일 :{el.createdAt}</div>
            <div className="important">계좌번호 : {el.accoutNumber}</div>
            <div>은행 : {el.bankName}</div>
            <div className="important">상태 : {el.sellerStatus}</div>

            <button className="button accept" style={{ float: "right" }} onClick={() => acceptSellerRequest(el.sellerId)}>
              <Link className="link">판매자 승인</Link>
            </button>

            <button className="button deny" style={{ float: "right" }} onClick={() => deleteSellerRequest(el.sellerId)}>
              <Link className="link">판매자 거절</Link>
            </button>
          </div>
        </div>
      ))}
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
    }
    .sellerinfo-right {
      width: 33%;
    }
  }
`;
