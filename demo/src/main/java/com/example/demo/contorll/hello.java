package com.example.demo.contorll;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import com.example.demo.entity.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;


@RestController

public class hello {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/")
    public String hello() {
        return "hello word";
    }

    @GetMapping("/h1")

    public Integer h1(){

        String sql = "select count(*) from tb_user";
        int count = jdbcTemplate.queryForObject(sql, Integer.class);
        return count;
    }
    @GetMapping("/h2")

    public Integer h2(){

        String sql = "select count(*) from tb_user where user_name = ?";
        int count = jdbcTemplate.queryForObject(sql, Integer.class, "jin1");
        return count;

    }

    
}
