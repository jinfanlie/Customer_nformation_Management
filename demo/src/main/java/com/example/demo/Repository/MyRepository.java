package com.example.demo.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.User;

import java.util.List;
import java.util.Map;
 
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
    private boolean insertBySql() {
        // 简单的sql执行
        String sql = "INSERT INTO `money` (`name`, `money`, `is_deleted`) VALUES ('一灰灰blog', 100, 0);";
        return jdbcTemplate.update(sql) > 0;
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
}