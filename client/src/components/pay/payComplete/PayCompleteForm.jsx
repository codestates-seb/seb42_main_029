import { useLocation } from "react-router-dom";
import styled from "styled-components";
export default function PayCompleteForm() {
  const userInfo = useLocation();
  console.log(userInfo);

  console.log(userInfo.state.address);

  return (
    <Wrapper>
      <TopWrapper>
        <Title>주문이 완료되었습니다.</Title>
        <p>아래 계좌로 입금해 주셔야지 결제가 완료됩니다. </p>
        <p>입금완료된 시간에 따라 익일 발송 처리 될 수 있습니다.</p>
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
            <p>이름 : {`${userInfo.state.name}`}</p>
            <p>연락처 : {`${userInfo.state.phoneNum}`}</p>
            <p>주소 : {`${userInfo.state.address}`}</p>
          </PurchaserInfo>

          {/* 입금계좌안내 내용 */}
          <AccountInfo>
            <p>{`은행명 : 농협`}</p>
            <p>{`계좌번호 : 351012438302`}</p>
            <p>{`예금주 : 모두댕냥 관리자`}</p>
          </AccountInfo>

          {/* 입금액 === 총 결제금액 */}
          <p>{`${userInfo.state.totalPrice} 원`}</p>
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
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const TopWrapper = styled.div`
  margin: 3rem 3rem;

  p {
    margin: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin: 1.5rem 0 1.5rem 1.2rem;
    p {
      font-size: 0.7rem;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Title2 = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 5.3rem;
  }
`;

const UnderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 3rem 3rem;

  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
`;

const LeftWrapper = styled.div`
  flex: 1.5;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    p {
      margin-bottom: 2rem;
    }
  }
`;

const RightWrapper = styled.div`
  flex: 3;

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

const PurchaserInfo = styled.div`
  margin-bottom: 2.3rem;

  p {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.7rem;
    }
  }
`;
const AccountInfo = styled.div`
  margin-bottom: 2.5rem;

  p {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.7rem;
    }
  }
`;
