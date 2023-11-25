package com.game.discover.repository;
import com.game.discover.model.Tentative;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TentativeRepository extends JpaRepository<Tentative, Long> {

}