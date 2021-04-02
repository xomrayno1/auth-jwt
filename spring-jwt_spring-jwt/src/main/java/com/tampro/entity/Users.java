package com.tampro.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String username;
	private String password;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role",
				joinColumns = @JoinColumn(name="user_id"),
				inverseJoinColumns = @JoinColumn(name="role_id"))
	
	private List<Roles> roles;
	
	private String images;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Users(String username, String password) {
		this.username = username;
		this.password = password;
	}
	public Users() {
	}
	@Override
	public String toString() {
		return "Users [username=" + username + ", password=" + password + "]";
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public List<Roles> getRoles() {
		return roles;
	}
	public void setRoles(List<Roles> roles) {
		this.roles = roles;
	}
	public String getImages() {
		return images;
	}
	public void setImages(String images) {
		this.images = images;
	}
	
	

}
