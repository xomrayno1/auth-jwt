package com.tampro.model;

import java.io.Serializable;

public class JwtResponse implements Serializable{
	private static final long serialVersionUID = -8091879091924046844L;
	private final String token;
	private final String username;
	private final String images;
	private final Object[] roles;
	
	
 
 
 
	public JwtResponse(String token, String username, String images, Object[] roles) {
		 
		this.token = token;
		this.username = username;
		this.images = images;
		this.roles = roles;
	}

	public Object[] getRoles() {
		return roles;
	}

	public String getToken() {
		return token;
	}
 
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
 
	public String getUsername() {
		return username;
	}

	public String getImages() {
		return images;
	}
 
	 
	 
}
