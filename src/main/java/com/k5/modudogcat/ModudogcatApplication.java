package com.k5.modudogcat;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.PathVariable;

@EnableJpaAuditing
@SpringBootApplication
public class ModudogcatApplication {
	public static void main(String[] args) {

		SpringApplication.run(ModudogcatApplication.class, args);

	}
}
