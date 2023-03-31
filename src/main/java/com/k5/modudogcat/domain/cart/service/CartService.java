package com.k5.modudogcat.domain.cart.service;

import com.k5.modudogcat.domain.cart.entity.Cart;
import com.k5.modudogcat.domain.cart.entity.CartProduct;
import com.k5.modudogcat.domain.cart.repository.CartProductRepository;
import com.k5.modudogcat.domain.cart.repository.CartRepository;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.service.ProductService;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;
    private final CartProductRepository cartProductRepository;
    private final ProductService productService;

    public CartProduct addToCart(Long userId, Long productId){
        CartProduct cartProduct = new CartProduct();
        Cart findCart = findVerifedCart(userId);
        Product findProduct = productService.findProduct(productId);
        cartProduct.setProduct(findProduct);
        cartProduct.addCart(findCart);

        return cartProductRepository.save(cartProduct);
    }

    public Cart findVerifedCart(Long userId){
        Cart findCart = cartRepository.findByUserUserId(userId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.USER_NO_CART);
                });
        return findCart;
    }

    public Page<CartProduct> findCartProducts(Pageable pageable, Long cartId){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());
        List<CartProduct> findCartProducts = cartProductRepository.findAllByCartCartId(cartId);

        return new PageImpl<>(findCartProducts, of, findCartProducts.size());
    }
    @Transactional
    public void plusCount(Long productId, Long cartId){
        CartProduct findCartProduct = cartProductRepository.findByProductProductIdAndCartCartId(productId, cartId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.WRONG_PRODUCT_OR_CART);
                });
        if(findCartProduct.getProducts_count() == findCartProduct.getProduct().getStock()){
            throw new RuntimeException("더이상 증가시킬 수 없습니다.");
        }else{
            findCartProduct.setProducts_count(findCartProduct.getProducts_count() + 1);
        }
        cartProductRepository.save(findCartProduct);
    }

    public void minusCount(Long productId, Long cartId){
        CartProduct findCartProduct = cartProductRepository.findByProductProductIdAndCartCartId(productId, cartId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.WRONG_PRODUCT_OR_CART);
                });

        if(findCartProduct.getProducts_count() == 0){
            throw new RuntimeException("더이상 감소시킬 수 없습니다.");
        }else{
            findCartProduct.setProducts_count(findCartProduct.getProducts_count() - 1);
        }
        cartProductRepository.save(findCartProduct);
    }

}
