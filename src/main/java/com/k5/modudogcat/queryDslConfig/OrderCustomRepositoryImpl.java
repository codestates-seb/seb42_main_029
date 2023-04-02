//package com.k5.modudogcat.domain.order.repository;
//
//import com.k5.modudogcat.domain.order.dto.OrderDto;
////import com.k5.modudogcat.domain.order.entity.QOrderProduct;
////import com.k5.modudogcat.domain.product.entity.QProduct;
////import com.k5.modudogcat.domain.seller.entity.QSeller;
//import com.k5.modudogcat.domain.order.entity.QOrderProduct;
//import com.k5.modudogcat.domain.product.entity.QProduct;
//import com.k5.modudogcat.domain.seller.entity.QSeller;
//import com.querydsl.jpa.impl.JPAQueryFactory;
//import lombok.RequiredArgsConstructor;
//
//import java.util.List;
//
//import static com.querydsl.core.types.Projections.bean;
//
//@RequiredArgsConstructor
//public class OrderCustomRepositoryImpl implements OrderCustomRepository {
//
//    private final JPAQueryFactory jpaQueryFactory;
//
//    public List<OrderDto.SellerResponse> findBySellerId(Long sellerId) {
//        //order_product
//        //product
//        //seller
//
//        QProduct product = QProduct.product;
//        QOrderProduct orderProduct = QOrderProduct.orderProduct;
//        QSeller seller = QSeller.seller;
//
//        List<OrderDto.SellerResponse> sellerOrder = jpaQueryFactory
//                .select(bean(OrderDto.SellerResponse.class,
//                        orderId,
//                        product.productId.as("productId"),
//                        productList,
//                        receiver,
//                        phone,
//                        receivindAddress,
//                        orderProduct.orderStatus.as,
//                        parcelNumber,
//                        createdAt,
//                        userLoginId,
//                        productsCount))
//        private Long orderId;
//                //private Long userId;
//                //private Long productId;
//                private List<OrderProductDto.Response> productList;
//                private String receiver;
//                private String phone;
//                private String receivingAddress;
//                private String orderStatus;
//                private String parcelNumber;
//                private String createdAt;
//                private String userLoginId;
//                private Long productsCount;
//
//   // }
////    public List<AmenityResponseDto> findByStateRegion(String state, String region) {
////
////        String keyword = state + " " + region;
////
////        QAmenity amenity = QAmenity.amenity;
////        QBulletinPost bulletinPost = QBulletinPost.bulletinPost;
////
////        //BulletinPost와 join하여 데이터가 많은 수로 카운트 해 상위 몇개만 전달할지, 전체적으로 전달할지 고민
////        //연관관계 미적용이라 쿼리 이후에 반영. 현재는 키워드 포함한 모든 데이터를 반환함 (2023.03.10 강지은)
////        List<AmenityResponseDto> amenities  = queryFactory
////                .select(bean(AmenityResponseDto.class,
////                        amenity.amenityId.as("amenityId"),
////                        amenity.addressId.as("addressId"),
////                        amenity.address.as("address"),
////                        amenity.amenityName.as("amenityName"),
////                        amenity.longitude.as("longitude"),
////                        amenity.latitude.as("latitude"),
////                        bulletinPost.amenity.amenityId.as("amenityId"),
////                        bulletinPost.bulletinPostId.count().as("bulletinPostCount")))
////                .from(amenity)
////                .join(amenity.bulletinPostList, bulletinPost)
////                .where(amenity.address.like("%" + keyword + "%"))
////                .groupBy(bulletinPost.amenity.amenityId)
////                .orderBy(bulletinPost.bulletinPostId.count().desc())
////                .fetch();
////
////        return amenities;
//    }
//
//}
