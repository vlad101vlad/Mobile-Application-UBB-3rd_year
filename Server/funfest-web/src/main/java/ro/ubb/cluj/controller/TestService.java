package ro.ubb.cluj.controller;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ro.ubb.cluj.domain.Contest;
import ro.ubb.cluj.service.ContestService;

@Component
public class TestService implements CommandLineRunner {
    private final ContestService contestService;

    public TestService(ContestService contestService) {
        this.contestService = contestService;
    }

    @Override
    public void run(String... args) throws Exception {
        Contest contest = new Contest(1L, "some title", "some description");

        contestService.save(contest);
        System.out.println(contestService.getAll());
    }
}
