package ro.ubb.cluj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ro.ubb.cluj.domain.Contest;
import ro.ubb.cluj.domain.ContestJPA;
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
    List<ContestJPA> getContests(){
        return contestService.getAll();
    }

    @PostMapping("/add")
    ContestJPA addContest(@RequestBody ContestJPA contest){
        return contestService.save(contest);
    }
}
