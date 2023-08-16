package com.lucky7.preproject.config;

import com.lucky7.preproject.auth.fiter.JwtAuthenticationFilter;
import com.lucky7.preproject.auth.fiter.JwtVerificationFilter;
import com.lucky7.preproject.auth.handler.UserAuthenticationFailureHandler;
import com.lucky7.preproject.auth.handler.UserAuthenticationSuccessHandler;
import com.lucky7.preproject.auth.jwt.JwtTokenizer;
import com.lucky7.preproject.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
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
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .headers().frameOptions().sameOrigin() //H2 웹 콘솔에 정상적으로 접근 가능하도록 설정
                .and()
                .csrf().disable() //CSRF 공격에 대한 설정
                .cors(withDefaults()) // CORS 설정을 추가
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)//.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)를 통해서 세션을 생성하지 않도록 설정
                .and()
                .formLogin().disable() // JSON 포맷 전달 방식 사용을 위해 비활성화
                .httpBasic().disable() // request 전송마다 로그인 정보를 받지 않을 것임으로 비활성화
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers("/users/login").permitAll() // 로그인은 모든 사용자에게 허용
                       // .antMatchers("/users/oauth/**").permitAll() // OAuth 토큰 요청은 모든 사용자에게 허용
                        .antMatchers(HttpMethod.GET, "/questions").permitAll() //질문 목록을 보는건 모든 사용자에게 허용
                        .antMatchers(HttpMethod.POST, "/questions").hasRole("USER") // 질문을 생성하는건 인증된 사용자에게만 혀용
                        .antMatchers(HttpMethod.GET, "/questions/{questionId}").hasRole("USER") //질문을 선택해 조회하는 기능은 인증된 사용자에게만 혀용
                        .antMatchers(HttpMethod.GET, "/questions/{questionId}/answers").hasRole("USER") //특정  답변을 선택해 조회하는 기능은 인증된 사용자에게만 혀용
                        .antMatchers(HttpMethod.POST,"/questions/{questionId}/answers/**").hasRole("USER") // 답변과 관련된 경로는 인증된 사용자에게만 허용
                        .antMatchers(HttpMethod.POST,"/questions/{questionId}/comments/**").hasRole("USER") // 댓글과 관련된 경로는 인증된 사용자에게만 허용
                        .anyRequest().permitAll()
                );


        return httpSecurity.build();
    }



    @Bean
    public PasswordEncoder passwordEncoder(){

        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*")); // 모든 요청에 대한 Http 통신 허용
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));// 지정한 요청에 대한 Http Method에 대한 통신 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity>{
        @Override
        public void configure(HttpSecurity builder) throws Exception { //Configuration를 커스텀
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());
            builder.addFilter(jwtAuthenticationFilter);

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}

    //UserDto Class에 Password 필드 추가 필요
    //Entity Class에 Password 필드 추가 필요
    //UserService 기능에 PasswordEncoder와 CustomAuthorityUtils DI 필요
    //UserRoleDetailsService


