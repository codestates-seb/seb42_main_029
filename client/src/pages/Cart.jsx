import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import dummy from '../assets/dummy/dummy.json';

const val = [
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
      val.forEach((el) => idArray.push(el.id));
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
        <ProductBox>
          <ItemStyle>
            <input type='checkbox' name='select-all'
              onChange={(e) => handleAllCheck(e.target.checked)}
              // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
              checked={checkItems.length === val.length ? true : false} />
          </ItemStyle>
        <Title>전체선택</Title>
        </ProductBox>
        
        {/* props로 내려줄때 상품이 하나씩 추가되어야함 */}
            
            {dummy.sample.map((data, key)=>(
              <ProductBox>                
                <ItemStyle>
                {val?.map((val, key1)=>(
              <input type='checkbox' name={`select-${val.id}`} onChange={(e)=>handleSingleCheck(e.target.checked, data.id)}
              //체크된 아이템 배열에 해당 아이템이 있을경우 선택 활성화, 아니면 해제
              checked={checkItems.includes(val.id) ? true : false} />
            ))}
                </ItemStyle>
                <ItemStyle>
                  <ItemsImage src={data.image} alt="못찾겠따"/>
                </ItemStyle>
                <ItemStyle>{data.name}</ItemStyle>
                <ItemStyle color="#ff5c00">{data.price}</ItemStyle>
                <ItemStyle>

                  수량
                </ItemStyle>
                <ItemStyle>합계</ItemStyle>
                {/* 수량: 리덕스로 counter */}
                {/* 합계: 수량 * {data.price} */}
                <DeleteBtn>삭제하기</DeleteBtn>  
              </ProductBox>
            ))}   
            
      </ProductContainer>

      <PayBox color="#f5f5f0">
        결제할 금액
      </PayBox>
      <PayBox color="#96CAFF">
        0원
      </PayBox>
      <PayBox color="#f5f5f0">
        <PayBtn>선택한 상품 결제하기</PayBtn>
        <PayBtn>전체 상품 결제하기</PayBtn>
      </PayBox>
    </Container>
  );
};

const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin-top:20px;
  align-items:center;
  justify-content:center;
`

const CartTitle = styled.div`
  font-size:24px;
  font-weight:bold;
  margin-bottom:20px;

`

const ProductContainer = styled.div`
  display:flex;
  flex-direction:column;
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
const Title = styled.span`
  display:flex;
`
const ProductBox = styled.div`
  display:flex;
  align-items:center;
  height:100px;
  border: 1px solid gray;
  background-color:white;
`
const ItemsImage = styled.img`
  height: 70px;  
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
  width:70px;
  height:50px;
  border-radius:10px;
  background-color:red;
  color:white;
`
const PayBtn = styled.button`
 width:50%;
 height:100%;
 font-size:24px;
 font-weight:bold;
 &:hover{
  font-size:26px;
 }
 &:active{
  background-color:gray;
 }
`

// 추후에 상품의 정보를 배열값으로 설정하기


const ItemStyle = styled.div`
  display:grid;
  align-items: center;
  grid-template-rows: 30px 1fr 11fr 1fr 0.5fr 0.5fr 1fr;
  color: ${props => props.color || 'black'};
  width:15%;
`
export default Cart;
