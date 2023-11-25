package com.game.discover.service;

import com.game.discover.model.Gameplay;
import com.game.discover.repository.DiscoverRepository;
import com.game.discover.repository.GamePlayRepository;
import com.game.discover.repository.TentativeRepository;
import com.game.discover.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameplayServiceImplementation implements GameplayService {

    @Autowired
    GamePlayRepository gamePlayRepository;

    @Autowired
    private DiscoverRepository discoverRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    TentativeRepository tentativeRepository;

    @Override
    public Gameplay createGameplay(Gameplay gameplay) {
        return gamePlayRepository.save(gameplay);
    }

    @Override
    public Gameplay updateGameplay(Gameplay gameplay) {
        Optional<Gameplay> gp = this.getGameplay();
        gp.get().setPlay(gameplay.getPlay());
        gp.get().setEndDate(gameplay.getEndDate());
        gp.get().setEndGame(gameplay.getEndGame());
        return gamePlayRepository.save(gp.get());
    }

    @Override
    public void deleteGameplay(Long id) {
        gamePlayRepository.deleteById(Long.toString(id));
    }

    @Override
    public void deleteGameplays() {
        gamePlayRepository.deleteAll();
        discoverRepository.deleteAll();
        userRepository.deleteAll();
        tentativeRepository.deleteAll();
    }

    @Override
    public List<Gameplay> listGameplay() {
        return gamePlayRepository.findAll();
    }

    public Optional<Gameplay> getGameplay() {
        return gamePlayRepository.findAll().stream().reduce((first, second) -> second);
    }


    @Override
    public Optional<Gameplay> listGameplayById(String id) {
        return gamePlayRepository.findById(id);
    }
}