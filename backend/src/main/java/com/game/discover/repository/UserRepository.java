package com.game.discover.repository;

import com.game.discover.model.UserGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserGame,String> {
    public Optional<UserGame> findByEmail(String email);

}
