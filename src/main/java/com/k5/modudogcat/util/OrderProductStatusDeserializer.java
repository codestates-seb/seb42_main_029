package com.k5.modudogcat.util;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.k5.modudogcat.domain.order.entity.OrderProduct;

import java.io.IOException;

public class OrderProductStatusDeserializer extends JsonDeserializer<OrderProduct.OrderProductStatus> {

    @Override
    public OrderProduct.OrderProductStatus deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JacksonException {
        String orderProductStatus = p.getValueAsString();
        return OrderProduct.OrderProductStatus.valueOf(orderProductStatus);
    }
}
