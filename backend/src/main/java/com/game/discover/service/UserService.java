package com.game.discover.service;

import com.game.discover.dto.UserDto;
import com.game.discover.model.UserGame;

import java.util.List;

public interface UserService {
    public UserGame createUser(UserGame user);
    public UserGame updateUser(UserGame user);
    public void deleteUser(String id);
    public List<UserGame> allUsers();
    public List<UserDto> allUsersForUser(String id);
    public UserGame login(UserGame user);
}
