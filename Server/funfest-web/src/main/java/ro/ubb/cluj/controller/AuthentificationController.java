package ro.ubb.cluj.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;
import ro.ubb.cluj.config.services.MyUserDetailsService;
import ro.ubb.cluj.config.utils.JwtUtils;
import ro.ubb.cluj.domain.UserJPA;
import ro.ubb.cluj.dto.AuthRequestDTO;
import ro.ubb.cluj.dto.AuthResponseDTO;
import ro.ubb.cluj.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class AuthentificationController {
    private final UserService userService;

    @Autowired
    private  MyUserDetailsService myUserDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthentificationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    void registerUser(@RequestBody UserJPA newUser){
        userService.createUser(newUser);
    }


    @PostMapping("/login")
    public AuthResponseDTO authenticate(@RequestBody AuthRequestDTO requestDTO) throws Exception {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            requestDTO.getUsername(),
                            requestDTO.getPassword()
                    )
            );
        }catch (BadCredentialsException e){
            throw new Exception("Invalid credentials", e);
        }

        final UserDetails userDetails =
                myUserDetailsService.loadUserByUsername(requestDTO.getUsername());

        final String token =
                jwtUtils.generateToken(userDetails);

        return new AuthResponseDTO(token);
    }
}
