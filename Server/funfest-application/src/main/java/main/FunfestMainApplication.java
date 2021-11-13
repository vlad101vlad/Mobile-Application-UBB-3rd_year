package main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {
        "ro.ubb.cluj.controller",
        "ro.ubb.cluj.service",
        "ro.ubb.cluj.repository",
        "config",
        "ro.ubb.cluj.config"
})
@EntityScan(basePackages = {
        "ro.ubb.cluj.domain"
})
@EnableJpaRepositories(basePackages = {
        "ro.ubb.cluj.repository"
})
public class FunfestMainApplication {
    public static void main(String[] args) {
        SpringApplication.run(FunfestMainApplication.class);
    }
}
