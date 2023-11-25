package com.game.discover.controller;

import com.game.discover.Exceptions.ApiRequestException;
import com.game.discover.ResponseEntity.ResponseEntity;
import com.game.discover.dto.UserDto;
import com.game.discover.model.Discover;
import com.game.discover.service.DiscoverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/discover")
public class DiscoverController {

    @Autowired
    private DiscoverService discoverService;

    @PostMapping("/add")
    public org.springframework.http.ResponseEntity<Object> add(@RequestBody Discover discover){
        try{
            Discover createdDiscovery = discoverService.addDiscovery(discover);
            return ResponseEntity.generateReponse("Discover created.", HttpStatus.CREATED,createdDiscovery);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @PutMapping("/update")
    public org.springframework.http.ResponseEntity<Object> update(@RequestBody Discover discover){
        try{
            Discover updatedDiscovery = discoverService.updateDiscover(discover);
            return ResponseEntity.generateReponse("Discover updated.", HttpStatus.CREATED,updatedDiscovery);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public org.springframework.http.ResponseEntity<Object> update(@PathVariable Long id){
        try{
            discoverService.deleteDiscover(id);
            return ResponseEntity.generateReponse("Discover deleted.", HttpStatus.OK,null);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @GetMapping("/all")
    public org.springframework.http.ResponseEntity<Object> all(){
        try{
            List<Discover> discoverList =discoverService.listDiscoveries();
            return ResponseEntity.generateReponse("Discover loaded.", HttpStatus.OK,discoverList);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @GetMapping("/userDiscoveries/{id}")
    public org.springframework.http.ResponseEntity<Object> userDiscoveries(@PathVariable Long id){
        try{
            List<Discover> userDiscoveries =discoverService.listDiscoveriesByUser(id);
            return ResponseEntity.generateReponse("Discoveries of the user loaded.", HttpStatus.OK,userDiscoveries);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @GetMapping("/userDiscoveredBy/{id}")
    public org.springframework.http.ResponseEntity<Object> discoveredBy(@PathVariable Long id){
        try{
            List<Discover> discoveredBy =discoverService.listDiscoveriesOfUser(id);
            return ResponseEntity.generateReponse("Users that discovered the user loaded.", HttpStatus.OK,discoveredBy);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }


    @GetMapping("/userListForUser/{id}")
    public org.springframework.http.ResponseEntity<Object> userListForUser(@PathVariable Long id){
        try{
            List<UserDto> userList =discoverService.getUserListForUser(id);
            return ResponseEntity.generateReponse("Users List for the user has been loaded successfully.", HttpStatus.OK,userList);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }
}
