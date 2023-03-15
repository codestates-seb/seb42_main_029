import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin-top:20px;
  
  align-items:center;
  justify-content:center;
`

const CartTitle = styled.div`
  display:flex;  
  align-items:flex-start;
  flex-direction:row;
  font-size:24px;
  font-weight:bold;
  margin-bottom:20px;

`

const ProductContainer = styled.div`
  display:flex;
  flex-direction: column;
  height:600px;
  width: 90%;
  border: 1px solid black;
  background-color:#f5f5f0;
  
`
const ProductTitle = styled.div`
  display:flex;
  align-items:center;
  font-weight:bold;
  height:30px;
`
const CategoryBox = styled.div`
  display:flex;
  flex-direction:row;  
  align-items:center;
  justify-content:space-around;
  font-weight:bold;
  border: solid 1px black;
  height:50px;
  
  div {
    background-color:#f5f5f0;
  }

`
const TitleCategory05 = styled.div`
display:flex;
flex-grow:${(props)=>(props.grow)};
height:50px;
align-items:center;
justify-content:center;

`
const TitleCategory3 = styled.div`
flex-grow:3;
border: 1px solid black;
height:50px;
`
const TitleCategory01 = styled.div`
flex-grow:0.1;
border: 1px solid black;
height:50px;
`
const ProductBox = styled.div`
  display:flex;  
  height:100px;
  border: 1px solid black;
  align-items:center;
  background-color:white;
`

const PayBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:${(props)=>(props.color)};
  height:80px;
  width: 90%;
  font-size:24px;
  font-weight:bold;
`
const DeleteBtn = styled.button`
  width:100px;
  height:50px;
  border-radius:10px;
`
const PayBtn = styled.button`

`
// 추후에 상품의 정보를 배열값으로 설정하기
const data = [
  {id: 0, title: '선택 1'}
];


const Cart = () => {
  // 체크된 아이템을 담을 배열
const [checkItems, setCheckItems] = useState([]);

// 체크박스 단일선택
const handleSingleCheck = (checked, id) => {
  if(checked){
    setCheckItems(prev => [...prev, id]);
  }else{
    setCheckItems(checkItems.filter((el) => el !== id));
  }
}

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }
  return (
    <Container>
      <CartTitle>장바구니</CartTitle>
      <ProductContainer>
        <ProductTitle>일반상품(n)</ProductTitle>
        <CategoryBox>
          <TitleCategory05><input type='checkbox' name='select-all'
              onChange={(e) => handleAllCheck(e.target.checked)}
              // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
              checked={checkItems.length === data.length ? true : false} /></TitleCategory05>
          <TitleCategory05 grow="0.5">이미지</TitleCategory05>
          <TitleCategory05 grow="0.1">상품정보</TitleCategory05>
          <TitleCategory05 grow="0.5">판매가</TitleCategory05>
          <TitleCategory05 grow="0.1">수량</TitleCategory05>
          <TitleCategory05 grow="0.2">합계</TitleCategory05>
          <TitleCategory05 grow="0.1">삭제</TitleCategory05>
        </CategoryBox>

        <ProductBox>
        {/* props로 내려줄때 상품이 하나씩 추가되어야함 */}
          <TitleCategory05>
            {data?.map((data, key)=>(
              <input type='checkbox' name={`select-${data.id}`} onChange={(e)=>handleSingleCheck(e.target.checked, data.id)}
              //체크된 아이템 배열에 해당 아이템이 있을경우 선택 활성화, 아니면 해제
              checked={checkItems.includes(data.id) ? true : false} />
            ))}
          </TitleCategory05>
          <TitleCategory05 grow="0.5">이미지</TitleCategory05>
          <TitleCategory05 grow="0.1">상품정보</TitleCategory05>
          <TitleCategory05 grow="0.5">판매가</TitleCategory05>
          <TitleCategory05 grow="0.1">수량</TitleCategory05>
          <TitleCategory05 grow="0.2">합계</TitleCategory05>      
          <DeleteBtn>삭제하기</DeleteBtn>  
        </ProductBox>
      </ProductContainer>
      <PayBox color="#96CAFF">
        <PayBtn>선택한 상품 결제하기</PayBtn>
        <PayBtn>전체 상품 결제하기</PayBtn>
      </PayBox>
      <PayBox color="#f5f5f0">
        결제할 금액
      </PayBox>
      <PayBox color="#96CAFF">
        0원
      </PayBox>
    </Container>
  );
};

export default Cart;