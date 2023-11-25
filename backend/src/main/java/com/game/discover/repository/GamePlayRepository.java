package com.game.discover.repository;

import com.game.discover.model.Gameplay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GamePlayRepository extends JpaRepository<Gameplay, String> {

}