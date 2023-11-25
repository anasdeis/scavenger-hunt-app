package com.game.discover.service;

import com.game.discover.Exceptions.ApiRequestException;
import com.game.discover.dto.UserDto;
import com.game.discover.model.UserGame;
import com.game.discover.repository.DiscoverRepository;
import com.game.discover.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    DiscoverRepository discoverRepository;


    @Override
    public UserGame createUser(UserGame user) {
        user.setEmail(user.getEmail().toLowerCase());
        return userRepository.save(user);
    }

    @Override
    public UserGame login(UserGame user) {
        Optional<UserGame> u = userRepository.findByEmail(user.getEmail().toLowerCase());
        if(u.isPresent()){
            String password = u.get().getPassword();
                if(password.equals(user.getPassword())){
                    return u.get();
                }else{
                    throw  new ApiRequestException("Password is incorrect.");
                }
        }else{
            throw  new ApiRequestException("User not found.");
        }
    }


    @Override
    public UserGame updateUser(UserGame user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<UserGame> allUsers() {
        return userRepository.findAll();
    }

    //Users with Discovered part
    @Override
    public List<UserDto> allUsersForUser(String id) {
        List<UserDto> userList = null;
        return userList;
    }

}



