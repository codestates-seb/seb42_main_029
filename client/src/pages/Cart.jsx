import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dummy from '../assets/dummy/dummy.json';
import { increment, decrement } from '../Redux/counterReducer';
/*
 * 현재는 상품수량 모두 counter 하나로 공유합니다.
 */
const Cart = () => {
  // * Redux 함수
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
    console.log({counter});

  // * 장바구니의 상품 수량 증가함수 
  function handleIncrease(){
    //(product_id2 === state.product_id2)
    dispatch({type:'INCREASE'});
    console.log({counter});
  }
  // * 장바구니의 상품 수량 감소함수 
  function handleDecrease(){
    dispatch({type:'DECREASE'});
    console.log({counter});
  }

  return (
    <Container>
      <CartTitle>장바구니</CartTitle>
      <ProductContainer>
        <ProductTitle>일반상품(8)</ProductTitle>
        <ProductBox>
          {/* AllCheckbox 컴포넌트 */}
        </ProductBox>
        
        {/* props로 내려줄때 상품이 하나씩 추가되어야함 */}
        
        {dummy.sample.map((data)=>(
          <ProductBox key={data.product_id}>                
            <ItemStyle>
              {/* 여기에 체크박스 컴포넌트 넣기 */}
              {/* singleCheckbox 컴포넌트 */}
            </ItemStyle>
            <ItemStyle>
              <ItemsImage src={data.image} alt="못찾겠따"/>
            </ItemStyle>
            <ItemStyle maxwid="200">{data.name}</ItemStyle>
            <ItemStyle color="#ff5c00">{data.price}</ItemStyle>
            <ItemStyle>
            
            </ItemStyle>
            <ItemStyle>
              <CountBtn onClick={() => handleDecrease()}>-</CountBtn>
                {counter.Quantity}
              <CountBtn onClick={() => handleIncrease()}>+</CountBtn>
            </ItemStyle>

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
  // justify-content:center;
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
  display:grid;
  grid-template-columns:0.5fr 1fr 3fr 1fr 1fr 1fr 1fr;
  grid-auto-rows:minmax(150px, auto)
  height:150px;
  align-items:center;
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
  width:${props => props.width || '50%'};
  height:${props => props.height || '100%'};
  font-size:24px;
  font-weight:bold;
  &:hover{
    font-size:26px;
  }
  &:active{
    background-color:gray;
  }
`

const ItemStyle = styled.div`
  color: ${props => props.color || 'black'};
`

const CountBtn = styled.button`
  flex-direction:row;
  border: none;
  outline: none;
  background-color:silver;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  &:active {
    background-color: #1565C0;
  }
`

export default Cart;
