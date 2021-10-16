package en.ubb.info.funfest.service;

import en.ubb.info.funfest.domain.Contest;

import java.util.List;

public interface ContestService {

    void save(Contest newContest);
    void delete(Contest toBeDeleted);
    List<Contest> getAll();

}
