import React from "react";
import styled from "styled-components";
export default function PayCompleteForm() {
  return (
    <Wrapper>
      <TopWrapper>
        <Title>주문이 완료되었습니다.</Title>
        <p>아래 계좌로 입금해 주셔야지 결제가 완료됩니다. </p>
        <p>입금이 완료된 시간에 따라 익일 발송 처리 될 수 있습니다.</p>
        <p>정확한 배송 일정은 문의주시기 바랍니다.</p>
      </TopWrapper>

      <UnderWrapper>
        <LeftWrapper>
          <Title2>배송지 정보</Title2>
          <Title2>입금계좌안내</Title2>
          <Title2>입금액</Title2>
        </LeftWrapper>

        <RightWrapper>
          {/* 배송지 정보 내용 */}
          <PurchaserInfo>
            <p>{`이름 : 댕냥`}</p>
            <p>{`연락처 : 010-1111-2222`}</p>
            <p>{`주소 : 부산시 해운대구 해운대로 xx-qqq, @???`}</p>
          </PurchaserInfo>

          {/* 입금계좌안내 내용 */}
          <AccountInfo>
            <p>{`은행명 : 농협`}</p>
            <p>{`계좌번호 : 3521023048302`}</p>
            <p>{`예금주 : 댕냥`}</p>
          </AccountInfo>

          {/* 입금액 === 총 결제금액 */}
          <p>{`${40000} 원`}</p>
        </RightWrapper>
      </UnderWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 80%;
  background-color: #fef7f7;
  margin: 3rem 0;
`;

const TopWrapper = styled.div`
  margin: 3rem 3rem;

  p {
    margin: 1rem;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const Title2 = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 5rem;
`;

const UnderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 3rem 3rem;
`;

const LeftWrapper = styled.div`
  flex: 1.5;
  justify-content: space-around;
  align-items: center;
`;

const RightWrapper = styled.div`
  flex: 3;
`;

const PurchaserInfo = styled.div`
  margin-bottom: 2.3rem;

  p {
    margin-bottom: 10px;
  }
`;
const AccountInfo = styled.div`
  margin-bottom: 2.5rem;

  p {
    margin-bottom: 10px;
  }
`;
