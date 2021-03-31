package com.tampro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tampro.entity.Category;
import com.tampro.entity.Product;
import com.tampro.repository.CategoryRepository;
import com.tampro.repository.ProductRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {
	@Autowired
	ProductRepository productRepo;
	@Autowired
	CategoryRepository cateRepo;

	@GetMapping("/hello")
	public String hello() {
		return "Hello World";
	}
	
	@GetMapping("/products")
	public List<Product> products() {
		return productRepo.findAll();
	}
	
	@GetMapping("/category")
	public List<Category> category() {
		return cateRepo.findAll();
	}
}
