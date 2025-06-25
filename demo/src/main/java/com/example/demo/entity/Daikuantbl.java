package com.example.demo.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class Daikuantbl {
    @Getter @Setter
    private  int id;    //
    private  String daikuanyongtu;    //贷款用途
    private  int daikuanjine;    //贷款金额
    private  int huankuanqixian;    //还款期限
    private  int jieshouzuigaohuankuane;    //接受最高还款额
    private  String xingming;    //姓名
    private  String xingbie;    //性别
    private  String shenfenzhenghaoma;    //身份证号码
    private  String hunyinzhuangkuang;    //婚姻状况
    private  String shenfenzhengdizhi;    //身份证地址
    private  String youbian;    //邮编
    private  int gongyangrenshu;    //供养人数
    private  String jiaoyuchengdu;    //教育程度
    private  String shoujihaoma;    //手机号码
    private  String qqweixinhaoma;    //QQ微信好吗
    private  String youxiang;    //邮箱
    private  String zhuzhaizuoji;    //住宅座机
    private  int danzhangxinyongkazuigaojine;    //单张信用卡最高金额
    private  int muqianyiqijuzhu;    //目前一起居住人数
    private  String qishijuzhushijian;    //起始居住时间
    private  String laishenqingdishijian;    //来申请地时间
    private  String xianjuzhudi;    //现居住地
    private  String zhuzhaileixing;    //住宅类型
    private  int zujin;    //租金
    private  int yuegong;    //月供
    private  String fangchandizhi;    //房产地址
    private  int goumaijiage;    //购买价格
    private  String cheliangpinpai;    //车辆品牌
    private  String cheliangleixing;    //车辆类型
    private  String goumaishijian;    //购买时间
    private  int gouchejiage;    //购车价格
    private  String gouchefangshi;    //购车方式
    private  String chepaihao;    //车牌号吗
    private  String lianxiren1xingming;    //联系人1姓名
    private  String lianxiren1guanxi;    //联系人1关系
    private  String lianxiren1shenfenzhenghaoma;    //联系人1身份证号码
    private  String lianxiren2xingming;    //联系人2姓名
    private  String lianxiren2guanxi;    //联系人2关系
    private  String lianxiren2shenfenzhenghaoma;    //联系人2身份证号码
    private  String lianxiren3xingming;    //联系人3姓名
    private  String lianxiren3guanxi;    //联系人3关系
    private  String lianxiren3shenfenzhenghaoma;    //联系人3身份证号码
    private  String shoukuankahao;    //收款卡号
    private  String huankuankahao;    //还款卡号
    private  String zhuangtai;    //贷款申请状态
    private  String shenqingriqi;    //贷款提交申请日期
    private  String fangkuanriqi;    //放款日期
    private  String beizhu;    //放款日期
}
