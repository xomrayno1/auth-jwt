package com.tampro.service;

import java.util.List;

import com.tampro.entity.Users;

public interface UsersService {
	
	Users  findByUsername(String username);
	
	List<Users>  findAll();
}
