package com.game.discover.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tentative {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long idUser1;
    private Long idUser2;
    private Boolean trouve;

    public Tentative( Long user1, Long user2, Boolean trouve) {
        this.idUser1 = user1;
        this.idUser2 = user2;
        this.trouve = trouve;
    }
}
