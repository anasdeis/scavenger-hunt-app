package com.game.discover.service;

import com.game.discover.model.Gameplay;

import java.util.List;
import java.util.Optional;

public interface GameplayService {
    public Gameplay createGameplay(Gameplay gameplay);
    public Gameplay updateGameplay(Gameplay gameplay);
    public void deleteGameplay(Long id);
    public List<Gameplay> listGameplay();
    public Optional<Gameplay> listGameplayById(String id);
    public Optional<Gameplay> getGameplay();
    public void deleteGameplays();

}
