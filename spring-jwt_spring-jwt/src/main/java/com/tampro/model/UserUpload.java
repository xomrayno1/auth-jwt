package com.tampro.model;

import org.springframework.web.multipart.MultipartFile;

public class UserUpload {
	private String username;
	private MultipartFile multipartFile;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public MultipartFile getMultipartFile() {
		return multipartFile;
	}
	public void setMultipartFile(MultipartFile multipartFile) {
		this.multipartFile = multipartFile;
	}
	@Override
	public String toString() {
		return "UserUpload [username=" + username + ", multipartFile=" + multipartFile + "]";
	}
	 
	
	

}
