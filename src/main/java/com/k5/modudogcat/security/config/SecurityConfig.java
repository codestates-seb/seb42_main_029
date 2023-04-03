package com.k5.modudogcat.security.config;

import com.k5.modudogcat.security.filter.JwtAuthenticationFilter;
import com.k5.modudogcat.security.filter.JwtVerificationFilter;
import com.k5.modudogcat.security.handler.*;
import com.k5.modudogcat.security.jwt.JwtTokenizer;
import com.k5.modudogcat.security.util.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtils;
//    @Bean
//    public WebSecurityCustomizer webSecurityCustomizer(){
//        return (web) -> web.ignoring()
//                .antMatchers(HttpMethod.POST, "/users/sign-up")
//                .antMatchers(HttpMethod.GET, "/login");
//    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http
                .authorizeRequests(authorize -> authorize
                        //Todo: 인증, 인가가 필요한 요청들 넣어두기
                        .antMatchers(HttpMethod.PATCH,"/users/**").hasRole("BUYER")
                        .antMatchers(HttpMethod.GET,"/users/**").hasRole("BUYER")
                        .antMatchers(HttpMethod.DELETE,"/users/**").hasRole("BUYER")
                        .antMatchers(HttpMethod.GET,"/users").hasRole("ADMIN")
                        .antMatchers("/orders/**").hasRole("BUYER")
                        .antMatchers("/admin/**").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH,"/sellers/**").hasRole("SELLER")
                        .antMatchers(HttpMethod.GET,"/sellers/**").hasRole("SELLER")
                        .antMatchers("/carts/**").hasRole("BUYER")
                        .anyRequest().permitAll()
                )
                .httpBasic()
                    .disable()
                .formLogin()
                    .disable()

                .cors(httpSecurityCorsConfigurer -> corsConfigurationSource())

                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .csrf()
                    .disable()

                //CORS 요청시, 수정 필요할 수도 있음
                .headers()
                    .frameOptions().disable()

                .and()
                .apply(new CustomFilterConfigurer())

                .and()
                .exceptionHandling()
                    .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                    .accessDeniedHandler(new UserAccessDeniedHandler())

                .and()
                .logout()
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/")
                    .logoutSuccessHandler(new CustomLogoutHandler());
//        http
//                .oauth2Login().successHandler(new OAuth2SuccessHandler(userService));

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST","OPTIONS","PATCH","DELETE","PUT"));
        configuration.setExposedHeaders(Arrays.asList("Authorization", "Location", "Refresh","Access-Control-Allow-Origin"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, customAuthorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
