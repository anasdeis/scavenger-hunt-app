package com.game.discover.dto;

public class AllTentativesDto {
    private Long id;
    private String nomComplet1 ;
    private String nomComplet2;
    private Boolean trouve ;

    public AllTentativesDto(Long id, String nomComplet1, String nomComplet2, Boolean trouve) {
        this.id = id;
        this.nomComplet1 = nomComplet1;
        this.nomComplet2 = nomComplet2;
        this.trouve = trouve;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomComplet1() {
        return nomComplet1;
    }

    public void setNomComplet1(String nomComplet1) {
        this.nomComplet1 = nomComplet1;
    }

    public String getNomComplet2() {
        return nomComplet2;
    }

    public void setNomComplet2(String nomComplet2) {
        this.nomComplet2 = nomComplet2;
    }

    public Boolean getTrouve() {
        return trouve;
    }

    public void setTrouve(Boolean trouve) {
        this.trouve = trouve;
    }
}
