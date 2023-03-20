import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
function SellingItemList() {
  const SellingItemExData = [
    {
      productId: "productId",
      sellerId: "sellerId",
      name: "name",
      image: "imageimage",
      price: "price",
      stock: "stock",
      content: "content",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
    },
    {
      productId: "productId",
      sellerId: "sellerId",
      name: "name",
      image: "imageimage",
      price: "price",
      stock: "stock",
      content: "content",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
    },
    {
      productId: "productId",
      sellerId: "sellerId",
      name: "name",
      image: "imageimage",
      price: "price",
      stock: "stock",
      content: "content",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
    },
    {
      productId: "productId",
      sellerId: "sellerId",
      name: "name",
      image: "imageimage",
      price: "price",
      stock: "stock",
      content: "content",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
    },
    {
      productId: "productId",
      sellerId: "sellerId",
      name: "name",
      image: "imageimage",
      price: "price",
      stock: "stock",
      content: "content",
      createdAt: "createdAt",
      modifiedAt: "modifiedAt",
    },
  ];

  //상품 삭제 요청 함수
  const deleteItem = (id) => {
    // e.preventDefault();
    alert("정말 상품을 삭제 하시겠습니까?");
    return axios
      .delete(`http://localhost:8080/orders/${id}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("상품삭제요청 에러");
        console.log(id);
      });
  };

  return (
    <SellingItemBody>
      <div className="page_top">
        <div className="bold">판매 상품 목록 </div>
        <div className="new_item">
          {/* <button > */}
          <Link to="/newitemform" className="link">
            신상품 등록
          </Link>
          {/* </button> */}
        </div>
      </div>

      {SellingItemExData.map((el) => (
        <div className="item">
          <div className="photo">
            {" "}
            <div>{el.image}</div>{" "}
          </div>
          <div className="item-left">
            <div>상품 번호: {el.productId}</div>
            <div className="important">
              상품 이름: {el.name} {el.name}
            </div>
            <div>가격: {el.price}</div>
            <div className="important">재고: {el.stock}</div>
            {/* <div className="content">{el.content}</div> */}
          </div>
          <div className="item-right">
            <div> 게시일:{el.createdAt}</div>
            <div> 수정일:{el.modifiedAt}</div>
            <br />
            <br />

            <button className="cancle button" style={{ float: "right" }} onClick={() => deleteItem(el.productId)}>
              상품 삭제
            </button>
          </div>
        </div>
      ))}
    </SellingItemBody>
  );
}
export default SellingItemList;

const SellingItemBody = styled.div`
  display: flex;
  flex-direction: column;
  .page_top {
    display: flex;
    justify-content: space-between;
  }
  .link {
    text-decoration-line: none;
    color: black;
  }

  .new_item {
    font-weight: 600;
    background-color: #c5d8fb;
    padding: 5px 10px;
    width: 100px;
    border-radius: 3px;
    border: 2px solid #4787ff;
    cursor: pointer;
    /* margin: 15px 0; */
    float: right;
    text-align: center;
  }
  .photo {
    height: 100px;
    width: 100px;
    background-color: #f9a9a9;
    margin-right: 5px;
  }
  .item {
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    background-color: #fef4f4;
    padding: 13px;
    justify-content: space-between;
    .important {
      font-weight: bold;
      margin: 3px 0px;
      > span {
        margin-right: 20px;
      }
    }
    .link {
      text-decoration-line: none;
      color: black;
    }

    .button {
      background-color: #ebc8c8;
      padding: 3px 10px;
      width: 100px;
      border-radius: 3px;
      border: 1.5px solid black;
      cursor: pointer;
      margin-top: 10px;
    }

    .cancle {
      background-color: #f9a9a9;
      font-size: small;
      padding: 0;
      width: 60px;
    }
    .item-left {
      width: 55%;
    }
    .item-right {
      width: 40%;
    }
  }
`;
