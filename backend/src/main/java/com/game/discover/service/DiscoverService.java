package com.game.discover.service;

import com.game.discover.dto.UserDto;
import com.game.discover.dto.UserListDto;
import com.game.discover.model.Discover;

import java.util.List;

public interface DiscoverService {

    public Discover addDiscovery(Discover discover);
    public Discover updateDiscover(Discover discover);
    public void deleteDiscover(Long id);
    public List<Discover> listDiscoveries();
    public List<Discover> listDiscoveriesByUser(Long idUser);
    public List<Discover> listDiscoveriesOfUser(Long idUser);
    public List<UserDto> getAllUsers();
    public List<UserDto> getUserListForUser(Long idUser);
}
