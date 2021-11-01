package ro.ubb.cluj.repository;

import org.springframework.stereotype.Service;
import ro.ubb.cluj.domain.Contest;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContestRepository{
    private List<Contest> entities;

    public ContestRepository() {
        entities = new ArrayList<>();
    }

    public Contest save(Contest contest){
        entities.add(contest);
        return contest;
    }

    public Contest remove(Contest contest){
        entities.remove(contest);
        return contest;
    }

    public List<Contest> findAll(){
        return entities;
    }


}
