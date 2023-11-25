package com.game.discover.dto;

import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String email;
    private String role;
    private Long nbFound;
    private String unit;
    private String completeName;
    private String picture;
    private String funFact;
    private String qrCodeB64;
    private Boolean discovered;

    public UserDto(Long id, String email, String role, Long nbFound,String unit, String completeName, String picture, String funFact, String qrCodeB64, Boolean discovered) {
        this.id = id;
        this.email = email;
        this.role = role;
        this.nbFound = nbFound;
        this.unit = unit;
        this.completeName = completeName;
        this.picture = picture;
        this.funFact = funFact;
        this.qrCodeB64 = qrCodeB64;
        this.discovered = discovered;
    }
}
