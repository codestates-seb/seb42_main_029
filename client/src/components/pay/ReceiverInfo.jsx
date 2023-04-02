import React from "react";
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


  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeAddress = (e) => {
    setReceivingAddress(e.target.value);
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
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="이름"
              onChange={onChangeUsername}
              placeholder="이름을 입력해주세요!"
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
              required
            />

            {/* <button>정보수정하기</button> */}
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
  background-color: #fcabab;
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
      margin: 1.4rem 0;
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
