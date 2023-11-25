package com.game.discover.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserGame {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique=true)
    private String email;
    private String role;
    private String password;
    private String unit;
    private String completeName;
    @Column(length = 65555)
    private String picture;
    @Column(length = 65555)
    private String funFact;
    private String qrCodeB64;
}