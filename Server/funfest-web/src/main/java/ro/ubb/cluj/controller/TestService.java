package ro.ubb.cluj.controller;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ro.ubb.cluj.domain.UserJPA;
import ro.ubb.cluj.service.ContestService;
import ro.ubb.cluj.service.UserService;

@Component
public class TestService implements CommandLineRunner {
    private final ContestService contestService;
    private final UserService userService;

    public TestService(ContestService contestService, UserService userService) {
        this.contestService = contestService;
        this.userService = userService;
    }

    @Override
    public void run(String... args) throws Exception {
//        Contest contest = new Contest(1L, "some title", "some description");
//        ContestJPA contestJPA = new ContestJPA(1L, "some title", "some description");
//
//        contestService.save(contestJPA);
//        UserJPA newUser = new UserJPA();
//        newUser.setUsername("vlad");
//        newUser.setPassword("pass");
//        userService.createUser(newUser);

        System.out.println(contestService.getAll());
        System.out.println(userService.getAll());
    }
}
