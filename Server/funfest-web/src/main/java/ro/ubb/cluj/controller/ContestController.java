package ro.ubb.cluj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.ubb.cluj.domain.Contest;
import ro.ubb.cluj.service.ContestService;


import java.util.List;

@RestController
@RequestMapping("/contest")
public class ContestController {
    private final ContestService contestService;

    @Autowired
    public ContestController(ContestService contestService) {
        this.contestService = contestService;
    }

    @GetMapping("/")
    List<Contest> getContests(){
        return contestService.getAll();
    }
}
