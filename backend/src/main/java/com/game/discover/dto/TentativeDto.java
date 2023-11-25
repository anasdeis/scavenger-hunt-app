package com.game.discover.dto;

public class TentativeDto {
    private Long id1;
    private Long id2;
    private Boolean trouve;

    public TentativeDto(Long id1, Long id2, Boolean trouve) {
        this.id1 = id1;
        this.id2 = id2;
        this.trouve = trouve;
    }

    public Long getId1() {
        return id1;
    }

    public void setId1(Long id1) {
        this.id1 = id1;
    }

    public Long getId2() {
        return id2;
    }

    public void setId2(Long id2) {
        this.id2 = id2;
    }

    public Boolean getTrouve() {
        return trouve;
    }

    public void setTrouve(Boolean trouve) {
        this.trouve = trouve;
    }
}
