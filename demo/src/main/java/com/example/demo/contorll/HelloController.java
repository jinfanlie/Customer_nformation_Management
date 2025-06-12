package com.example.demo.contorll;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = {"http://localhost:3000", "http://10.20.1.227:3000"})

@Controller
public class HelloController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/login")

    @ResponseBody

    public List<Map<String,Object>> login(@RequestParam String name, @RequestParam String password) {

        String wk_name = "'jin1'";
    
         String sql = String.join(" ", "select * from sqltbl1 WHERE name=", wk_name);
    
    
        List<Map<String,Object>> list=jdbcTemplate.queryForList(sql);
    
        return list;



      //  return sqlTbl1Repository.findByNameAndPassword(name, password);
    }



}