package com.tampro.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tampro.entity.Roles;
import com.tampro.entity.Users;
import com.tampro.model.UserDTO;
import com.tampro.model.UserUpload;
import com.tampro.repository.RoleRepository;
import com.tampro.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService{


    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        List<GrantedAuthority> authori = new ArrayList<>();
        for(Roles role : user.getRoles()) {
        	authori.add(new SimpleGrantedAuthority(role.getName()));
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
        		authori);
    }

    public Users save(UserDTO user) {
    	Users newUser = new Users();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        if(user != null) {
        	List<Roles> lists = new ArrayList<Roles>();
        	for(Long id : user.getRoles()) {
        		Roles role = roleRepository.findById(id).get();
        		lists.add(role);
        	}
        	newUser.setRoles(lists);
        }
        return userRepository.save(newUser);
    }
    public Users uploadFile(UserUpload userUpload) throws IllegalStateException, IOException {
    	//upload file 
    	final String URL_DIR = "C:\\Users\\Administrator\\git\\auth-jwt\\spring-jwt_spring-jwt\\src\\main\\resources\\static\\upload\\";
    	Users users = userRepository.findByUsername(userUpload.getUsername());
    	String imagesName = System.currentTimeMillis()+userUpload.getMultipartFile().getOriginalFilename();
    	userUpload.getMultipartFile().transferTo(new File(URL_DIR + imagesName));
    	users.setImages("upload/"+imagesName);
    	return userRepository.save(users);
    }
}
