package com.k5.modudogcat.domain.cart.mapper;

import com.k5.modudogcat.domain.cart.dto.CartDto;
import com.k5.modudogcat.domain.cart.dto.CartProductDto;
import com.k5.modudogcat.domain.cart.entity.CartProduct;
import com.k5.modudogcat.domain.product.dto.ProductDto;
import com.k5.modudogcat.domain.product.mapper.ProductMapper;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;


@Mapper(componentModel = "spring")
public interface CartMapper {
    default CartDto.Response cartProductsToResponse(List<CartProduct> cartProductList, Long cartId, String domain){
        CartDto.Response response = new CartDto.Response();

        List<CartProductDto.Response> cartProductDtoList = cartProductList.stream()
                .map(cartProduct -> {
                    CartProductDto.Response cpResponse = new CartProductDto.Response();
                    ProductDto.Response productResponse = ProductMapper.productToResponse(cartProduct.getProduct(), domain);
                    Integer productsCount = cartProduct.getProductCount();

                    cpResponse.setProductResponse(productResponse);
                    cpResponse.setProductCount(productsCount);

                    return cpResponse;
                }).collect(Collectors.toList());


        response.setCartProductDtoList(cartProductDtoList);
        response.setCartId(cartId);

        return response;
    }
}
