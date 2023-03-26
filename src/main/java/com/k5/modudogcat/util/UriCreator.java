package com.k5.modudogcat.util;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public class UriCreator {
    public static URI createUri(String defaultUrl, Long resourceId) {
        return UriComponentsBuilder
                .newInstance()
                .path(String.format("%s/%d", defaultUrl, resourceId))
                .build()
                .toUri();
    }
}
