import styled from "styled-components";

export default function BuyerInfo() {
  return (
    <>
      <Title>구매자정보</Title>

      <Wrapper>
        <LeftWrapper>
          <p>이름</p>
          <p>이메일</p>
          <p>휴대폰</p>
        </LeftWrapper>
        <RightWrapper>
          <p>댕냥</p>
          <p>test@test.com</p>
          <p>010-1111-2222</p>
        </RightWrapper>
      </Wrapper>
    </>
  );
}

const Title = styled.div`
  font-size: 1.3rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
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
`;

const RightWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 2rem;
`;
