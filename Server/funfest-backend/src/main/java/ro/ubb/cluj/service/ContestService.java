package ro.ubb.cluj.service;

import ro.ubb.cluj.domain.ContestJPA;
import java.util.List;

public interface ContestService {
    ContestJPA save(ContestJPA contest);

    List<ContestJPA> getAll();
}
