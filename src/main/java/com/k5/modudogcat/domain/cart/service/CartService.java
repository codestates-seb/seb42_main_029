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
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;
    private final CartProductRepository cartProductRepository;
    private final ProductService productService;

    public CartProduct addToCart(Long cartId, Long productId){
        // 이미 장바구니에 담겼는지 확인
        verifiedCartProduct(cartId, productId);
        
        CartProduct cartProduct = new CartProduct();
        Cart findCart = findVerifiedCartByCartId(cartId);
        Product findProduct = productService.findProduct(productId);
        cartProduct.setProduct(findProduct);
        cartProduct.addCart(findCart);

        return cartProductRepository.save(cartProduct);
    }

    public Cart findVerifiedCartByUserId(Long userId){
        Cart findCart = cartRepository.findByUserUserId(userId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.USER_NO_CART);
                });
        return findCart;
    }

    public Cart findVerifiedCartByCartId(Long cartId){
        Cart findCart = cartRepository.findById(cartId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.WRONG_PRODUCT_OR_CART);
                });
        return findCart;
    }

    public Page<CartProduct> findCartProducts(Pageable pageable, Long cartId){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort().descending());
        List<CartProduct> findCartProducts = cartProductRepository.findAllByCartCartId(cartId);

        return new PageImpl<>(findCartProducts, of, findCartProducts.size());
    }
    @Transactional
    public void plusCount(Long productId, Long cartId){
        CartProduct findCartProduct = findVerfiedCartProduct(productId, cartId);
        if(findCartProduct.getProductCount().equals(findCartProduct.getProduct().getStock())){
            throw new RuntimeException("더 이상 증가시킬 수 없습니다.");
        }else{
            findCartProduct.setProductCount(findCartProduct.getProductCount() + 1);
        }
        cartProductRepository.save(findCartProduct);
    }

    public void minusCount(Long productId, Long cartId){
        CartProduct findCartProduct = findVerfiedCartProduct(productId, cartId);
        if(findCartProduct.getProductCount() == 0){
            throw new RuntimeException("더 이상 감소시킬 수 없습니다.");
        }else{
            findCartProduct.setProductCount(findCartProduct.getProductCount() - 1);
        }
        cartProductRepository.save(findCartProduct);
    }
    @Transactional
    public void removeCartProduct(Long productId, Long cartId){
        cartProductRepository.deleteByProductProductIdAndCartCartId(productId, cartId);
    }

    public CartProduct findVerfiedCartProduct(Long productId, Long cartId){
        CartProduct findCartProduct = cartProductRepository.findByProductProductIdAndCartCartId(productId, cartId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.WRONG_PRODUCT_OR_CART);
                });
        return findCartProduct;
    }

    private void verifiedCartProduct(Long cartId, Long productId){
        Optional<CartProduct> optionalCartProduct = cartProductRepository.findByProductProductIdAndCartCartId(cartId, productId);
        optionalCartProduct.ifPresent(cartProduct -> {
                    throw new BusinessLogicException(ExceptionCode.CART_ALREADY_EXISTS);
                });
    }

    public void removeCartProductsByCartId(Long userId){
        Long cartId = findVerifiedCartByUserId(userId).getCartId();
        cartProductRepository.deleteAllByCartCartId(cartId);
    }
}
