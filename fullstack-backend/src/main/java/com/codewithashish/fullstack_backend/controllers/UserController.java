package com.codewithashish.fullstack_backend.controllers;

import com.codewithashish.fullstack_backend.exception.UserNotFoundException;
import com.codewithashish.fullstack_backend.model.User;
import com.codewithashish.fullstack_backend.repository.UserRepository;
//import com.codewithashish.fullstack_backend.exception.userNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("/")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("createUser")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("allUser")
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(()-> new UserNotFoundException(id));
    }

    @PutMapping("user/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User newUser) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                })
                .orElseThrow(()-> new UserNotFoundException(id));
    }

    @DeleteMapping("user/{id}")
    public String deleteUser(@PathVariable Long id) {
    if(!userRepository.existsById(id)) {
        throw new UserNotFoundException(id);
    }
    userRepository.deleteById(id);
    return "User id " + id + " deleted successfully";
    }

}
