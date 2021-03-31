package com.tampro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tampro.entity.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{
	
	@Override
	List<Category> findAll();

}
