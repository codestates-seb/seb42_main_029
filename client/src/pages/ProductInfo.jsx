import React from 'react';
import styled from 'styled-components';
import img6 from '../assets/productImage/img_dummy6.png';
import background_img from '../assets/productImage/img_dummy1_more.jpeg'
import dummy from '../assets/dummy/dummy.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action'

const ProductInfo = () => {
  // const product6_name = dummy.sample.map(val => (val.name))
  const product6_img = dummy.sample[5].image;
  const product6_name = dummy.sample[5].name;
  const product6_price = dummy.sample[5].price;
  const product6_proid = dummy.sample[5].product_id;


  //Redux 장바구니에 추가하기
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
    // dispatch('ADD_TO_CART'(item))
  }

  return (  
    <Container>
      {/* 상단 상품이미지, 상품명, 가격, 배송비 */}
      <ContainerTop>
        <ItemsImage src={img6} />
        <TextArea>
          <TextContainer><b>상품명</b> <TextPosition>{product6_name}</TextPosition></TextContainer>
          <TextContainer><b>가격</b> <TextPosition><TextOrange>{product6_price}</TextOrange></TextPosition></TextContainer>
          <TextContainer><b>배송비</b> <TextPosition>3,000원</TextPosition></TextContainer>                    
          <div>            
            <ButtonStyle>구매하기</ButtonStyle>
            <ButtonStyle onClick={() => handleAddToCart({ image: product6_img, name: product6_name, price:product6_price, id:product6_proid })}>
            
              장바구니에 담기
              </ButtonStyle>
          </div>
        </TextArea>                
      </ContainerTop>

      {/* 상단 버튼 구매하기, 장바구니에 담기  */}

      
      {/* 상품설명/사진 */}
      <Information>
      <InformationText>상품설명</InformationText>
        <img src={background_img} />
      </Information>
      
      {/* QnA */}
      <CommonContainer>  
        <CommonTitle>
          <Category>QnA</Category>
          <QnaQuestionbtn>QnA 작성하기</QnaQuestionbtn>          
        </CommonTitle>

        <Contents>
          <CommonNo>
            <QnaInfo>No</QnaInfo>
              내용
          </CommonNo>
          <CommonSubject>
            <QnaInfo>Subject</QnaInfo>
            내용
          </CommonSubject>
          <CommonWriter>
            <QnaInfo>Writer</QnaInfo>
            내용
          </CommonWriter>
          <CommonDate>
            <QnaInfo>Date</QnaInfo>
            내용
          </CommonDate>
        </Contents>        
      </CommonContainer>

      {/* 사용후기 */}
      <CommonContainer>
        <CommonTitle>
          <Category>사용후기</Category>
          
        </CommonTitle>

        <Contents>
          <CommonNo>
            <QnaInfo>No</QnaInfo>
              내용
          </CommonNo>
          <Star>
            <QnaInfo>Star</QnaInfo>
            내용
          </Star>
          <CommonCategory>
            <QnaInfo>Category</QnaInfo>
            내용
          </CommonCategory>
          <CommonSubject>
            <QnaInfo>Subject</QnaInfo>
            내용
          </CommonSubject>
          <CommonWriter>
            <QnaInfo>Writer</QnaInfo>
            내용
          </CommonWriter>
          <CommonDate>
            <QnaInfo>Date</QnaInfo>
            내용
          </CommonDate>
        </Contents>

      </CommonContainer>
    </Container>
  );
};

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width:100%;
`
const ContainerTop = styled.div`
  display:flex;
  align-items:center;
`
const ItemsImage = styled.img`  
  width: 580px;
  height: 543px;  
`
const TextArea = styled.div`
  font-size:32px;     
  margin-left: 100px;  
  display:flex;
  justify-content: center;  
  flex-direction:column;
`
const TextContainer = styled.div`
  margin-top:30px;  
`
const TextPosition = styled.span`
  margin-left:50px;
`
const TextOrange = styled.span`
  color: #FF5C00;
  margin-left:30px;
`

const ButtonStyle = styled.button`
  font-size:24px;
  width:190px;
  height:100px;  
  margin-left:50px;
  margin-top:60px; 
  border-radius: 10px;
  &:hover{
    font-size:26px;
   }
   &:active{
    background-color:gray;
   }
`

const Information = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const InformationText = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size:36px;
  font-weight:bold;
`
const CommonContainer = styled.div`
  display:flex;    
  flex-direction:column;
  margin-top:30px;
  background-color: #D9D9D9;
  width:100%;
  height:463px;
`
const CommonTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-left:20px;
  padding-right:20px;
  margin-bottom:20px;
  margin-top:20px;
`
const QnaInfo = styled.div`
  font-size:24px;  
  margin-top:-25px;
`
const QnaQuestionbtn = styled.button`
  width:248px;
  height:73px;
  border-radius:10px;
  background-color:#FBB3B3;
  font-size:24px;
  &:hover{
    font-size:26px;
   }
   &:active{
    background-color:gray;
   }
  margin-bottom:40px;
`
const Contents = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
`
const CommonNo = styled.div`
  height:100px;
  background-color:#FBD8D8;
  width:5%;
`
const CommonSubject = styled.div`
height:100px;
background-color:#FFC2C2;
width:50%;
`
const CommonWriter = styled.div`
height:100px;
background-color:#A48686;
width:10%;
`
const CommonDate = styled.div`
height:100px;
background-color:#DDA9A9;
width:10%;
`
const CommonCategory = styled.div`
height:100px;
background-color:#CDA9A9;
width:10%;
`
const Star = styled.div`
height:100px;
background-color:#DDA9A9;
width:10%;
`
const Category = styled.div`
  width:100px;
  height:70px;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:20px;
  background-color: gray;
  font-size:24px;  
`

export default ProductInfo;