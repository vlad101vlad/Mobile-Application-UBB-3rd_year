package ro.ubb.cluj.service.impl;

import org.springframework.stereotype.Service;
import ro.ubb.cluj.domain.UserJPA;
import ro.ubb.cluj.repository.UserJPARepository;
import ro.ubb.cluj.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserJPARepository userJPARepository;

    public UserServiceImpl(UserJPARepository userJPARepository) {
        this.userJPARepository = userJPARepository;
    }


    @Override
    public boolean createUser(UserJPA newUser) {
        userJPARepository.save(newUser);
        return true;
    }

    @Override
    public UserJPA findByUsername(String username) {
        return userJPARepository.findByUsername(username);
    }

    @Override
    public List<UserJPA> getAll() {
        return userJPARepository.findAll();
    }
}
