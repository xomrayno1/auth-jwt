package com.tampro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tampro.entity.Users;

@Repository
public interface UserRepository  extends CrudRepository<Users, Long>{
	
	Users findByUsername(String username);
	
	@Override
	List<Users> findAll();
}
