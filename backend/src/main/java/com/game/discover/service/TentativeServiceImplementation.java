package com.game.discover.service;


import com.game.discover.dto.AllTentativesDto;
import com.game.discover.dto.TentativeDto;
import com.game.discover.model.Tentative;
import com.game.discover.model.UserGame;
import com.game.discover.repository.TentativeRepository;
import com.game.discover.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TentativeServiceImplementation implements TentativeService {
    @Autowired
    TentativeRepository tentativeRepository;
    @Autowired
    UserRepository userRepository;
    @Override
    public List<AllTentativesDto> getTentatives() {
        List<Tentative> tent =  tentativeRepository.findAll();
        List<AllTentativesDto> listTent =  new ArrayList<>();

        if(!tent.isEmpty()){
            tent.stream().forEach((item) -> {
                UserGame u1 = userRepository.findById(String.valueOf(item.getIdUser1())).get();
                UserGame u2 = userRepository.findById(String.valueOf(item.getIdUser2())).get();
                listTent.add(new AllTentativesDto(u1.getId(),u1.getCompleteName(),u2.getCompleteName(),item.getTrouve()));
            });
            Collections.sort(listTent, (left, right) -> Math.toIntExact(right.getId()-left.getId()));
        }

        return listTent;
    }

    @Override
    public Tentative add(TentativeDto tentativeDto) {
        Tentative tentative = new Tentative(tentativeDto.getId1(), tentativeDto.getId2(),tentativeDto.getTrouve());
        return tentativeRepository.save(tentative);
    }
}
