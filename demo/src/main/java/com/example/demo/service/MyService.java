package com.example.demo.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import com.example.demo.Repository.*;
import com.example.demo.entity.Daikuantbl;
import com.example.demo.entity.User; 


@Service
public class MyService {
 
    private final MyRepository myRepository;
 
    public MyService(MyRepository myRepository) {
        this.myRepository = myRepository;
    }
 
    public List<Map<String, Object>> getAllUsers() {
        return myRepository.findAll(); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public User getAllUsers3(Integer pm_id) {
        return myRepository.getStudentById(pm_id); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public List<Map<String, Object>> getAllUsers4(String pm_username,String pm_pswd) {
        return myRepository.getStudentById2(pm_username,pm_pswd); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public List<Map<String, Object>> save_adminusersel1(String username,String pswd) {
        return myRepository.adminusersel1(username,pswd); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public User getAllUsers2() {
        return myRepository.findAll2(); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public List<Map<String, Object>> getAllUsers5(String cardid) {
    
        return myRepository.getStudentById5(cardid); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public List<Map<String, Object>> or1(String pm_name) {
        return myRepository.o1(pm_name); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public List<Map<String, Object>> getTbl2s1(String cardid,String kaishiriqi,String jiesuriqi) {
        return myRepository.tbl2sel1(cardid,kaishiriqi,jiesuriqi); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    
    public List<Map<String, Object>> sevi_seleuser3(String pm_username,String pm_cardid) {
        return myRepository.seleuser3(pm_username,pm_cardid); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public List<Map<String, Object>> sevi_sel_users_s2(String pm_cardid) {
        return myRepository.sel_users_s2(pm_cardid); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    
    public int sevi_add_tbl2_c1(String cardid,String username,String cunchukb, int jine,int yue, String jiaoyiriqi ,String xinyongkb,String dongjiekb) {
        return myRepository.add_tbl2_c1(cardid,username,cunchukb,jine,yue,jiaoyiriqi,xinyongkb,dongjiekb); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }

    public int sevi_add_tbl2_c1t(String cardid) {
        return myRepository.add_tbl2_c1t(cardid); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }

    public List<Map<String, Object>> sevi_sel_Tbl2s2(String cardid) {
        return myRepository.tbl2sel2(cardid); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public int sevi_add_user01(String username,String pswd,String cardid,String cardkb, String addres,String email,String tel,String xinyongkb,String dongjiekb,String faxingriqi) {
        return myRepository.add_user01(username,pswd,cardid,cardkb, addres,email,tel,xinyongkb,dongjiekb,faxingriqi); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public int sevi_up_user01(User User) {
        return myRepository.up_user01(User); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public List<Map<String, Object>> sevi_cardidsel1(String cardkb) {
        return myRepository.cardidsel1(cardkb); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public int sevi_add1_daikuantbl(Daikuantbl daikuantbl) {
        return myRepository.add1_daikuantbl(daikuantbl); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    public int sevi_up01_daikuantbll(Daikuantbl daikuantbl) {
        return myRepository.up01_daikuantbl(daikuantbl); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
    //贷款放款审查员（管理员级别2） 登陆后访问数据库的sql 状态为 提交申请 的对象一览。
    public List<Map<String, Object>>  sevi_se01_daikuantbl(Daikuantbl daikuantbl) {
        return myRepository.se01_daikuantbl(daikuantbl); // 获取所有用户信息，每个用户信息是一个Map对象，包含id, name, email等字段
    }
}