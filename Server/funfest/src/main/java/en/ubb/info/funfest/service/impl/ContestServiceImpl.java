package en.ubb.info.funfest.service.impl;

import en.ubb.info.funfest.domain.Contest;
import en.ubb.info.funfest.repository.ContestRepository;
import en.ubb.info.funfest.service.ContestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContestServiceImpl implements ContestService {
    private final ContestRepository contestRepository;

    @Autowired
    public ContestServiceImpl(ContestRepository contestRepository) {
        this.contestRepository = contestRepository;
    }


    @Override
    public void save(Contest newContest) {
        contestRepository.save(newContest);
    }

    @Override
    public void delete(Contest toBeDeleted) {
        contestRepository.delete(toBeDeleted);
    }


    @Override
    public List<Contest> getAll() {
        return contestRepository.findAll();
    }
}
