package com.example.demo.entity;
 
 
 
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
 
@Data
public class Tbl2 {
    @Getter @Setter
    
    private String username;// 用户名
    private String cardid;
    private String cunchukb;
    private int jine;
    private int yue;
    private String jiaoyiriqi;
    private String kaishiriqi;
    private String jiesuriqi;
    private String xinyongkb;
    private String dongjiekb;
    private int huikuanjine;
    private int cunkuanjine;
    private int qukuanjine;
    private int daikuanjine;

}
