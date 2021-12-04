package ro.ubb.cluj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.ubb.cluj.domain.UserJPA;

@Repository
public interface UserJPARepository extends JpaRepository<UserJPA, Long> {
    UserJPA findByUsername(String username);
}
