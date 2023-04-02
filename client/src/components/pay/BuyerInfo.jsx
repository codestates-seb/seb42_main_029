import styled from "styled-components";

export default function BuyerInfo({userData}) {
  // console.log(userData)
  return (
    <>
      <Title>구매자정보</Title>

      <Wrapper>
        <LeftWrapper>
          <p>이름</p>
          <p>이메일</p>
        </LeftWrapper>
        <RightWrapper>
          <p>{userData.name}</p>
          <p>{userData.email}</p>
        </RightWrapper>
      </Wrapper>
    </>
  );
}

const Title = styled.div`
  font-size: 1.3rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
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
`;
