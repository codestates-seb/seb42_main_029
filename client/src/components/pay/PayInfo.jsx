import styled from "styled-components";

export default function PayInfo({ totalPrice }) {
  return (
    <>
      <Title>결제정보</Title>

      <Wrapper>
        <LeftWrapper>
          <p>배송비</p>
          <p>결제금액</p>
          <p>결제방법</p>
        </LeftWrapper>
        <RightWrapper>
          <p>무료배송</p>
          <p>{`${totalPrice}원`}</p>
          <p>무통장입금</p>
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
