package com.tampro.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig  implements WebMvcConfigurer{
	 @Override
     public void addResourceHandlers(ResourceHandlerRegistry registry) {
         registry.addResourceHandler("/upload/**")
         .addResourceLocations("classpath:/static/upload/").setCachePeriod(0);
     }
 
}