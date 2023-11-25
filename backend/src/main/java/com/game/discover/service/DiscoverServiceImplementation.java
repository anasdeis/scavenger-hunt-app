package com.game.discover.service;

import com.game.discover.dto.UserDto;
import com.game.discover.model.Discover;
import com.game.discover.model.UserGame;
import com.game.discover.repository.DiscoverRepository;
import com.game.discover.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DiscoverServiceImplementation implements DiscoverService {
    @Autowired
    private DiscoverRepository discoverRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Discover addDiscovery(Discover discover) {
        return discoverRepository.save(discover);
    }

    @Override
    public Discover updateDiscover(Discover discover) {
        return discoverRepository.save(discover);
    }


    @Override
    public void deleteDiscover(Long id) {
        discoverRepository.deleteById(Long.toString(id));
    }

    @Override
    public List<Discover> listDiscoveries() {
        return discoverRepository.findAll();
    }

    @Override
    public List<Discover> listDiscoveriesByUser(Long idUser) {
        return discoverRepository.findAll().stream().filter(
                (user)->user.getIdUser1()==idUser
                )
                .collect(Collectors.toList());
    }

    @Override
    public List<Discover> listDiscoveriesOfUser(Long idUser) {
        return discoverRepository.findAll().stream().filter((user)->user.getIdUser2()==idUser).collect(Collectors.toList());
    }

    @Override
    public List<UserDto> getUserListForUser(Long idUser) {
        List<UserGame> users = userRepository.findAll();
        List<UserDto> userList = new ArrayList<>();
        List<Discover> fbu1 = discoverRepository.findByIdUser1(idUser);
        boolean discovered =false;


        users.stream().forEach((user)->{
            List<Discover> fbu2 = discoverRepository.findByIdUser2(user.getId());
            List<Discover> discoverByuser = discoverRepository.findByIdUser1(user.getId());
            int size = fbu2.stream().filter((u)-> u.getIdUser1()==idUser &&  u.getIdUser2()== user.getId() ).collect(Collectors.toList()).size();

            userList.add(new UserDto(user.getId(), user.getEmail(), user.getRole(),
                    (long) discoverByuser.size(), user.getUnit(), user.getCompleteName(), user.getPicture(), user.getFunFact(),
                    user.getQrCodeB64(), size > 0 ? true : false));
        });
        return userList;
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<UserGame> users = userRepository.findAll();
        List<UserDto> userList = new ArrayList<>();

        users.stream().forEach((user)->{
            List<Discover> discoverByuser = discoverRepository.findByIdUser1(user.getId());
            userList.add(new UserDto(user.getId(), user.getEmail(), user.getRole(),
                    (long) discoverByuser.size(), user.getUnit(), user.getCompleteName(), user.getPicture(), user.getFunFact(),
                    user.getQrCodeB64(), true));
        });
        return userList;
    }
}


