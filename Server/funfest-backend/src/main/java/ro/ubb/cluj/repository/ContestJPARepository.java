package ro.ubb.cluj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.ubb.cluj.domain.ContestJPA;

@Repository
public interface ContestJPARepository extends JpaRepository<ContestJPA, Long> {
}
