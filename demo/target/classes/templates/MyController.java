package com.example.demo.contorll;

import com.example.demo.Repository.*;
import com.example.demo.entity.User;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://10.20.1.227:3000"})
public class MyController {

    private final MyService myService;
 
    @Autowired
    public MyController(MyService myService) {
        this.myService = myService;
    }
 
    @GetMapping("/u1")
    public List<Map<String, Object>> getUsers() {
        return myService.getAllUsers(); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    @GetMapping("/u2")
    public User getUsers2() {
        return myService.getAllUsers2(); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    @GetMapping("/u3")
    public User h3() {
        int wk_id;
        wk_id = 3;
        return myService.getAllUsers3(wk_id); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    @GetMapping("/u4")
    public List<Map<String, Object>>  h4() {
        String wk_name;
        wk_name = "userjin1";
        return myService.getAllUsers4(wk_name); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }

}