package com.example.demo.entity;
 
 
 
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
 
@Data
public class User {
    @Getter @Setter
    
    private String username;// 用户名
    private String pswd;
    private String cardid;
    private String cardkb;
    private String addres;
    private String email;
    private String tel;
    private String xinyongkb;
    private String dongjiekb;
    private String faxingriqi;
    private String guanlijibie;
    
}
