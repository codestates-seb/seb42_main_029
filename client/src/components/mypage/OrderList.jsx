import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Paging from "../pagination/pagination";
import axios from "axios";
import Modal from "../modal";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
function OrderList() {
  const OrderExData = [
    {
      orderId: 1,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 2,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
      ],
    },
    {
      orderId: 3,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
        {
          productId: "3productId",
          sellerId: "3sellerId",
          name: "3ame",
          image: "3imageimage",
          price: "3price",
          stock: "3stock",
          content: "3content",
          createdAt: "3createdAt",
          modifiedAt: "3modifiedAt",
        },
      ],
    },
    {
      orderId: 4,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",
      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 5,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
      ],
    },
    {
      orderId: 6,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 7,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
      ],
    },
    {
      orderId: 8,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
      ],
    },
    {
      orderId: 9,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
      ],
    },
    {
      orderId: 10,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 11,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    {
      orderId: 12,
      receiver: "뉴진스하니",
      phone: "010-1111-7777",
      receivingAddress: "수정된 서울특별시 강남구 주소주소",
      orderStatus: "결제대기",
      payMethod: "무통장",
      createdAt: "2023-03-27T16:02:36.625268",
      modifiedAt: "2023-03-27T16:02:48.4291336",
      pardelNumber: "123412341234",

      productResponse: [
        {
          productId: "1productId",
          sellerId: "sellerId",
          name: "2name",
          image: "imageimage",
          price: "1price",
          stock: "1stock",
          content: "1content",
          createdAt: "1createdAt",
          modifiedAt: "1modifiedAt",
        },
        {
          productId: "2productId",
          sellerId: "sellerId",
          name: "2name",
          image: "2imageimage",
          price: "2price",
          stock: "2stock",
          content: "2content",
          createdAt: "2createdAt",
          modifiedAt: "2modifiedAt",
        },
      ],
    },
    // {
    //   orderId: "orderId",
    //   userId: "userId",
    //   sellerId: "sellerId",
    //   count: 10,
    //   createdAt: "createdAt",
    //   status: "status",
    //   pay_by: "pay_by",
    //   receiver: "receiver",
    //   phone: "phone",
    //   address: "address",
    //   pardelNumber: "pardelNumber",
    //   name: "name",
    //   price: 15000,
    // },
  ];
  const navigate = useNavigate();
  const state = useSelector((state) => state); // 전역 state에 접근하는 hook
  const dispatch = useDispatch(); // dispatch 쉽게하는 hook
  //! 모달
  const [modalIndex, setModalIndex] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  //!pagination
  const [page, setPage] = useState(1);

  //! 주문목록 get                             테스트 완료
  const [orderData, setOrderData] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  // console.log(cookies.accessToken);

  const noBodyOptions = {
    headers: {
      Authorization: cookies.accessToken,
    },
    withCredentials: true,
  };

  function OrdersAxios() {
    return axios
      .get(`${process.env.REACT_APP_AWS_EC2}/orders`, noBodyOptions)
      .then((res) => {
        console.log(`orderdata get success res.data:`);
        console.log(res.data.data);
        setOrderData(res.data.data);
      })
      .catch((err) => {
        console.log("orderdata GET error");
      });
  }

  useEffect(() => {
    OrdersAxios();
  }, [page]);

  //! 개별주문 delete                            테스트 완료
  const deleteOrder = (orderId) => {
    // e.preventDefault();
    return axios
      .delete(`${process.env.REACT_APP_AWS_EC2}/orders/${orderId}`, noBodyOptions)
      .then((res) => {
        console.log(`res.data:`);
        console.log(res.data);
        alert("주문삭제가 완료되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.log("주문삭제 에러");
        console.log(orderId);
      });
  };

  //! 개별 상품 후기작성 link -> prop으로 상품id 넘겨서

  return (
    <OrderBody>
      <div className="bold">주문 목록 </div>
      {Array.isArray(OrderExData) &&
        OrderExData.map((el, index) => (
          <div className="order" key={index}>
            <div className="order-left">
              <div className="important">주문 번호: {el.orderId}</div>
              {/* <div className="important">상품 이름: {el.name}</div> */}
              {/* <div className="important">
              <span>{`가격 :${el.price} 원 ,`}</span> <span>{`수량 :${el.count}`}</span>
            </div> */}
              {el.productResponse.map((el, index) => (
                <div key={index}>
                  <div className="important">
                    상품 이름: {el.name}
                    <span>
                      <button className="button small-review">
                        <Link to={`/reviewform/${el.productId}`} className="link" proptest="test">
                          후기 작성
                        </Link>
                      </button>{" "}
                    </span>
                  </div>
                  <div className="important">
                    <span>{`가격 :${el.price} 원 ,`}</span> <span>{`수량 :${el.count}`}</span>{" "}
                  </div>
                </div>
              ))}

              <div>주소 :{el.receivingAddress}</div>
              <div>받는 사람 : {el.receiver}</div>
              <div>연락처 : {el.phone}</div>
            </div>
            <div className="order-right">
              <div>
                <button
                  className="button cancle"
                  style={{ float: "right" }}
                  onClick={() => {
                    setModalIndex(index);
                    showModal();
                  }}
                >
                  주문 취소
                </button>
                {modalOpen && (
                  <Modal
                    setModalOpen={setModalOpen}
                    axiosfunction={deleteOrder}
                    data={OrderExData}
                    index={OrderExData.findIndex((element, index) => index === modalIndex)}
                    objectKey="orderId"
                    keyword="주문취소"
                  />
                )}
              </div>
              <br />
              <br />

              <div>주문일:{el.createdAt.split(".")[0]}</div>
              <div>상태변경일:{el.modifiedAt.split(".")[0]}</div>
              {/* <div className="important">
              합계 금액: {el.price * el.count} {" 원"}
            </div> */}
              <div>운송장 번호 : {el.pardelNumber}</div>
              <div>상태 : {el.orderStatus}</div>

              {/* <button className="button" style={{ float: "right" }}>
              <Link className="link">후기 작성</Link>
            </button> */}
            </div>
          </div>
        ))}

      <Paging page={page} setPage={setPage} />
    </OrderBody>
  );
}
export default OrderList;

const OrderBody = styled.div`
  display: flex;
  flex-direction: column;
  /* .bold {
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 10px;
  } */
  .order {
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
      padding: 3px 15px;
      width: 100px;
      border-radius: 3px;
      border: 1.5px solid black;
      cursor: pointer;
    }
    .small-review {
      padding: 1px 2px;
      width: 80px;
      margin-left: 3rem;
    }
    .cancle {
      background-color: #f9a9a9;
      font-size: small;
      padding: 0;
      width: 60px;
    }
    .order-left {
      width: 65%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .order-right {
      width: 33%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
