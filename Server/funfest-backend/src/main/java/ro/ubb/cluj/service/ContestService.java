package ro.ubb.cluj.service;

import ro.ubb.cluj.domain.Contest;

import java.util.List;

public interface ContestService {
    Contest save(Contest contest);
    Contest removeContest(long contestId);

    List<Contest> getAll();
}
