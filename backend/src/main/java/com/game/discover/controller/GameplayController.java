package com.game.discover.controller;


import com.game.discover.Exceptions.ApiRequestException;
import com.game.discover.ResponseEntity.ResponseEntity;
import com.game.discover.model.Discover;
import com.game.discover.model.Gameplay;
import com.game.discover.service.GameplayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/gameplay")
public class GameplayController {
    @Autowired
    GameplayService gameplayService;

    @PostMapping("/add")
    public org.springframework.http.ResponseEntity<Object> add(@RequestBody Gameplay gameplay){
        try{
            Gameplay createdGameplay = gameplayService.createGameplay(gameplay);
            return ResponseEntity.generateReponse("Gameplay created.", HttpStatus.CREATED,createdGameplay);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @PutMapping("/update")
    public org.springframework.http.ResponseEntity<Object> update(@RequestBody Gameplay gameplay){
        try{
            Gameplay updatesGameplay = gameplayService.updateGameplay(gameplay);
            return ResponseEntity.generateReponse("Gameplay updated.", HttpStatus.OK,updatesGameplay);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public org.springframework.http.ResponseEntity<Object> delete(@PathVariable Long id){
        try{
           gameplayService.deleteGameplay(id);
            return ResponseEntity.generateReponse("Gameplay deleted.", HttpStatus.OK,null);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }


    @GetMapping("/all")
    public org.springframework.http.ResponseEntity<Object> listAll(){
        try{
            List<Gameplay> listGameplay = gameplayService.listGameplay();
            return ResponseEntity.generateReponse("List loaded successfully.", HttpStatus.OK,listGameplay);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @GetMapping("/find/{id}")
    public org.springframework.http.ResponseEntity<Object> findById(@RequestParam String id){
        try{
            Optional<Gameplay> gameplay = gameplayService.listGameplayById(id);
            return ResponseEntity.generateReponse("element loaded successfully.", HttpStatus.OK,gameplay);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @GetMapping("/get")
    public org.springframework.http.ResponseEntity<Object> find(){
        try{
            Optional<Gameplay> gameplay = gameplayService.getGameplay();
            return ResponseEntity.generateReponse("Gameplay loaded successfully.", HttpStatus.OK,gameplay);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }

    @DeleteMapping("/initialize")
    public org.springframework.http.ResponseEntity<Object> initialize(){
        try{
            gameplayService.deleteGameplays();
            Gameplay gameplay = new Gameplay(1, false, null, false);
            Gameplay createdGameplay = gameplayService.createGameplay(gameplay);
            return ResponseEntity.generateReponse("Initialized gameplay.", HttpStatus.CREATED, createdGameplay);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }
}
