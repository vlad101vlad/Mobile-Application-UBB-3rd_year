package ro.ubb.cluj.service.impl;

import org.springframework.stereotype.Service;
import ro.ubb.cluj.domain.ContestJPA;
import ro.ubb.cluj.repository.ContestJPARepository;
import ro.ubb.cluj.service.ContestService;

import java.util.List;

@Service
public class ContestServiceJPAImpl implements ContestService {
    private final ContestJPARepository contestJPARepository;

    public ContestServiceJPAImpl(ContestJPARepository contestJPARepository) {
        this.contestJPARepository = contestJPARepository;
    }


    @Override
    public ContestJPA save(ContestJPA contest) {
        return contestJPARepository.save(contest);
    }

    @Override
    public void deleteById(Long contestId) {
        this.contestJPARepository.deleteById(contestId);
    }


    @Override
    public List<ContestJPA> getAll() {
        return contestJPARepository.findAll();
    }
}
