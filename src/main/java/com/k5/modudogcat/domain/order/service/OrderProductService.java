package com.k5.modudogcat.domain.order.service;

import com.k5.modudogcat.domain.order.dto.OrderProductDto;
import com.k5.modudogcat.domain.order.entity.OrderProduct;
import com.k5.modudogcat.domain.order.repository.OrderProductRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderProductService {
    private final OrderProductRepository orderProductRepository;

    public Page<OrderProduct> findOrdersBySellerId(Pageable pageable, Long sellerId) {
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort().descending());
        //해당 orderproduct(단일상품 주문) 가져오기
        Page<OrderProduct> orderProducts = orderProductRepository.findByProductSellerSellerId(sellerId, of);

        return orderProducts;
    }

    //주문 찾기 //Todo findOrder vs findOrderStatus verifiedOrderStatus 위치 다시 확인해보기
    public OrderProduct findByOrderProductId(Long orderProductId) {
        OrderProduct orderProduct = orderProductRepository.findById(orderProductId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));
        return orderProduct;
    }

    public OrderProduct patchOrderStatusOrParcelNumber(Long sellerId, OrderProduct orderProduct, OrderProductDto.patch patch) {
        //주문의 판매자 id, 로그인한 판매자 id 검증
        if(orderProduct.getProduct().getSeller().getSellerId() != sellerId) {
            throw new BusinessLogicException(ExceptionCode.SELLER_NOT_ALLOWED);}
        //결제 상태 검증(앞뒤 단계)
        verifiedOrderStatus(orderProduct, patch.getOrderProductStatus());
        //운송장 번호 추가 및 수정
        postParcelNumber(orderProduct, patch.getParcelNumber());
        //디비에 추가
        orderProduct.setOrderProductStatus(patch.getOrderProductStatus());
        return orderProductRepository.save(orderProduct);
    }

    private void postParcelNumber(OrderProduct orderProduct, String parcelNumber) {
        Optional.ofNullable(parcelNumber)
                .ifPresent(newParcel -> orderProduct.setParcelNumber(parcelNumber));

    }

    //결제 상태 변경 시 검증 //Todo 앞으로 2단계도 못뛰게 검증 변경 != 형태
    private void verifiedOrderStatus(OrderProduct orderProduct, OrderProduct.OrderProductStatus orderProductStatus) {
        String verifiedOrderStatus = orderProduct.getOrderProductStatus().getStatus();
        if (verifiedOrderStatus.equals("결제대기")) {
            if (!orderProductStatus.getStatus().equals("결제완료") || !orderProductStatus.getStatus().equals("결제대기")) {
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}

        } else if (Objects.equals(verifiedOrderStatus, "결제완료")){
            if(!orderProductStatus.getStatus().equals("배송 준비 중")|| !orderProductStatus.getStatus().equals("결제완료")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}

        } else if (verifiedOrderStatus.equals("배송 준비 중")){
            if(!orderProductStatus.getStatus().equals("배송 중") || !orderProductStatus.getStatus().equals("배송 준비 중")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}

        } else if (verifiedOrderStatus.equals("배송 중")){
            if(!orderProductStatus.getStatus().equals("배송 완료") || !orderProductStatus.getStatus().equals("배송 중")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}

        } else if (verifiedOrderStatus.equals("배송 완료")){
            if(orderProductStatus.getStatus().equals("결제대기") || orderProductStatus.getStatus().equals("결제완료")
                    || orderProductStatus.getStatus().equals("배송 준비 중") || orderProductStatus.getStatus().equals("배송 중")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}
        }
    }
}
