package com.k5.modudogcat.domain.order.repository;

import com.k5.modudogcat.domain.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {

}
