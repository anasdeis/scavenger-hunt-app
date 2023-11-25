package com.game.discover.controller;


import com.game.discover.Exceptions.ApiRequestException;
import com.game.discover.ResponseEntity.ResponseEntity;
import com.game.discover.dto.AllTentativesDto;
import com.game.discover.dto.TentativeDto;
import com.game.discover.model.Gameplay;
import com.game.discover.model.Tentative;
import com.game.discover.service.TentativeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tentative")
public class TentativeController {
    @Autowired
    TentativeService tentativeService;

    @GetMapping("/all")
    public org.springframework.http.ResponseEntity<Object> listAll(){
        try{
            List<AllTentativesDto> tentatives = tentativeService.getTentatives();
            return ResponseEntity.generateReponse("List loaded successfully.", HttpStatus.OK,tentatives);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }


    @PostMapping("/add")
    public org.springframework.http.ResponseEntity<Object> add(@RequestBody TentativeDto tent){
        try{
            Tentative tentative = tentativeService.add(tent);
            return ResponseEntity.generateReponse("Tentative created.", HttpStatus.CREATED,tentative);
        }catch (Exception e){
            throw new ApiRequestException(e.getMessage());
        }
    }



}
