package com.example.demo.Repository;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.*;

import java.util.List;
import java.util.Map;
import java.util.Scanner;
 
@Repository
public class MyRepository {
 
    private final JdbcTemplate jdbcTemplate;
    
 

    public MyRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
 
    public List<Map<String, Object>> findAll() {
        String sql = "SELECT id, username, email FROM users"; // 示例SQL查询
        
        return jdbcTemplate.queryForList(sql); // 使用listMap方法获取结果列表，每个元素是一个Map
    }
    public User findAll2() {
        String sql = "SELECT id, username, email FROM users"; // 示例SQL查询
        User student = null;
        try {
            student = this.jdbcTemplate.queryForObject(sql,User.class); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
        } catch (EmptyResultDataAccessException e) {
            e.printStackTrace();
        }
        return student;
    }
    public User getStudentById(int id) {
	String sql = "SELECT * FROM users WHERE id = ?";
	User student = null;
	try {
		student = this.jdbcTemplate.queryForObject(sql, new Object[] { id }, new BeanPropertyRowMapper<User>(User.class)); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
	} catch (EmptyResultDataAccessException e) {
		e.printStackTrace();
	}
	return student;
    }
    public  List<Map<String,Object>> adminusersel1(String username,String pswd) {
        String sql = "SELECT * FROM adminuser WHERE username = ? and pswd = ?";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { username , pswd }); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public  List<Map<String,Object>> getStudentById2(String username,String pswd) {
        String sql = "SELECT * FROM user WHERE username = ? and pswd = ?";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { username , pswd }); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public  List<Map<String,Object>> getStudentById5(String cardid) {
        String sql = "SELECT * FROM user WHERE cardid = ? ";
        System.out.println("catdid="+cardid);
            return  jdbcTemplate.queryForList(sql, new Object[] { cardid }); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public  List<Map<String,Object>> cardidsel1(String cardkb) {
        String sql = "SELECT * FROM user WHERE cardkb = ? ORDER BY cardid desc LIMIT 1";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { cardkb }); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public int up_user01(User User) {
        System.out.println("username=" +User.getUsername());
        System.out.println("pswd="+User.getPswd());
        System.out.println("cardid="+User.getCardid());
        System.out.println("cardkb="+User.getCardkb());
        System.out.println("addres="+User.getAddres());
        System.out.println("email="+User.getEmail());
        System.out.println("tel="+User.getTel());
        System.out.println("xinyongkb="+User.getXinyongkb());
        System.out.println("dongjiekb="+User.getDongjiekb());
        System.out.println("faxingriqi="+User.getFaxingriqi());
        String sql1 = "UPDATE  user SET username = ?,pswd=?,cardkb=?,addres=?,email=?,tel=?,xinyongkb=?,dongjiekb=?,faxingriqi=? WHERE cardid = ?;";
       return  jdbcTemplate.update(sql1, new Object[] { User.getUsername(),User.getPswd(),User.getCardkb(),User.getAddres(),User.getEmail(),User.getTel(),User.getXinyongkb(),User.getDongjiekb(),User.getFaxingriqi(),User.getCardid()}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public int add_user01(String username,String pswd,String cardid,String cardkb, String addres,String email,String tel,String xinyongkb,String dongjiekb,String faxingriqi) {
        System.out.println("username=" +username);
        System.out.println("pswd="+pswd);
        System.out.println("cardid="+cardid);
        System.out.println("cardkb="+cardkb);
        System.out.println("addres="+addres);
        System.out.println("email="+email);
        System.out.println("tel="+tel);
        System.out.println("xinyongkb="+xinyongkb);
        System.out.println("faxingriqi="+faxingriqi);
        //String sql = "INSERT INTO tbl2 (cardid) VALUES ('erfsdfsse')";
      // String sql = "INSERT INTO user (username,pswd,cardid,cardkb,addres,email,tel,xinyongkb,dongjiekb,faxingriqi) VALUES (?,?,?,?,?,?,?,?,?,?);";
       String sql1 = "INSERT INTO user (username,pswd,cardid,cardkb,addres,email,tel,xinyongkb,dongjiekb,faxingriqi) VALUES (?,?,?,?,?,?,?,?,?,?);";
        //String sql2 = "INSERT INTO tbl2  (?)";
       // String sql = "INSERT INTO `money` (`name`, `money`, `is_deleted`) VALUES ('一灰灰blog', 100, 0);";
        //return jdbcTemplate.update(sql,cardid) > 0;                    
        
           // return  jdbcTemplate.update(sql, new Object[] { username,pswd,cardid,cardkb,addres,email,tel,xinyongkb,dongjiekb,faxingriqi}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
            return  jdbcTemplate.update(sql1, new Object[] { username,pswd,cardid,cardkb,addres,email,tel,xinyongkb,dongjiekb,faxingriqi}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public  List<Map<String,Object>> o1(String username) {
        String sql = "SELECT * FROM user WHERE username = ?";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { username }); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public  List<Map<String,Object>> tbl2sel1(String cardid,String kaishiriqi,String jiesuriqi) {
        String sql = "SELECT * FROM Tbl2 WHERE cardid = ? and jiaoyiriqi >= ? and jiaoyiriqi <= ? ORDER BY jiaoyiriqi desc";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { cardid,kaishiriqi,jiesuriqi}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public  List<Map<String,Object>> seleuser3(String username,String cardid) {
        String sql = "SELECT * FROM user WHERE username = ?  and cardid = ?";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { username ,cardid}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }

    public  List<Map<String,Object>> sel_users_s2(String cardid) {
        String sql = "SELECT * FROM user WHERE cardid = ? ";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { cardid }); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public int add_tbl2_c1(String cardid,String username,String cunchukb, int jine,int yue,String jiaoyiriqi,String xinyongkb,String dongjiekb) {
        System.out.println("cardid=" +cardid);
        System.out.println("username=" +username);
        System.out.println("cunchukb=" +cunchukb);
        System.out.println("jine=" +jine);
        System.out.println("yue=" +yue);
        System.out.println("xinyongkb=" +xinyongkb);
        System.out.println("dongjiekb=" +dongjiekb);
        //String sql = "INSERT INTO tbl2 (cardid) VALUES ('erfsdfsse')";
       String sql = "INSERT INTO tbl2 (cardid,username,cunchukb,jine,yue,xinyongkb,dongjiekb,jiaoyiriqi) VALUES (?,?,?,?,?,?,?,?);";
        //String sql2 = "INSERT INTO tbl2  (?)";
       // String sql = "INSERT INTO `money` (`name`, `money`, `is_deleted`) VALUES ('一灰灰blog', 100, 0);";
        //return jdbcTemplate.update(sql,cardid) > 0;                    
        
            return  jdbcTemplate.update(sql, new Object[] { cardid,username,cunchukb,jine,yue,xinyongkb,dongjiekb,jiaoyiriqi}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }

    public  List<Map<String,Object>> tbl2sel2(String cardid) {
        String sql = "SELECT * FROM Tbl2 WHERE cardid = ?  ORDER BY jiaoyiriqi desc LIMIT 1";
        
            return  jdbcTemplate.queryForList(sql, new Object[] { cardid}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }

    public int add_tbl2_c1t(String cardid) {
        System.out.println("cardid=" +cardid);

        String sql = "INSERT INTO tbl2 (cardid) VALUES (?)";
       //String sql = "INSERT INTO 'tbl2' ('cardid','username','cunchukb','jine','yue','xinyongkb','dongjiekb') VALUES (?,?,?,?,?,?,?);";
        //String sql2 = "INSERT INTO tbl2  (?)";
       // String sql = "INSERT INTO `money` (`name`, `money`, `is_deleted`) VALUES ('一灰灰blog', 100, 0);";
        return jdbcTemplate.update(sql,cardid);                    
        
        //    return  jdbcTemplate.update(sql2, new Object[] { cardid}); // BeanPropertyRowMapper converts a row into a new instance of the specified mapped target class
    }
    public int add1_daikuantbl(Daikuantbl daikuantbl) {

        String sql1 = "INSERT INTO daikuantbl (zhuangtai,shenqingriqi,fangkuanriqi,daikuanyongtu,daikuanjine,huankuanqixian,jieshouzuigaohuankuane,xingming,xingbie,shenfenzhenghaoma,hunyinzhuangkuang,shenfenzhengdizhi,youbian,gongyangrenshu,jiaoyuchengdu,shoujihaoma,qqweixinhaoma,youxiang,zhuzhaizuoji,danzhangxinyongkazuigaojine,muqianyiqijuzhu,qishijuzhushijian,laishenqingdishijian,xianjuzhudi,zhuzhaileixing,zujin,yuegong,fangchandizhi,goumaijiage,cheliangpinpai,cheliangleixing,goumaishijian,gouchejiage,gouchefangshi,chepaihao,lianxiren1xingming,lianxiren1guanxi,lianxiren1shenfenzhenghaoma,lianxiren2xingming,lianxiren2guanxi,lianxiren2shenfenzhenghaoma,lianxiren3xingming,lianxiren3guanxi,lianxiren3shenfenzhenghaoma,shoukuankahao,huankuankahao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
        return  jdbcTemplate.update(sql1, new Object[] { daikuantbl.getZhuangtai(),daikuantbl.getShenqingriqi(),daikuantbl.getFangkuanriqi(),daikuantbl.getDaikuanyongtu(),daikuantbl.getDaikuanjine(),daikuantbl.getHuankuanqixian(),daikuantbl.getJieshouzuigaohuankuane(),daikuantbl.getXingming(),daikuantbl.getXingbie(),daikuantbl.getShenfenzhenghaoma(),daikuantbl.getHunyinzhuangkuang(),daikuantbl.getShenfenzhengdizhi(),daikuantbl.getYoubian(),daikuantbl.getGongyangrenshu(),daikuantbl.getJiaoyuchengdu(),daikuantbl.getShoujihaoma(),daikuantbl.getQqweixinhaoma(),daikuantbl.getYouxiang(),daikuantbl.getZhuzhaizuoji(),daikuantbl.getDanzhangxinyongkazuigaojine(),daikuantbl.getMuqianyiqijuzhu(),daikuantbl.getQishijuzhushijian(),daikuantbl.getLaishenqingdishijian(),daikuantbl.getXianjuzhudi(),daikuantbl.getZhuzhaileixing(),daikuantbl.getZujin(),daikuantbl.getYuegong(),daikuantbl.getFangchandizhi(),daikuantbl.getGoumaijiage(),daikuantbl.getCheliangpinpai(),daikuantbl.getCheliangleixing(),daikuantbl.getGoumaishijian(),daikuantbl.getGouchejiage(),daikuantbl.getGouchefangshi(),daikuantbl.getChepaihao(),daikuantbl.getLianxiren1xingming(),daikuantbl.getLianxiren1guanxi(),daikuantbl.getLianxiren1shenfenzhenghaoma(),daikuantbl.getLianxiren2xingming(),daikuantbl.getLianxiren2guanxi(),daikuantbl.getLianxiren2shenfenzhenghaoma(),daikuantbl.getLianxiren3xingming(),daikuantbl.getLianxiren3guanxi(),daikuantbl.getLianxiren3shenfenzhenghaoma(),daikuantbl.getShoukuankahao(),daikuantbl.getHuankuankahao() }); 
    }
    public int up01_daikuantbl(Daikuantbl daikuantbl) {
        System.out.println(daikuantbl.getZhuangtai());
        System.out.println(daikuantbl.getFangkuanriqi());
        System.out.println(daikuantbl.getBeizhu());

        String sql2 = "UPDATE  daikuantbl SET zhuangtai=?,fangkuanriqi=?,beizhu=? WHERE id = ? AND zhuangtai = '提交申请';";
        return  jdbcTemplate.update(sql2, new Object[] { daikuantbl.getZhuangtai(),daikuantbl.getFangkuanriqi(),daikuantbl.getBeizhu(),daikuantbl.getId() }); 
    }
    //贷款放款审查员（管理员级别2） 登陆后访问数据库的sql 状态为 提交申请 的对象一览。
    public List<Map<String,Object>> se01_daikuantbl(Daikuantbl daikuantbl) {
        //String zhuangtaineirong = "提交申请";
        System.out.println("zhuangtai="+daikuantbl.getZhuangtai());
        String sql2 = "SELECT * FROM  daikuantbl WHERE zhuangtai=? ORDER BY shenqingriqi ASC FOR UPDATE;";
        return  jdbcTemplate.queryForList(sql2, new Object[] { daikuantbl.getZhuangtai()}); 
    }
}