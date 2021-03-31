package com.tampro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tampro.entity.Roles;

@Repository
public interface RoleRepository extends JpaRepository<Roles, Long>{

}
