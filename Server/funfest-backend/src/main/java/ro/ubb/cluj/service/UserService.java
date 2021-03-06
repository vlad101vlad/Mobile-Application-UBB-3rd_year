package ro.ubb.cluj.service;

import ro.ubb.cluj.domain.UserJPA;

import java.util.List;

public interface UserService {
    boolean createUser(UserJPA newUser);
    UserJPA findByUsername(String username);

    List<UserJPA> getAll();
}
