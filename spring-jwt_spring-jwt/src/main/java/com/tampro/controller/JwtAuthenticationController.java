package com.tampro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tampro.config.JwtTokenUtil;
import com.tampro.entity.Users;
import com.tampro.model.JwtRequest;
import com.tampro.model.JwtResponse;
import com.tampro.model.UserDTO;
import com.tampro.model.UserUpload;
import com.tampro.repository.UserRepository;
import com.tampro.service.JwtUserDetailsService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepo;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
    	user.setRoles(new long[] {1});
        return ResponseEntity.ok(userDetailsService.save(user));
    }
    @RequestMapping(value = "/uploadFile", method = RequestMethod.PUT)
    public ResponseEntity<?> uploadFile(@ModelAttribute UserUpload userUpload) throws Exception {
    	System.out.println(userUpload);
    	Users user = userDetailsService.uploadFile(userUpload);
    	
        return ResponseEntity.ok(user);
    }
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        String images = userRepo.findByUsername(authenticationRequest.getUsername()).getImages();
        
        return ResponseEntity.ok(new JwtResponse(token
        		,userDetails.getUsername()
        		,images
        		,userDetails.getAuthorities().toArray()
        		));
    }


    private void authenticate(String username, String password) throws Exception {
        try {
        	//dùng authenticationManager.authenticate để xác thực password và username
        	//nó nhận vào authentication và trả về authencation 
        	// sử dung UsernamePasswordAuthenticationToken 
        	// UsernamePasswordAuthenticationToken là 1 cái bản thiết kế, 
        	//nó extends từ AbstractAuthenticationToken,
        	//AbstractAuthenticationToken implement Authentication
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) { // nếu user bị khoa
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
            //thông tin đăng nhập sai 
        }
    }
}
