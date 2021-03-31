package com.tampro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tampro.entity.Users;
import com.tampro.repository.UserRepository;
import com.tampro.service.UsersService;

@Service
public class UsersServiceImpl  implements UsersService{

	
	@Autowired
	UserRepository usersRepo;
	
	@Override
	public Users findByUsername(String username) {
		// TODO Auto-generated method stub
	//	return usersRepo.findByUsernane(username);
		return null;
	}

	@Override
	public List<Users> findAll() {
		// TODO Auto-generated method stub
		return usersRepo.findAll();
	} 

}
