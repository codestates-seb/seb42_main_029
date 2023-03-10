import React from 'react';
import styled from 'styled-components';
import moreImg from '../assets/productImage/img_dummy1_more.jpeg'
import img6 from '../assets/productImage/img_dummy6.png';

const Container = styled.div`
  display:flex;  
  flex-direction:column;
`
const ContainerTop = styled.div`
  display:flex;  
  flex-direction:row;  
  
`
const ItemsImage = styled.img`  
  width: 580px;
  height: 543px;  
`
const TextDiv = styled.div`
  display:flex;  
  flex-direction:column;  
`

const SellerInfo = styled.div`
  margin-top:30px;
  background-color: #D9D9D9;
  width:1300px;
  height:463px;
`

const ProductInfo = () => {
  return (  
    <Container>
      <ContainerTop>
        <ItemsImage src={img6} />
        <TextDiv> 123</TextDiv>
        <TextDiv> 123</TextDiv>          
      </ContainerTop>
      <SellerInfo> 
        
      </SellerInfo>
    </Container>
  );
};
export default ProductInfo;