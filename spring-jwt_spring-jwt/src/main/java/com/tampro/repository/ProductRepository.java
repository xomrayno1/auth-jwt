package com.tampro.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tampro.entity.Product;

@Repository
public interface ProductRepository  extends CrudRepository<Product, Long>{

	
	@Override
	List<Product> findAll();
}
