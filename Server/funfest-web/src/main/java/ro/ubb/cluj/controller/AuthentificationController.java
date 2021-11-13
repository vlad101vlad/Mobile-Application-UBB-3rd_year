package ro.ubb.cluj.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.ubb.cluj.domain.UserJPA;
import ro.ubb.cluj.service.UserService;

@RestController
@RequestMapping("/auth")
public class AuthentificationController {
    private final UserService userService;

    public AuthentificationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    void registerUser(@RequestBody UserJPA newUser){
        userService.createUser(newUser);
    }
}
