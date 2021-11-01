package ro.ubb.cluj.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.ubb.cluj.domain.Contest;
import ro.ubb.cluj.repository.ContestRepository;
import ro.ubb.cluj.service.ContestService;

import java.util.List;

@Service
public class ContestServiceImpl implements ContestService {
    private final ContestRepository contestRepository;

    @Autowired
    public ContestServiceImpl(ContestRepository contestRepository) {
        this.contestRepository = contestRepository;
    }

    @Override
    public Contest save(Contest contest) {
        return contestRepository.save(contest);
    }

    @Override
    public Contest removeContest(long contestId) {
        return null;
    }

    @Override
    public List<Contest> getAll() {
        return contestRepository.findAll();
    }
}
