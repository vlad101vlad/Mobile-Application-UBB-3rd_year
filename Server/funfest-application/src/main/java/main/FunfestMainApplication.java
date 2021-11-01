package main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {
        "ro.ubb.cluj.controller",
        "ro.ubb.cluj.service",
        "ro.ubb.cluj.repository",
        "config"
})
public class FunfestMainApplication {
    public static void main(String[] args) {
        SpringApplication.run(FunfestMainApplication.class);
    }
}
