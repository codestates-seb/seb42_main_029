package com.k5.modudogcat.security.config;

import com.k5.modudogcat.security.filter.JwtAuthenticationFilter;
import com.k5.modudogcat.security.handler.UserAuthenticationFailureHandler;
import com.k5.modudogcat.security.handler.UserAuthenticationSuccessHandler;
import com.k5.modudogcat.security.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer(){
        return (web) -> web.ignoring()
                .antMatchers(HttpMethod.POST, "/users");
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http
                .authorizeRequests(authorize -> authorize
                        //Todo: 인증, 인가가 필요한 요청들 넣어두기
                        .antMatchers(HttpMethod.GET,"/users/**").hasRole("USER")
                        .anyRequest().permitAll()
                )
                .httpBasic()
                    .disable()
                .formLogin()
                    .disable()
//                    .loginPage()
//                    .loginProcessingUrl("/auth/login")
//                .and()
                // cors 에러 뜰수도 있음. 그럴시 corsConfigurationSource()로 직접 연결
                .cors(httpSecurityCorsConfigurer -> withDefaults()) 
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .csrf()
                    .disable()
                //CORS 요청시, 수정 필요할 수도 있음
                .headers().frameOptions().sameOrigin()

                .and()
                .apply(new CustomFilterConfigurer())

                .and()
                .logout()
                .logoutUrl("/logout");
//                .logoutSuccessHandler(new CustomLogoutHandler());
//        http
//                .apply(new CustomFilterConfigurer());
//        http
//                .oauth2Login().successHandler(new OAuth2SuccessHandler(userService));
//        http

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
//        configuration.setExposedHeaders(Arrays.asList("Authorization", "Location", "Refresh"));
//        configuration.setAllowCredentials(true);

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

//            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter);
//                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
