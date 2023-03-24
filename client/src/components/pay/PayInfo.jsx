import React from 'react'
import styled from 'styled-components';

export default function PayInfo() {
  return (
    <>
      <Title>결제정보</Title>

      <Wrapper>
        <LeftWrapper>
          <p>상품가격</p>
          <p>배송비</p>
          <p>총 결제금액</p>
          <p>결제방법</p>
        </LeftWrapper>
        <RightWrapper>
          <p>{`${30000}원`}</p>
          <p>무료배송</p>
          <p>{`${40000}원`}</p>
          <p>무통장입금</p>
        </RightWrapper>
      </Wrapper>
    </>
  )
}

const Title = styled.div`
  font-size: 1.3rem;
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
`;

const RightWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 2rem;
`;