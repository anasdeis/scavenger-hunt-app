package com.game.discover.service;

import com.game.discover.dto.AllTentativesDto;
import com.game.discover.dto.TentativeDto;
import com.game.discover.model.Tentative;

import java.util.List;

public interface TentativeService {
    public List<AllTentativesDto> getTentatives();
    public Tentative add(TentativeDto tentativeDto);
}
