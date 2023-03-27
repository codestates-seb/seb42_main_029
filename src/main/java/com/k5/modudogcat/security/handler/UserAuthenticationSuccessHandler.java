package com.k5.modudogcat.security.handler;

import com.google.gson.Gson;
import com.k5.modudogcat.domain.user.util.UserRoles;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        log.info("# Authenticated successfully!");

        sendAuthorization(response, authentication);
    }
    private void sendAuthorization(HttpServletResponse response, Authentication authentication) throws IOException {
        Gson gson = new Gson();
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        List<UserRoles> authorityList = authentication.getAuthorities()
                .stream()
                .map(grantedAuthority -> UserRoles.ofValue(grantedAuthority.getAuthority()))
                .sorted()
                .collect(Collectors.toList());

        response.getWriter()
                .write("{ \"ROLE\" : \"" + authorityList.get(0).name().replace("ROLE_","") + "\" }");


//        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }
}
