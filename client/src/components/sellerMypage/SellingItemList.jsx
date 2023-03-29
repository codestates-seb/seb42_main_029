import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Modal from "../modal";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
function SellingItemList() {
  const SellingItemExData = [
    {
      productId: "1productId",
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
      productId: "2productId",
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
      productId: "3productId",
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
      productId: "4productId",
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
      productId: "5productId",
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
  const navigate = useNavigate();
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  //! 모달
  const [modalIndex, setModalIndex] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const [imagetest, setImageTest] = useState();
  const imageaxios = () => {
    return axios
      .get(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/thumbnails/13`, noBodyOptions)
      .then((res) => {
        console.log(`이미지 테스트 `);
        console.log(res.data);
        setImageTest(res.data);
      })
      .catch((err) => {
        console.log("상품삭제요청 에러");
      });
  };

  useEffect(() => {
    imageaxios();
  }, []);

  //! 판매상품 get 함수 필요
  const noBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  //!상품 삭제 요청 함수 필요 ->/products/1 +토큰
  const deleteItem = (id) => {
    // e.preventDefault();
    return axios
      .delete(`http://ec2-43-200-2-180.ap-northeast-2.compute.amazonaws.com:8080/products/${id}`, noBodyOptions)
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
      <div></div>
      {SellingItemExData.map((el, index) => (
        <div className="item" key={index}>
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

            {/* <button className="cancle button" style={{ float: "right" }} onClick={() => deleteItem(el.productId)}>
              상품 삭제
            </button> */}
            <button
              className="cancle button"
              style={{ float: "right" }}
              onClick={() => {
                setModalIndex(index);
                showModal();
              }}
            >
              상품 삭제
            </button>
            {/* {modalOpen && <Modal setModalOpen={setModalOpen} axiosfunction={deleteItem} data={el.productId} keyword="상품삭제" />} */}
            {modalOpen && (
              <Modal
                setModalOpen={setModalOpen}
                axiosfunction={deleteItem}
                data={SellingItemExData}
                // index={SellingItemExData[modalIndex]?.index} //! 오류나서 개선함
                index={SellingItemExData.findIndex((element, index) => index === modalIndex)}
                objectKey="productId"
                keyword="상품삭제"
              />
            )}
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
    @media screen and (max-width: 768px) {
      width: 70px;
      height: 70px;
      margin-bottom: 5px;
    }
  }
  .item {
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
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
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .item-right {
      width: 40%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
