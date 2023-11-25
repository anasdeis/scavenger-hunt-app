package com.game.discover.controller;
import com.game.discover.Exceptions.ApiRequestException;
import com.game.discover.ResponseEntity.ResponseEntity;
import com.game.discover.dto.UserDto;
import com.game.discover.model.UserGame;
import com.game.discover.service.DiscoverService;
import com.game.discover.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    DiscoverService discoverService;

    @PostMapping("/add")
    public org.springframework.http.ResponseEntity<Object> add(@RequestBody UserGame user){
        try{
            UserGame createdUser = userService.createUser(user);
            return ResponseEntity.generateReponse("User created.", HttpStatus.CREATED,createdUser);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @PostMapping("/login")
    public org.springframework.http.ResponseEntity<Object> login(@RequestBody UserGame user){
        try{
            UserGame logedInUser = userService.login(user);
            return ResponseEntity.generateReponse("User logged in successfully.", HttpStatus.OK,logedInUser);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @PostMapping("/update")
    public org.springframework.http.ResponseEntity<Object> update(@RequestBody UserGame user){
        try{
            UserGame updatedUser = userService.updateUser(user);
            return ResponseEntity.generateReponse("User updated.", HttpStatus.CREATED,updatedUser);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public org.springframework.http.ResponseEntity<Object> delete(@PathVariable String id){
        try{
            userService.deleteUser(id);
            return ResponseEntity.generateReponse("User deleted.", HttpStatus.CREATED,null);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @GetMapping("/allUsersForUser/{id}")
    public org.springframework.http.ResponseEntity<Object> allUsersForUser(@PathVariable String id){
        try{
            List<UserDto> userList =  userService.allUsersForUser(id);
            return ResponseEntity.generateReponse("List loaded.", HttpStatus.CREATED,userList);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @GetMapping("/all")
    public org.springframework.http.ResponseEntity<Object> allUsers(){
        try{
            List<UserDto> userList =  discoverService.getAllUsers();
            return ResponseEntity.generateReponse("List loaded.", HttpStatus.OK,userList);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

}
