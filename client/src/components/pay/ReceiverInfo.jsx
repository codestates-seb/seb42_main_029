import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";

export default function ReceiverInfo({
  userData,
  receiver,
  setUsername,
  phone,
  setPhone,
  receivingAddress,
  setReceivingAddress,
}) {
  // 받는 사람 정보 처음으로는 구매자 정보를 띄우고, 변경 가능 하게 버튼 추가 > 전화번호
  // console.log(userData);

  //! 리액트 쿠키
  const [cookies] = useCookies(["accessToken"]);

  // input value get
  // const [receiver, setUsername] = useState("");
  // const [phone, setPhone] = useState("");
  // const [receivingAddress, setReceivingAddress] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeAddress = (e) => {
    setReceivingAddress(e.target.value);
  };

  // console.log(receiver);
  // console.log(phone);
  // console.log(receivingAddress);

  //! axios.patch 받는 사람 정보 수정
  const correctInfo = async (e, id) => {
    e.preventDefault();
    console.log(e);
    console.log(id);
    const patchData = {
      receiver,
      phone,
      receivingAddress,
    };

    const headers = {
      headers: {
        Authorization: cookies.accessToken,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    return await axios
      .patch(
        `${process.env.REACT_APP_AWS_EC2}/orders/${id}`,
        patchData,
        headers
      )
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        alert("정보수정이 완료되어 등록 되었습니다.");
      })
      .catch((error) => {
        console.log("구매자 유저정보 변경 patch 에러");
        alert("정보수정이 실패 되었습니다.");
      });
  };

  return (
    <>
      <TopWrapper>
        <Title>받는사람정보</Title>

        {/* <button >정보수정하기</button> */}
      </TopWrapper>

      <Wrapper>
        <LeftWrapper>
          <p>이름</p>
          <p>휴대폰</p>
          <p>주소</p>
        </LeftWrapper>
        <RightWrapper>
          <form onSubmit={() => correctInfo()}>
            <input
              type="text"
              name="이름"
              onChange={onChangeUsername}
              placeholder="이름을 입력해주세요!"
              // defaultValue={userData.name}
              required
            />
            <input
              type="text"
              name="폰번호"
              onChange={onChangePhone}
              placeholder="전화번호를 입력해주세요!"
              required
            />
            <input
              type="text"
              name="주소"
              onChange={onChangeAddress}
              placeholder="주소를 입력해주세요!"
              // defaultValue={userData.receivingAddress}
              required
            />

            <button>정보수정하기</button>
          </form>
        </RightWrapper>
      </Wrapper>
    </>
  );
}
const TopWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.3rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #fef4f4;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

const LeftWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #d1bdbd;
  border-radius: 10px;

  /* p {
    margin: 0.6rem 0 2rem 0;
  } */
  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const RightWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 2rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    input {
      margin: 0.7rem 0;
      width: 20rem;
      height: 1.3rem;
      border: none;
      border-radius: 5px;
      margin-bottom: 1.3rem;
      :focus {
        outline: none;
        border: 1px dotted pink;
      }
    }

    // 정보수정하기 버튼
    button {
      width: 7rem;
      height: 2rem;
      border: none;
      border-radius: 5px;
      background-color: #e8cccc;
      cursor: pointer;
      font-family: "Dovemayo_gothic";

      :hover {
        color: #ffffff;
      }
    }

    @media screen and (max-width: 768px) {
      button {
        width: 5rem;
        height: 2rem;
        font-size: 0.7rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    // 모바일 인풋 값 입력 시 폰트 사이즈
    * {
      font-size: 0.7rem;
    }

    form {
      input {
        width: 8rem;
      }
    }
  }
`;
