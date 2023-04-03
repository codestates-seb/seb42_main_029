import { useState, useEffect, React } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import FormatDate from '../../components/FormatDate';
const ReviewData = () => {
  const [data, setData] = useState([]);
  const productId = useParams().productId;

  const url = `${process.env.REACT_APP_AWS_EC2}/reviews/productReviews/${productId}?page=1&size=12`;
  
  function isAdmin() {
    const token = localStorage.getItem('adminToken');
    return token ? true : false;
  }

  // 리뷰 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await 
        axios
          .get(url)
          .then((response) => {
            console.log(response)
            console.log(response.data)
            setData(response.data);
          })
        } 
      catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // 별점만큼 하트 찍는 함수
  function stars(num) {
    let star = "";
    for (let i = 0; i < num; i++) {
      star += "💛";
    }
    return star;
  }

  // const deleteItem = (id) => {
  //   // e.preventDefault();
  //   return axios
  //     .delete(`${process.env.REACT_APP_AWS_EC2}/products/${id}`, noBodyOptions)
  //     .then((res) => {
  //       console.log(`res.data:`);
  //       console.log(res.data);
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log("상품삭제요청 에러");
  //       console.log(id);
  //     });
  // };

  return (
    <ReviewTextstyle>
      {/* 토큰, post안에 내용을 form데이터 형식으로 application.json */}
      
      {/* data */}
      {data.map((item, key)=>(
          <div className="review" key={item.reviewId}>
            {/* <div>{item.productid}</div> */}
            <img src={item.imagesUrls[0]} className="profile"/>
            <div>
              {/* <div className="writer">{item.writer}</div> */}
              {/* <div className="date">{item.createdAt}</div> */}
              <div className="date"><FormatDate props={item.createdAt} /></div>
            </div>
            <div className="star">{stars(item.score)}</div>
            <div>{item.title}</div>            
            <div>{item.content}</div>
            
            {/* 관리자, 판매자만 리뷰삭제 버튼UI가 나타남 */}
            {/* <div>
              {state.user.role === "ADMIN" ? (
              <BtnStyle onClick={() => deleteItem(productId)}>상품삭제</BtnStyle>
              ) : state.user.role === "SELLER" ? (
              <BtnStyle onClick={() => deleteItem(productId)}>상품삭제</BtnStyle>
              ) : null}
            </div> */}
          </div>
          
      ))}
    </ReviewTextstyle>
  );
};
const ReviewTextstyle = styled.div`
  display:flex;
  flex-direction:column;
  .review{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top: 5px;
    border-radius: 20px;
    background-color: ${(props)=> props.color || "#dcecec"}; 
    height: 200px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .profile{
    width:160px;
    height:160px;
    border: 1px solid black;
    .writer{
      width: 60px;
    }
    .date{
      width: 60px;
    }
  }
  .star{
    width:75px;
  }
`;

const BtnStyle = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;  
  width:20px;
  height:20px;
  background-color: red;
  color:white;
`;

export default ReviewData;