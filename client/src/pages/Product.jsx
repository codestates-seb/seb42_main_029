import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dummy from '../assets/dummy/dummy.json';
import img_dummy1 from '../assets/productImage/img_dummy1.png';
import img_dummy2 from '../assets/productImage/img_dummy2.png';
import img_dummy3 from '../assets/productImage/img_dummy3.png';
import img_dummy4 from '../assets/productImage/img_dummy4.png';
import img_dummy5 from '../assets/productImage/img_dummy5.png';
import img_dummy6 from '../assets/productImage/img_dummy6.png';
import img_dummy7 from '../assets/productImage/img_dummy7.png';
import img_dummy8 from '../assets/productImage/img_dummy8.png';


// ItemContainer 축잡는 용도로 사용
const ItemContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  flex-wrap: wrap;
  width:100%;
`

// ItemContents 
const ItemContents = styled.div`
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  
  width: 24%;
  min-width : 330px;
  
  height: 360px;

  border-radius: 10px;
  margin-bottom: 1%;
`

const ItemsImage = styled.img`
  display : flex;
  flex-direction : row;

  width: 330px;
  height: 273px;  
`

const TextTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;

  font-size:24px;
`

const TextPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:5px;
  font-size:24px;
  color:#FF5C00  
`

const TextSelect = styled.div`
  display:flex;
  justify-content: space-between;
  font-size:24px;
  margin-top:100px;
  margin-bottom:30px;
`
const Product = () => {
  // console.log(dummy.sample)
  return (
    <div>      
      {/* dummy.json을 호출 */}
      {/* 
      <img src={img_dummy3} />
      <img src={img_dummy4} />
      <img src={img_dummy5} />
      <img src={img_dummy6} />
      <img src={img_dummy7} />
      <img src={img_dummy8} />
      <span>인기상품 몇몇선택</span> <span>최신등록순/인기순</span>
      <div>
        {dummy.sample.map(val => (
          <li key={val.product_id}>
            {process.env.PUBLIC_URL + val.image}
          </li>
        ))}            
      </div> */}

      
      <TextSelect>
        <span>인기상품 몇몇 선택</span>
        <span>최신등록순/인기순</span>
      </TextSelect>
      
      <ItemContainer>        
        <ItemContents>
          <ItemsImage src={img_dummy1} />
            <TextTitle>쏘아베 치실토이 곰</TextTitle>
            <TextPrice>3,200원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy2} />
            <TextTitle>푸르미 이동장 FC2000 브라운</TextTitle>
            <TextPrice>22,000원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy3} />
            <TextTitle>하울팟 하네스&리쉬세트</TextTitle>
            <TextPrice>52,000원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy4} />
            <TextTitle>제프리공방 원목식탁 2구</TextTitle>
            <TextPrice>48,000원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy5} />
            <TextTitle>고록로 테이프 클리너 9개입</TextTitle>
            <TextPrice>19,200원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <button>
            <Link to= '/ProductInfo6'>
              <ItemsImage src={img_dummy6} />
              <TextTitle>푸르미 매직울타리 소형 아이보리</TextTitle>
              <TextPrice>19,200원</TextPrice>   
            </Link>
          </button>     
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy7} />
            <TextTitle>구루머스 치킨 우유껌 7개입</TextTitle>
            <TextPrice>19,200원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy8} />
            <TextTitle>네츄럴코어 하루유산균 12개입</TextTitle>
            <TextPrice>4,000원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy5} />
            <TextTitle>고록로 테이프 클리너 9개입</TextTitle>
            <TextPrice>19,200원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy6} />
            <TextTitle>푸르미 매직울타리 소형 아이보리</TextTitle>
            <TextPrice>19,200원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy7} />
            <TextTitle>구루머스 치킨 우유껌 7개입</TextTitle>
            <TextPrice>19,200원</TextPrice>        
        </ItemContents>

        <ItemContents>
          <ItemsImage src={img_dummy8} />
            <TextTitle>네츄럴코어 하루유산균 12개입</TextTitle>
            <TextPrice>4,000원</TextPrice>        
        </ItemContents>
      </ItemContainer>
      
    </div>
  );
};

export default Product;