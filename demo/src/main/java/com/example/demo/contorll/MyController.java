package com.example.demo.contorll;


import com.example.demo.entity.User;
import com.example.demo.entity.Daikuantbl;
import com.example.demo.entity.Tbl2;

import com.example.demo.service.*;




import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

import java.util.Objects;
import javax.sound.sampled.*;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api")
//@CrossOrigin(origins = {"http://localhost:3000", "http://10.20.1.227:3000"})
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class MyController {

    private final MyService myService;
    
    @GetMapping
    public List<Map<String, Object>> getUsers3() {
        return myService.getAllUsers(); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }


    public MyController(MyService myService) {
        this.myService = myService;
    }
 
    @GetMapping("/u1")
    public List<Map<String, Object>> getUsers() {
        return myService.getAllUsers(); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @GetMapping("/u2")
    public User getUsers2() {
        return myService.getAllUsers2(); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @GetMapping("/u3")
    public User h3() {
        int wk_id;
        wk_id = 3;
        return myService.getAllUsers3(wk_id); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/u4")
    public List<Map<String, Object>>  h4(@RequestBody User User) {

        System.out.println("userUsername="+User.getUsername());
        System.out.println("password="+User.getPswd());
        return myService.getAllUsers4(User.getUsername(),User.getPswd()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    
    @PostMapping("/u6")
    public List<Map<String, Object>>  h13(@RequestBody User User) {

        System.out.println("userUsername="+User.getUsername());
        System.out.println("password="+User.getPswd());
        return myService.save_adminusersel1(User.getUsername(),User.getPswd()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/u5")
    public List<Map<String, Object>>  h5(@RequestBody User User) {

        return myService.getAllUsers5(User.getCardid()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/s7")
    public List<Map<String, Object>>  h14(@RequestBody User User) {

        System.out.println("Username="+User.getUsername());

        return myService.or1(User.getUsername()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/s1")
    public List<Map<String, Object>>  h6(@RequestBody Tbl2 Tbl2) {

        return myService.getTbl2s1(Tbl2.getCardid(),Tbl2.getKaishiriqi(),Tbl2.getJiesuriqi()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/s2")
    public List<Map<String, Object>>  h7(@RequestBody User User) {

        return myService.sevi_sel_users_s2(User.getCardid()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/s3")
    public List<Map<String, Object>>  h8(@RequestBody Tbl2 User) {
        return myService.sevi_seleuser3(User.getUsername(),User.getCardid()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/s4")
    public int  h9(@RequestBody Tbl2 Tbl2) {
        int yue2 = 0;
        int jine = 0;
        String cunqukb = Tbl2.getCunchukb();

        if ( Objects.equals("汇款", cunqukb) ) {
            yue2 = Tbl2.getYue() - Tbl2.getHuikuanjine();
            jine = Tbl2.getHuikuanjine();
        }
        if ( Objects.equals("取款", cunqukb) ) {
            yue2 = Tbl2.getYue() - Tbl2.getQukuanjine();
            jine = Tbl2.getQukuanjine();
        }
        if ( Objects.equals("汇入", cunqukb) ) {
            yue2 = Tbl2.getYue() + Tbl2.getHuikuanjine();
            jine = Tbl2.getHuikuanjine();
        }
        if ( Objects.equals("存款", cunqukb) ) {
            yue2 = Tbl2.getYue() + Tbl2.getCunkuanjine();
            jine = Tbl2.getCunkuanjine();
        }
        if ( Objects.equals("放贷", cunqukb) ) {
            yue2 = Tbl2.getYue() + Tbl2.getDaikuanjine();
            jine = Tbl2.getDaikuanjine();
        }
        return myService.sevi_add_tbl2_c1(Tbl2.getCardid(),Tbl2.getUsername(),Tbl2.getCunchukb(), jine,yue2 ,Tbl2.getJiaoyiriqi(),Tbl2.getXinyongkb(),Tbl2.getDongjiekb()); 
                // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    
    }
    @PostMapping("/s5")
    
    public List<Map<String, Object>>  h10(@RequestBody Tbl2 Tbl2) {
  
        System.out.println("getCardid="+Tbl2.getCardid());

        return myService.sevi_sel_Tbl2s2(Tbl2.getCardid()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/s6")
    public List<Map<String, Object>>  h11(@RequestBody User User) {

        return myService.sevi_cardidsel1(User.getCardkb()); // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/userin01")
    public int  h12(@RequestBody User User) {
        System.out.println("read userin01");
        return myService.sevi_add_user01(User.getUsername(),User.getPswd(),User.getCardid(),User.getCardkb(),User.getAddres(),User.getEmail(),User.getTel(),User.getXinyongkb(),User.getDongjiekb(),User.getFaxingriqi()); 
                // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    
    }
    @PostMapping("/userup01")
    public int  h15(@RequestBody User User) {
        System.out.println("read userin01");
        return myService.sevi_up_user01(User); 
                // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    
    }
    @PostMapping("/add1daikuantbl")
    public int  h16(@RequestBody Daikuantbl daikuantbl) {
        System.out.println("read userin01");
        return myService.sevi_add1_daikuantbl(daikuantbl); 
                // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    
    }
    @PostMapping("/up01daikuantbl")
    public int  h17(@RequestBody Daikuantbl daikuantbl) {
       
        return myService.sevi_up01_daikuantbll(daikuantbl); 
                // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    
    }
    
    @PostMapping("/i1") 
    public List<Map<String,Object>>  h11(@RequestBody Tbl2 User) {
        List<Map<String,Object>> list= myService.sevi_seleuser3(User.getUsername(),User.getCardid());
        System.out.println("list=" + list);
        System.out.println("list.tel=" + list.get(0));
        return list ; // 返回所有用户信息，每个用户信息是一个Map对象，包含id, Username, email等字段
    }
    @PostMapping("/shenpidaikuan") 
    public List<Map<String,Object>>  h12(@RequestBody Daikuantbl daikuantbl) {

        return myService.sevi_se01_daikuantbl(daikuantbl); 
    }
 

}