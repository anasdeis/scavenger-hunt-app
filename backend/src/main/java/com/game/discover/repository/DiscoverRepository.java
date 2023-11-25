package com.game.discover.repository;

import com.game.discover.model.Discover;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscoverRepository extends JpaRepository<Discover, String> {
    public List<Discover> findByIdUser1(Long idUser1);
    public List<Discover> findByIdUser2(Long idUser2);
}