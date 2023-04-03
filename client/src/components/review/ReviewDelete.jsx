import React from 'react';
import styled from 'styled-components';

const deleteItem = (id) => {
  // e.preventDefault();
  return axios
    .delete(`${process.env.REACT_APP_AWS_EC2}/reviews/userReviews/${id}`, noBodyOptions)
    .then((res) => {
      console.log(`res.data:`);
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log("상품삭제요청 에러");
      console.log(id);
    });
};
const ReviewDelete = () => {
  return (
    <div>
      {/* 1안 */}
      {state.user.role === "ADMIN" ? (
      <BtnStyle onClick={() => deleteItem(productId)}>상품삭제</BtnStyle>
      ) : state.user.role === "SELLER" ? (
      <BtnStyle onClick={() => deleteItem(productId)}>상품삭제</BtnStyle>
      ) : null}

      {/* 2안 */}
      {state.user.role === "ADMIN" || "SELLER" (
      <BtnStyle onClick={() => deleteItem(productId)}>상품삭제</BtnStyle>
      ) }
    </div>
  );
};

export default ReviewDelete;

const BtnStyle = styled.button`
display:flex;
  align-items:center;
  justify-content:center;  
  width:20px;
  height:20px;
  background-color: red;
  color:white;
`;