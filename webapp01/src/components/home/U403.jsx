//import { orderApi } from '../misc/OrderApi'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useRef,useState, useEffect  } from 'react';
import { preinit } from 'react-dom';
import './U4b3.css';
import { useNavigate } from 'react-router-dom';
import instance from '../misc/Axicolo';
import { format } from 'date-fns';
import ReactModal from 'react-modal';

export default function U403() {

  const location = useLocation();
  const { guanliusername,guanlijibie } = location.state;
  const [guanlicon01,setGuanlicon01] = useState({
    guanlijibie02:false,
    guanlijibie04:false,
  })
  const [zhanghuquerenok,setZhanghuquerenok] = useState(false)
  const [daikuan,setDaikuan] = useState({
    daikuanyongtu:'购车', //贷款用途
    daikuanjine:100000, //贷款金额
    huankuanqixian:5,
    jieshouzuigaohuankuane:20000,
    xingming:'张三', //用户名
    xingbie:'男',
    shenfenzhenghaoma:'222404198403211111',
    hunyinzhuangkuang:'已婚',
    shenfenzhengdizhi:'大连市宏川东路28号',
    youbian:'133300',
    gongyangrenshu:'3', //供养人数
    jiaoyuchengdu:'本科', //教育程度
    shoujihaoma:'13311114321',
    qqweixinhaoma:'13311114321',
    youxiang:'jin@163.com',
    zhuzhaizuoji:'-',
    danzhangxinyongkazuigaojine:'50000',
    muqianyiqijuzhu:'3',
    qishijuzhushijian:'2025-06-03',
    laishenqingdishijian:'2022-03-02',
    xianjuzhudi:'大连市宏川东路28号',

    zhuzhaileixing:'自购',
    zujin:'1000',
    zhuzhaileixing:'按揭',
    yuegong:'4000',
    fangchandizhi:'大连市宏川东路28号',
    goumaijiage:'1234567',
    cheliangpinpai:'丰田',
    cheliangleixing:'进口',
    goumaishijian:'2023-04-05',
    gouchejiage:'150000',
    gouchefangshi:'全款',
    chepaihao:'辽B 88888',
    lianxiren1xingming:'李四',
    lianxiren1guanxi:'朋友',
    lianxiren1shenfenzhenghaoma:'222404198403212222',
    lianxiren2xingming:'李五',
    lianxiren2guanxi:'朋友',
    lianxiren2shenfenzhenghaoma:'222404198403212223',
    lianxiren3xingming:'李三',
    lianxiren3guanxi:'妻子',
    lianxiren3shenfenzhenghaoma:'222404198403212221',
    shoukuankahao:'4444555566667777',
    huankuankahao:'4444555566667777',

  
    
   



  }) 
  const [csrdid,setCardid] = useState()
  const [username,setUsername] = useState()
  const [data,setData] = useState()
  const navigate = useNavigate();
  const [tbl2s1outdata,setTbl2s1outdata ]= useState(null);
  const [useru5outdata,setUseru5outdata ]= useState(null);

  const [querenxinxi,setQuerenxinxi ]= useState({
    querenmima:"",
    mimachk:false
  }
  );

  const [person, setPerson] = useState({
    username: username,
    pswd: 'pas123',
    username2 : username,
    kaishiriqi:'20250401',  //'起始日期格式:yyyymmdd',
    jiesuriqi: '20250501', //'终止日期格式:yyyymmdd',
    汇款金额: 0,
    汇入卡号: "汇入卡号",
    汇入户号: "汇入户号",
    汇入户名: "收款人",
    存款金额: 0,
    贷款金额: 0,
    取款金额: 0,
    销户确认: "确认销户 请填写 ‘yes’ ",
    业务选择: "业务选择"
    
  });



  const [contol1,setContol1] = useState({
    T00检索画面显示: false,
    T01检索画面显示: false,
    T02汇款画面显示: false,
    T03存款画面显示: false,
    T04取款画面显示: false,
    T05贷款画面显示: false,
    T06销户画面显示: false,
    T07汇款完成开关: false,
    T08存款完成开关: false,
    T09取款完成开关: false,
    T10修改信息开始: false,
    T12卡片信息显示: false,
    T13账户更新完成: false,
    贷款申请开始: false,
    信用贷申请:false,
    抵押贷申请:false,
    贷款申请完毕:false,
  

  })


  const [options, setOptions] = useState(['选项1', '选项2']); // 初始选项数组
 
  // 添加新选项的函数
  const addOption = () => {
    const userinput1 = prompt("qing")
    setOptions([...options, userinput1]); // 添加新选项到数组中
  };

  function resetContol1(i){ 
    const newState = {};
    for (const key in contol1) {
      if (contol1.hasOwnProperty(key)) {
        newState[key] = false;
      }
    }
    console.log("newState:",newState);
    newState[i] = true
    setContol1(newState);
    console.log("contol1:",contol1);
    return;
  };
  const [t11卡片信息显示,setT11卡片信息显示] = useState(false)
  // 用于存储选中的对象ID的数组
  const [selectedItems, setSelectedItems] = useState([]);
  const [firstName, setFirstName] = useState([]);

  

    //用于取得from里头select选项中 选中的内容
    const [selectedFruit, setSelectedFruit] = useState('initialValue');


  function 退出登入进行(e){
    navigate('/');
  }


  function 检索交易明细画面显示(e){
            const newState = {};
                for (const key in contol1) {
                  if (contol1.hasOwnProperty(key)) {
                    newState[key] = false;
                  }
                }
                if (zhanghuquerenok) {newState.T12卡片信息显示= true};
                newState.T01检索画面显示 = true;
    
            setContol1(newState)
    
   
      
  }
  function 汇款画面显示(e){
    const newState = {};
    for (const key in contol1) {
      if (contol1.hasOwnProperty(key)) {
          newState[key] = false;
          }
      }
    if (zhanghuquerenok) {newState.T12卡片信息显示= true};            
    newState.T02汇款画面显示 = true;
    
    setContol1(newState)
    
  }
  function 存款画面显示(e){
    const newState = {};
    for (const key in contol1) {
    if (contol1.hasOwnProperty(key)) {newState[key] = false;}} 
    if (zhanghuquerenok) {newState.T12卡片信息显示= true};        
    newState.T03存款画面显示 = true;
    setContol1(newState)    
      
  }
  
  
  async function user检索(e) {
    e.preventDefault();
    try {
      
      const form = e.target;
      const formData = new FormData(form);
      console.log("e=",e.target)
      console.log("formData.entries()=" ,formData.entries())
      // console.log("formdata=",formData.values(0))
      // console.log("formdata=",formData.keys)
      // console.log("person=",person)
      let urlpm01={};
      urlpm01.username = person.username
      urlpm01.pswd = person.pswd
      urlpm01.kaishiriqi = formData.get("kaishiriqi")
      urlpm01.jiesuriqi = formData.get("jiesuriqi")
      urlpm01.cardid = selectedFruit
     
      console.log("urlpm01=",urlpm01)


      // useEffect(() => {
      //   instance.post('/s1', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      //     .then(response => {
      //       setTbl2s1outdata(response.data);
      //     })
      //     .catch(error => {
      //       console.error('Error fetching data:', error);
      //     });
      // }, []); // 空依赖数组表示这个effect只在组件挂载时运行一次
 
      const response = await instance.post('/s1', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      // 只传递 response.data 而不是整个 response 对象
      console.log("response.data=" ,response.data);
      setTbl2s1outdata(response.data);


      //person.data = response.data
      //tbl2d1 = response.data
      //tbl2d2 = response.data


      //console.log("tbl2datas11=",  tbl2s1outdata)
    for (const key in contol1) {
    if (contol1.hasOwnProperty(key)) {newState[key] = false;}}   
    if (zhanghuquerenok) {newState.T12卡片信息显示= true};      
    newState.T00检索画面显示 = true;
    newState.T01检索画面显示 = true;
    setContol1(newState)   

     // navigate('/U402', { state: { data: response.data ,username:response.data[0].username} });
    } catch (error) {
      if (error.response) {
        console.error(`请求失败，状态码: ${error.response.status}, 状态信息: ${error.response.statusText}`);
        alert(`请求失败，状态码: ${error.response.status}, 状态信息: ${error.response.statusText}`);
      } else if (error.request) {
        console.error('没有收到服务器的响应，请检查网络连接。');
        alert('没有收到服务器的响应，请检查网络连接。');
      } else {
        
        console.error('请求设置出错: ', error.message);
        alert('请求设置出错: ' + error.message);
      }
    }
    setShouldRender(true);
  }

  async function 汇款处理开始(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log("e=",e.target)
    console.log("formData.entries()=" ,formData.entries())
    // console.log("formdata=",formData.values(0))
    // console.log("formdata=",formData.keys)
    // console.log("person=",person)
    let urlpm01={};
    urlpm01.cardid = selectedFruit
    urlpm01.username = person.username
    console.log("urlpm01=",urlpm01)

    //汇款用户卡号确认
    const response_huikuan_user = await instance.post('/s2', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
    console.log("response_huikuan_user=",response_huikuan_user)
    console.log("response_huikuan_user.status=",response_huikuan_user.status)
    
    //汇款用户卡号没有错误的时候
    if (response_huikuan_user.status === 200 ) {

      //汇款户名，账号余额确认
      const response_huikuan_usertbl2 = await instance.post('/s5', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      
      if (response_huikuan_usertbl2.status === 200  ) {
        if (response_huikuan_user.data.length === 0) {
          console.error('卡号余额不够,汇款金额为'+formData.get("汇款金额")+'，卡号余额为'+response_huikuan_usertbl2.data[0].yue);
          alert('卡号余额不够,汇款金额为'+formData.get("汇款金额")+'，卡号余额为'+response_huikuan_usertbl2.data[0].yue);
          return;
          
        } 
        //汇款卡号余额确认
        if (response_huikuan_usertbl2.data[0].yue < formData.get("汇款金额")) {
          console.error('卡号余额不够,汇款金额为'+formData.get("汇款金额")+'，卡号余额为'+response_huikuan_usertbl2.data[0].yue);
          alert('卡号余额不够,汇款金额为'+formData.get("汇款金额")+'，卡号余额为'+response_huikuan_usertbl2.data[0].yue);
          
        } else {
          //。汇入账号确认账号
          let urlpm02={};
          urlpm02.username = formData.get("汇入户名")
          urlpm02.cardid = formData.get("汇入卡号")
          console.log("urlpm02=",urlpm02)
          const response_huiluuser = await instance.post('/s2', urlpm02,{headers: { 'X-Custom-Header': 'application/json'}})
          if (response_huiluuser.data.length === 0 ){console.error("汇入卡号或者汇入用户名错误");
            alert('汇入卡号或汇入用户名错误');
            return;
          }
          
          console.log("response_huiluuser =",response_huiluuser)
          const response_huiluuser_tbl2 = await instance.post('/s5', urlpm02,{headers: { 'X-Custom-Header': 'application/json'}})
          console.log("response_huiluuser_tbl2 =",response_huiluuser_tbl2)

          if (response_huiluuser.status === 200 ) {
            const currentDate = new Date();
            console.log("汇款时 react时间=",currentDate)
            
            console.log("response_huiluuser_tbl2.data.length=",response_huiluuser_tbl2.data.length)
            //明细tbl（tbl2）里头追加汇款账号的汇款记录，
            let urlpm03={};
            urlpm03.cardid = response_huikuan_user.data[0].cardid
            urlpm03.username = response_huikuan_user.data[0].username
            urlpm03.cardkb = response_huikuan_user.data[0].cardkb
            urlpm03.dongjiekb = response_huikuan_user.data[0].dongjiekb
            urlpm03.xinyongkb = response_huikuan_user.data[0].xinyongkb
            urlpm03.jiaoyiriqi = format(currentDate,'yyyy-MM-dd HH:mm:ss')
            urlpm03.huikuanjine = Number(formData.get("汇款金额"))
            urlpm03.cunchukb = "汇款"
            urlpm03.yue =  response_huikuan_usertbl2.data[0].yue
            console.log("汇款明细扣除parm=",urlpm03)
            const response_huikuantbl2 = await instance.post('/s4', urlpm03,{headers: { 'X-Custom-Header': 'application/json'}})
            console.log("response_huikuantbl2=",response_huikuantbl2)

            if (response_huikuantbl2.status === 200) {
              
             
             //明细tbl（tbl2）里头追加汇入账号的汇入记录，
              let urlpm04={};
              urlpm04.username = formData.get("汇入户名")
              urlpm04.cardid = formData.get("汇入卡号")
              urlpm04.cardkb = response_huiluuser.data[0].cardkb
              urlpm04.jiaoyiriqi = format(currentDate,'yyyy-MM-dd HH:mm:ss')
              urlpm04.dongjiekb = response_huiluuser.data[0].dongjiekb
              urlpm04.xinyongkb = response_huiluuser.data[0].xinyongkb
              urlpm04.huikuanjine = Number(formData.get("汇款金额"))
              urlpm04.cunchukb = "汇入"
              

              if (response_huiluuser_tbl2.data.length === 0) {urlpm04.yue =0}

              else{urlpm04.yue =   response_huiluuser_tbl2.data[0].yue}
              console.log("urlpm04=",urlpm04)
    
              const response_huilutbl2 = await instance.post('/s4', urlpm04,{headers: { 'X-Custom-Header': 'application/json'}})
              if (response_huilutbl2.status === 200 ) {
                
                
                setContol1(
                  {...contol1,
                    T07汇款完成开关:true
                });
                console.log("汇款完成开关=",contol1.T07汇款完成开关)
              } else {  console.error('汇入明细登入失败');
                
              }
            } else {
              console.error('汇款明细登入失败');

            }
            }else {console.error('汇入账号明细读取失败');

            
          }

          
        }
      } else {console.error('汇款账号明细读取失败');
        
      }

      
    }else{console.error('汇款卡号错误');



    }

    
  }  
  async function 存款处理开始(e){
    e.preventDefault();
    console.log("空按钮")
    const form = e.target;
    const formData = new FormData(form);
    console.log("e=",e.target)
    console.log("formData.entries()=" ,formData.entries())
    let urlpm01={};
    urlpm01.cardid = selectedFruit
    urlpm01.username = person.username
    console.log("urlpm01=",urlpm01)

    //存款卡号确认
    const response_huikuan_user = await instance.post('/s2', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
    console.log("response_huikuan_user=",response_huikuan_user)
    console.log("response_huikuan_user.status=",response_huikuan_user.status)
    if (response_huikuan_user.status != 200) {
      console.error("存款账户确认发生错误");
      alert('存款账户确认发生错误');
      return;
    } 
    if (response_huikuan_user.data.length === 0) {
      console.error("存款卡号错误");
      alert('存款卡号错误');
      return;   
    }
    //存款账号余额确认
    const response_huikuan_usertbl2 = await instance.post('/s5', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
    if (response_huikuan_usertbl2.status != 200) {
      console.error("存款账户明细确认发生错误");
      alert('存款账户明细确认发生错误');
      return;
    } 
    let urlpm03={};
    if (response_huikuan_usertbl2.data.length === 0) {
      urlpm03.yue =  0      
    }else{
      urlpm03.yue =  response_huikuan_usertbl2.data[0].yue
    }
 
 
    //明细tbl（tbl2）里头追加存款账号的存款记录，
    const currentDate = new Date();
    urlpm03.cardid = response_huikuan_user.data[0].cardid
    urlpm03.username = response_huikuan_user.data[0].username
    urlpm03.cardkb = response_huikuan_user.data[0].cardkb
    urlpm03.dongjiekb = response_huikuan_user.data[0].dongjiekb
    urlpm03.xinyongkb = response_huikuan_user.data[0].xinyongkb
    urlpm03.jiaoyiriqi = format(currentDate,'yyyy-MM-dd HH:mm:ss')
    urlpm03.cunkuanjine = Number(person.存款金额)
    urlpm03.cunchukb = "存款"
    console.log("存款明细扣除parm=",urlpm03)
    const response_cunkuantbl2 = await instance.post('/s4', urlpm03,{headers: { 'X-Custom-Header': 'application/json'}})
    console.log("response_huikuantbl2=",response_cunkuantbl2)

    //存款明细登入出错
    if (response_cunkuantbl2.status != 200) {
      console.error("存款明细登入出错");
      alert('存款明细登入出错');
      return;   
    }
    setContol1(
      {...contol1,
      T08存款完成开关:true
    });
  }

  function 取款画面显示(e){
    const newState = [];
    for (const key in contol1) {
    if (contol1.hasOwnProperty(key)) {newState[key] = false;}}   
    if (zhanghuquerenok) {newState.T12卡片信息显示= true};      
    newState.T04取款画面显示 = true;
    console.log("qukuanhuamianxianshi:".contol1);
    setContol1(newState)
      
  }
function 信息更改画面显示(e){
    const newState = [];
    for (const key in contol1) {
    if (contol1.hasOwnProperty(key)) {newState[key] = false;}}   
    if (zhanghuquerenok) {newState.T12卡片信息显示= true};      
    newState.T10修改信息开始 = true;
    setContol1(newState)
      
  }
async function 检索账号处理(e){
    e.preventDefault();
    const newState = [];
    for (const key in contol1) {
    if (contol1.hasOwnProperty(key)) {newState[key] = false;}}   
    console.log("newState:",newState)
    setContol1(newState);
    setZhanghuquerenok(false);
    console.log("contol1:",contol1)
    let urlpm01={};
   
    urlpm01.username = username
    console.log("urlpm01=",urlpm01)

    //取款卡号确认
    const response_user = await instance.post('/s7', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
    console.log("response_user=",response_user)
    if (response_user.status != 200) {
      console.error("账户确认发生错误");
      alert('账户确认发生错误');
      return;
    } 
    if (response_user.data.length === 0) {
      console.error("账户名错误");
      alert('账户名错误');
      return;   
    }
    setData(response_user.data)
    newState.T12卡片信息显示 = true
    setContol1(newState)
    setZhanghuquerenok(true)
    console.log("data=",data)
    
}

  async function 取款处理开始(e){
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log("e=",e.target)
    console.log("formData.entries()=" ,formData.entries())
    let urlpm01={};
    urlpm01.cardid = selectedFruit
    urlpm01.username = person.username
    console.log("urlpm01=",urlpm01)

    //取款卡号确认
    const response_huikuan_user = await instance.post('/s2', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
    console.log("response_huikuan_user=",response_huikuan_user)
    console.log("response_huikuan_user.status=",response_huikuan_user.status)
    if (response_huikuan_user.status != 200) {
      console.error("取款账户确认发生错误");
      alert('取款账户确认发生错误');
      return;
    } 
    if (response_huikuan_user.data.length === 0) {
      console.error("取款卡号错误");
      alert('取款卡号错误');
      return;   
    }
    //取款账号余额确认
    const response_huikuan_usertbl2 = await instance.post('/s5', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
    if (response_huikuan_usertbl2.status != 200) {
      console.error("取款账户明细确认发生错误");
      alert('取款账户明细确认发生错误');
      return;
    } 
    let urlpm03={};
    if (response_huikuan_usertbl2.data.length === 0 || response_huikuan_usertbl2.data[0].yue < person.取款金额) {
      alert('取款卡内余额不足');
      return;     
    }
 
    //明细tbl（tbl2）里头追加存款账号的存款记录，
    const currentDate = new Date();
    urlpm03.yue = response_huikuan_usertbl2.data[0].yue
    urlpm03.cardid = response_huikuan_user.data[0].cardid
    urlpm03.username = response_huikuan_user.data[0].username
    urlpm03.cardkb = response_huikuan_user.data[0].cardkb
    urlpm03.dongjiekb = response_huikuan_user.data[0].dongjiekb
    urlpm03.xinyongkb = response_huikuan_user.data[0].xinyongkb
    urlpm03.jiaoyiriqi = format(currentDate,'yyyy-MM-dd HH:mm:ss')
    urlpm03.qukuanjine = Number(person.取款金额)
    urlpm03.cunchukb = "取款"
    console.log("取款明细扣除parm=",urlpm03)
    const response_qukuantbl2 = await instance.post('/s4', urlpm03,{headers: { 'X-Custom-Header': 'application/json'}})
    console.log("response_huikuantbl2=",response_qukuantbl2)

    //存款明细登入出错
    if (response_qukuantbl2.status != 200) {
      console.error("取款明细登入出错");
      alert('取款明细登入出错');
      return;   
    }
    setContol1(
      {...contol1,
        T09取款完成开关:true
    });
  }
async function 待办贷款业务(params) {
  console.log("daibanyewu")
  alert("daibanyewu")
  
}
async function 贷款申请(params) {
  setContol1({
    ...contol1,
    贷款申请开始:true

  })
  
return;
  
}


async function daikuanshenqingtijiao(params) {
  let urlpm01={};
  urlpm01.daikuanyongtu= Number(daikuan.daikuanyongtu)
  urlpm01.daikuanyongtu= daikuan.daikuanyongtu
  urlpm01.daikuanjine= Number(daikuan.daikuanjine)
  urlpm01.huankuanqixian= Number(daikuan.huankuanqixian)
  urlpm01.jieshouzuigaohuankuane= Number(daikuan.jieshouzuigaohuankuane)
  urlpm01.xingming= daikuan.xingming
  urlpm01.xingbie= daikuan.xingbie
  urlpm01.shenfenzhenghaoma= daikuan.shenfenzhenghaoma
  urlpm01.hunyinzhuangkuang= daikuan.hunyinzhuangkuang
  urlpm01.shenfenzhengdizhi= daikuan.shenfenzhengdizhi
  urlpm01.youbian= daikuan.youbian
  urlpm01.gongyangrenshu= Number(daikuan.gongyangrenshu)
  urlpm01.jiaoyuchengdu= daikuan.jiaoyuchengdu
  urlpm01.shoujihaoma= daikuan.shoujihaoma
  urlpm01.qqweixinhaoma= daikuan.qqweixinhaoma
  urlpm01.youxiang= daikuan.youxiang
  urlpm01.zhuzhaizuoji= daikuan.zhuzhaizuoji
  urlpm01.danzhangxinyongkazuigaojine= Number(daikuan.danzhangxinyongkazuigaojine)
  urlpm01.muqianyiqijuzhu= Number(daikuan.muqianyiqijuzhu)
  urlpm01.qishijuzhushijian= daikuan.qishijuzhushijian
  urlpm01.laishenqingdishijian= daikuan.laishenqingdishijian
  urlpm01.xianjuzhudi= daikuan.xianjuzhudi
  urlpm01.zhuzhaileixing= daikuan.zhuzhaileixing
  urlpm01.zujin= Number(daikuan.zujin)
  urlpm01.yuegong= Number(daikuan.yuegong)
  urlpm01.fangchandizhi= daikuan.fangchandizhi
  urlpm01.goumaijiage= Number(daikuan.goumaijiage)
  urlpm01.cheliangpinpai= daikuan.cheliangpinpai
  urlpm01.cheliangleixing= daikuan.cheliangleixing
  urlpm01.goumaishijian= daikuan.goumaishijian
  urlpm01.gouchejiage= Number(daikuan.gouchejiage)
  urlpm01.gouchefangshi= daikuan.gouchefangshi
  urlpm01.chepaihao= daikuan.chepaihao
  urlpm01.lianxiren1xingming= daikuan.lianxiren1xingming
  urlpm01.lianxiren1guanxi= daikuan.lianxiren1guanxi
  urlpm01.lianxiren1shenfenzhenghaoma= daikuan.lianxiren1shenfenzhenghaoma
  urlpm01.lianxiren2xingming= daikuan.lianxiren2xingming
  urlpm01.lianxiren2guanxi= daikuan.lianxiren2guanxi
  urlpm01.lianxiren2shenfenzhenghaoma= daikuan.lianxiren2shenfenzhenghaoma
  urlpm01.lianxiren3xingming= daikuan.lianxiren3xingming
  urlpm01.lianxiren3guanxi= daikuan.lianxiren3guanxi
  urlpm01.lianxiren3shenfenzhenghaoma= daikuan.lianxiren3shenfenzhenghaoma
  urlpm01.shoukuankahao= daikuan.shoukuankahao
  urlpm01.huankuankahao= daikuan.huankuankahao
  console.log("urlpm01=",urlpm01)
  
    //贷款申请书内容登录
  const response_daikuantbl = await instance.post('/add1daikuantbl', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
  console.log("response_daikuantbl=",response_daikuantbl)
  console.log("response_daikuantbl.status=",response_daikuantbl.status)
  if (response_daikuantbl.status != 200) {
    console.error("贷款信息登入时发生错误");
    alert('贷款信息登入时发生错误');
    return;
  } 
  let urlpm03 = {};
  urlpm03.username= daikuan.xingming
  urlpm03.cardid= daikuan.shoukuankahao
  const response_user = await instance.post('/s2', urlpm03,{headers: { 'X-Custom-Header': 'application/json'}})  
  if (response_user.status != 200) {
    console.error("收款卡号确认时错误");
    alert('收款卡号确认时错误');
    return;
  }
  if (response_user.data.length === 0) {
  console.error("贷款收款卡号错误");
  alert('贷款收款卡号错误');
  return; 
  }

  const response_tbl2 = await instance.post('/i1', urlpm03,{headers: { 'X-Custom-Header': 'application/json'}})  
  if (response_tbl2.status != 200) {
    console.error("收款卡号确认时错误");
    alert('收款卡号确认时错误');
    return;
  }
  console.log("收款卡号确认完：",response_tbl2)

  const currentDate = new Date();
  if (response_tbl2.data.length === 0) {
    urlpm03.yue =0
  } else {
    urlpm03.yue = response_tbl2.data[0].yue
  }
  urlpm03.cardid = response_user.data[0].cardid
  urlpm03.username = response_user.data[0].username
  urlpm03.cardkb = response_user.data[0].cardkb
  urlpm03.dongjiekb = response_user.data[0].dongjiekb
  urlpm03.xinyongkb = response_user.data[0].xinyongkb
  urlpm03.jiaoyiriqi = format(currentDate,'yyyy-MM-dd HH:mm:ss')
  urlpm03.daikuanjine = Number(daikuan.daikuanjine)
  urlpm03.cunchukb = "放贷"
  console.log("贷款放款明细parm=",urlpm03)
  const response_cunkuantbl2 = await instance.post('/s4', urlpm03,{headers: { 'X-Custom-Header': 'application/json'}})
  console.log("response_贷款kuantbl2=",response_cunkuantbl2)

  //放款明细登入出错
  if (response_cunkuantbl2.status != 200) {
  console.error("放款明细登入出错");
  alert('放款明细登入出错');
  return; 
  }
  setContol1(
      {...contol1,
      贷款申请完毕:true
    });
alert("贷款信息登录，放款完毕")
return;
  
}
  async function 检索信息开始(params) {
     let urlpm01={};
      urlpm01.cardid = selectedFruit
     
      console.log("urlpm01=",urlpm01)
 
      const response = await instance.post('/u5', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      // 只传递 response.data 而不是整个 response 对象
      console.log("response.data=" ,response.data);
      
      if (response.status !== 200 ){
        alert('卡信息取得错误')
        return;
      };
      setUseru5outdata(response.data[0]);
      setT11卡片信息显示(true)
      
      setQuerenxinxi({...querenxinxi,querenmima:useru5outdata.pswd})   
      console.log("useru5outdata=",useru5outdata)
      console.log("t11=",t11卡片信息显示)

  }
  async function 账号更新处理(params) {
    setContol1(false)
    setContol1({...contol1,T10修改信息开始:true})
    setQuerenxinxi({...querenxinxi,mimachk:false})
    console.log("user5outdata.paswd=",useru5outdata.pswd)
    console.log("querenmima=",querenxinxi.querenmima)
    if (useru5outdata.pswd !== querenxinxi.querenmima) {
      setQuerenxinxi({...querenxinxi,mimachk:true})
      return;
    }
    console.log("useru5outdata=",useru5outdata)

    let urlpm01={};
    urlpm01.username = useru5outdata.username
    urlpm01.pswd = useru5outdata.pswd
    urlpm01.cardid = useru5outdata.cardid
    urlpm01.cardkb = useru5outdata.cardkb
    urlpm01.addres = useru5outdata.addres
    urlpm01.email = useru5outdata.email
    urlpm01.tel = useru5outdata.tel
    urlpm01.xinyongkb = useru5outdata.xinyongkb
    urlpm01.dongjiekb = useru5outdata.dongjiekb
    urlpm01.faxingriqi = useru5outdata.faxingriqi
    console.log(urlpm01)
   const response = await instance.post('/userup01', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
  if (response.status !== 200 ){
        alert('更新账户系统错误')
        return;
      };
  
  setContol1({...contol1,T13账户更新完成:true})
  
  }

    return(
    <div > 
      
      <button className='u402ziti1'>用户{person.username}登入:</button>
      {guanlijibie === "1" && 
        
        <button onClick={()=> setContol1({...contol1,贷款申请开始:true})}>贷款申请</button>
        
      }
      {guanlijibie === "2" && 
        
        <button onClick={待办贷款业务}>待办贷款业务</button>
        
      }
        
      <button className='u402tuichu' onClick={退出登入进行}>退出</button>
      <p>输入用户名:<input type='text' onChange={e => setUsername(e.target.value)}/></p>
              <button onClick={检索账号处理}>确认</button>
      
      <div className='' >
        {contol1.贷款申请开始 && (
          
          <div >
          
          <p className='u403dai0001'>贷款申请表:</p>
   


          <select className='u403dai0002' value={person.cardkb} 
          onChange={e => setPerson({...person,cardkb:e.target.value})}>
          <option value="贷款申请类型">贷款申请类型</option>
          
          <option onClick={() => {setContol1({...contol1,信用贷申请:false,抵押贷申请:true})}} value="抵押贷">抵押贷</option>
          <option onClick={function aaaa(){ 
                const newState = {};
                for (const key in contol1) {
                  if (contol1.hasOwnProperty(key)) {
                    newState[key] = false;
                  }
                }
                newState.贷款申请开始 = true;
                newState.信用贷申请 = true;
    
            setContol1(newState)

           }}>信用贷</option>

          </select >
     
          </div>

        )}
        {contol1.信用贷申请 &&(
                   
          <div >
            <p className='u403dai0005'></p>

            <label className='u403dai0006' >
              <p>
                借款用途：
                <input type="radio" name="myRadio" value="经营" onChange={e => setDaikuan({...daikuan,daikuanyongtu:e.target.value})}/> 经营
                <input type="radio" name="myRadio" value="资金周转" onChange={e => setDaikuan({...daikuan,daikuanyongtu:e.target.value})}defaultChecked={true} /> 资金周转
                <input type="radio" name="myRadio" value="房屋装修" onChange={e => setDaikuan({...daikuan,daikuanyongtu:e.target.value})}/> 房屋装修
                <input type="radio" name="myRadio" value="购车" onChange={e => setDaikuan({...daikuan,daikuanyongtu:e.target.value})}/> 购车
                <input type="radio" name="myRadio" value="个人消费" onChange={e => setDaikuan({...daikuan,daikuanyongtu:e.target.value})}/> 个人消费 
                <input type="radio" name="myRadio" defaultValue="其他" onChange={e => setDaikuan({...daikuan,daikuanyongtu:e.target.value})} 
                  style={{color:'blue'}} 
                /> 其他：
                <input type="text" name="myRadio"  onChange={e => setDaikuan({...daikuan,daikuanyongtu:e.target.value})} 
                  style={{ width: '80px', fontSize: '14px', height: '20px' ,color:'blue'}} 
                  
                />
                <label>  申请金额：
                  <input name="daikuanjine" type="text" className='u403dai0007 u403dai0010'
                    style={{color: 'blue'}}
                      defaultValue={daikuan.daikuanjine} onChange={e => setDaikuan({...daikuan,daikuanjine:e.target.value})}
                  /> 元。    还款期限：
                  <input name="huankuanqixian" type="text" className='u403dai0007 u403dai0009'
                      style={{color: 'blue'}}
                      defaultValue={daikuan.huankuanqixian} onChange={e => setDaikuan({...daikuan,huankuanqixian:e.target.value})}
                  />  月。    接受最高还款额：
                  <input name="jieshouzuigaohuankuane" type="text" className='u403dai0007' 
                      style={{ width: '80px', fontSize: '14px', height: '20px' ,color:'blue'}} 
                      defaultValue={daikuan.jieshouzuigaohuankuane} onChange={e => setDaikuan({...daikuan,jieshouzuigaohuankuane:e.target.value})}
                  />  元月。
                </label>
                <p className='u403dai0005'></p>
                <p>
                  个人信息：
                  <label>
                    姓名：
                    <input defaultValue={daikuan.xingming} name='xingming' type='text' onChange={(e) => setDaikuan({...daikuan,xingming:e.target.value}) } className='u403dai0007' 
                      style={{ width: '100px', fontSize: '14px', height: '20px',color:'blue'}}
                    />
                    <div style={{marginLeft :'20px'}}>性别：（ 男：</div>
                    <input name='xingbie' type='radio' onChange={(e) => setDaikuan({...daikuan,xingbie:e.target.value}) } value='男'
                    /> 女：
                    <input name='xingbie' type='radio' onChange={(e) => setDaikuan({...daikuan,xingbie:e.target.value}) } value='女'
                    />   ）
                    <div style={{marginLeft :'20px'}}>身份证号码：</div>
                    
                    <input  defaultValue={daikuan.shenfenzhenghaoma}  name='shenfenzhenghaoma' type='text' onChange={(e) => setDaikuan({...daikuan,shenfenzhenghaoma:e.target.value}) } className='u403dai0007 u403dai0010'
                      style={{color:'blue',width:'160px'}}
                    />
                    <div style={{marginLeft :'20px'}}>婚姻状况：</div>
                    <input  defaultValue={daikuan.hunyinzhuangkuang}  name='hunyinzhuangkuang' type='text' onChange={(e) => setDaikuan({...daikuan,hunyizhuangkuang:e.target.value}) } className='u403dai0007' 
                      style={{ width: '50px', fontSize: '14px', height: '20px' ,color: 'blue'}}
                    />

                  </label>
                  <label>
                    身份证地址：
                      <input  defaultValue={daikuan.shenfenzhengdizhi}  name='shenfenzhengdizhi' type='text' onChange={(e) => setDaikuan({...daikuan,shenfenzhengdizhi:e.target.value})} 
                        style={{color:'blue',width:'350px',height:'20px',fontSize:'14px'}} className='u403dai0007'
                      />
                     <div style={{marginLeft:'20px'}}/>邮编：
                     <input  defaultValue={daikuan.youbian}  name='youbian' type='text' onChange={(e) => setDaikuan({...daikuan,youbian:e.target.value})} 
                      style={{color:'blue',width:'80px',height:'20px',fontSize:'14px'}} className='u403dai0007'
                     /> 
                  </label>
                  <label>
                    供养人数：
                    <input  defaultValue={daikuan.gongyangrenshu}  name='gongyangrenshu' onChange={(e) => setDaikuan({...daikuan,gongyangrenshu})}
                      style={{color:'blue',width:'30px',height:'20px',fontSize:'14px'}} 
                    />人
                    <div style={{marginLeft:'20px'}}/> 教育程度：
                    <input name='jiaoyuchengdu' type='radio' value='本科' onChange={(e) => setDaikuan({...daikuan,jiaoyuchengdu:e.target.value})} />
                      本科<div style={{marginLeft:'20px'}}/>
                    <input name='jiaoyuchengdu'type='radio' value='专科' onChange={(e) => setDaikuan({...daikuan,jiaoyuchengdu:e.target.value})} />
                      专科<div style={{marginLeft:'20px'}}/>
                    <input name='jiaoyuchengdu'type='radio' value='硕士及以上' onChange={(e) => setDaikuan({...daikuan,jiaoyuchengdu:e.target.value})} />
                      硕士及以上<div style={{marginLeft:'20px'}}/>
                      手机号码：
                    <input  defaultValue={daikuan.shoujihaoma}  onChange={(e) => setDaikuan({...daikuan,shoujihaoma:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'14px'}}
                    />
                  </label>
                  <label>

                    QQ/微信：
                    <input  defaultValue={daikuan.qqweixinhaoma}  onChange={(e) => setDaikuan({...daikuan,qqweixinhaoma:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'14px'}}
                    /><div style={{marginLeft:'20px'}}/>
                    邮箱：
                    <input  defaultValue={daikuan.youxiang}  onChange={(e) => setDaikuan({...daikuan,youxiang:e.target.value})}
                      style={{color:'blue',width:'230px',height:'20px',fontSize:'14px'}}
                    /><div style={{marginLeft:'20px'}}/>
                    住宅座机：
                    <input  defaultValue={daikuan.zhuzhaizuoji}  onChange={(e) => setDaikuan({...daikuan,zhuzhaizuoji:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'14px'}}
                    /><div style={{marginLeft:'20px'}}/>

                  </label>
                  <label>
                    单张信用卡最高额度：
                    <input  defaultValue={daikuan.danzhangxinyongkazuigaojine}  onChange={(e) => setDaikuan({...daikuan,danzhangxinyongkazuigaojine:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'14px'}}
                    /><div style={{marginLeft:'20px'}}/>
                    目前一起居住人数：
                    <input  defaultValue={daikuan.muqianyiqijuzhu}  onChange={(e) => setDaikuan({...daikuan,muqianyiqijuzhu:e.target.value})}
                      style={{color:'blue',width:'30px',height:'20px',fontSize:'14px'}}
                    />人<div style={{marginLeft:'20px'}}/>
                    起始居住时间：
                    <input  defaultValue={daikuan.qishijuzhushijian}  type='date' onChange={(e) => setDaikuan({...daikuan,qishijuzhushijian:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'10px'}}
                    /><div style={{marginLeft:'20px'}}/>
                    {console.log("qishijuzhushijian:",daikuan.qishijuzhushijian)}
                  </label>
                  <label>
                    来申请地时间：
                    <input  defaultValue={daikuan.laishenqingdishijian}  type='date' onChange={(e) => setDaikuan({...daikuan,laishenqingdishijian:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'10px',alignItems:'center',justifyContent:'center'}}
                    /><div style={{marginLeft:'20px'}}/>
                    现居住地：
                    <input  defaultValue={daikuan.xianjuzhudi}  type='text' onChange={(e) => setDaikuan({...daikuan,xianjuzhudi:e.target.value})}
                      style={{color:'blue',width:'330px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /><div style={{marginLeft:'20px'}}/>
                    
                  </label>
                  <label>
                    住宅类型：
                    <input name='zhuzaileixing' type='radio' value='自购' onChange={(e) => setDaikuan({...daikuan,zhuzhaileixing:e.target.value})}
                    />自购
                    <input name='zhuzaileixing' type='radio' value='亲属' onChange={(e) => setDaikuan({...daikuan,zhuzhaileixing:e.target.value})}
                    />亲属
                    <input name='zhuzaileixing' type='radio' value='单位宿舍' onChange={(e) => setDaikuan({...daikuan,zhuzhaileixing:e.target.value})}
                    />单位宿舍
                    <input name='zhuzaileixing' type='radio' value='租房' onChange={(e) => setDaikuan({...daikuan,zhuzhaileixing:e.target.value})}
                    />租房（租金¥
                    <input  defaultValue={daikuan.zujin}  type='text'  onChange={(e) => setDaikuan({...daikuan,zujin:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    />元）
                    <input name='zhuzaileixing' type='radio' value='按揭' onChange={(e) => setDaikuan({...daikuan,zhuzhaileixing:e.target.value})}
                    />按揭（月供¥
                    <input  defaultValue={daikuan.yuegong} type='text'  onChange={(e) => setDaikuan({...daikuan,yuegong:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    />元）
                  </label>
                  <label>
                    收款用卡号：
                    <input  defaultValue={daikuan.shoukuankahao} type='text'  onChange={(e) => setDaikuan({...daikuan,shoukuankahao:e.target.value})}
                      style={{color:'blue',width:'170px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    />
                  </label>
                  <label>
                    还款用卡号：
                    <input  defaultValue={daikuan.huankuankahao} type='text'  onChange={(e) => setDaikuan({...daikuan,huankuankahao:e.target.value})}
                      style={{color:'blue',width:'170px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    />
                  </label>
                  <label className='u403dai0005'></label>
                  <label>
                    房产信息：
                  </label>
                  <label>
                    房产地址：
                    <input  defaultValue={daikuan.fangchandizhi}  type='text'  onChange={(e) => setDaikuan({...daikuan,fangchandizhi:e.target.value})}
                      style={{color:'blue',width:'430px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /><div style={{marginLeft:'20px'}}/>
                    购买价格：
                    <input  defaultValue={daikuan.goumaijiage}  type='text'  onChange={(e) => setDaikuan({...daikuan,goumaijiage:e.target.value})}
                      style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /><div style={{marginLeft:'20px'}}/>
                  </label>
                  <label className='u403dai0005'></label>
                  <label>
                    汽车资料：
                  </label>
                  <label>
                    车辆品牌：
                      <input  defaultValue={daikuan.cheliangpinpai} type='text'  onChange={(e) => setDaikuan({...daikuan,cheliangpinpai:e.target.value})}
                        style={{color:'blue',width:'230px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                      /><div style={{marginLeft:'20px'}}/>
                      <input name='cheqf' type='radio' value='国产' onChange={(e) => setDaikuan({...daikuan,cheliangleixing:e.target.value})}
                      />国产
                      <input name='cheqf' type='radio' value='进口' onChange={(e) => setDaikuan({...daikuan,cheliangleixing:e.target.value})}
                      />进口
                      <div style={{marginLeft:'40px'}}/>
                      购买时间：
                      <input  defaultValue={daikuan.goumaishijian} type='date'  onChange={(e) => setDaikuan({...daikuan,goumaishijian:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'10px',alignItems:'center',justifyContent:'center'}}
                      />
                  </label>
                  <label>
                    购车价格：¥
                    <input  defaultValue={daikuan.gouchejiage} type='text'  onChange={(e) => setDaikuan({...daikuan,gouchejiage:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    />
                    <div style={{marginLeft:'50px'}}/>
                    购车方式：
                    <input name='gouchefangshi' type='radio' value='全款' onChange={(e) => setDaikuan({...daikuan,gouchefangshi:e.target.value})}
                      />全款
                    <input name='gouchefangshi' type='radio' value='二手' onChange={(e) => setDaikuan({...daikuan,gouchefangshi:e.target.value})}
                      />二手
                    <input name='gouchefangshi' type='radio' value='按揭' onChange={(e) => setDaikuan({...daikuan,gouchefangshi:e.target.value})}
                      />按揭 <div style={{marginLeft:'50px'}}/>车牌号：
                    <input  defaultValue={daikuan.chepaihao} type='text'  onChange={(e) => setDaikuan({...daikuan,chepaihao:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> 
                  </label>
                  <label className='u403dai0005'></label>
                  <label>联系人信息：</label>
                  <label>
                    
                    姓名：
                    <input  defaultValue={daikuan.lianxiren1xingming} type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren1xingming:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                    关系：
                    <input  defaultValue={daikuan.lianxiren1guanxi} type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren1guanxi:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                    身份证号码：
                    <input  defaultValue={daikuan.lianxiren1shenfenzhenghaoma} type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren1shenfenzhenghaoma:e.target.value})}
                        style={{color:'blue',width:'220px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                  </label>
                  <label>
                    
                    姓名：
                    <input type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren2xingming:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                    关系：
                    <input type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren2guanxi:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                    身份证号码：
                    <input type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren2shenfenzhenghaoma:e.target.value})}
                        style={{color:'blue',width:'220px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                  </label>
                  <label>
                    
                    姓名：
                    <input type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren3xingming:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                    关系：
                    <input type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren3guanxi:e.target.value})}
                        style={{color:'blue',width:'130px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                    身份证号码：
                    <input type='text'  onChange={(e) => setDaikuan({...daikuan,lianxiren3shenfenzhenghaoma:e.target.value})}
                        style={{color:'blue',width:'220px',height:'20px',fontSize:'14px',alignItems:'center',justifyContent:'center'}}
                    /> <div style={{marginLeft:'30px'}}/>

                  </label>
                  
                  <button onClick={daikuanshenqingtijiao}>提交申请</button>

                </p>
              </p>
              {console.log("daikuan,daikuanyongtu=",daikuan.daikuanyongtu)}
              
            </label>
          
          {/*    
          
          
          jiekuanyongtu 借款用途
          username:'', //用户名
    zhengjianleixing:'', //证件类型
    zhengjianhaoma:'', //证件号码
    daikuanjine:0,  //贷款金额
    diyawu:'',  //抵押物
    diyawuxiangxi:'', //抵押详细
    huankuanfangshi:'', //还款方式
    daikuanriqi:'', //贷款日期
    daikuanlixi:0, //贷款利息
    huankuanqixian:'', //还款期限
    接受最高还款额
    个人信息
    姓名
    性别
    身份证号码：
    婚姻状况
    身份证地址
    邮编
    供养人数
    教育程度 硕士以上，本科，大专，手机号码
    QQ号码 微信号码 邮箱 住宅座机 
    单张信用卡最高额度
    目前一起居住人数
    起始居住时间
    来申请地时间
    现居住地
    住宅类型：自购亲属单位宿舍 租房（租金） 按揭（月供¥）

    房产信息
    房产地址   购买价格
    购买日期。 购买方式。按揭 自建 全款/一次性付款
    房产类型：商业按揭房 全款购房 公积金按揭购房 自建房 经济适用房 抵押房
    产权比例 建筑面积 购买单价 按揭银行 贷款期限  每月还款 贷款总额
    车辆信息
    车辆品牌。 国产 进口。购买时间

    购车价格 购买方式。全款 二手。按揭。车牌号
    按揭总额。期限。已经行驶里数 月供

    职业信息
    单位名称。单位电话。员工人数
    单位地址。行业类别
    单位性质 国企  机关事业 民营 私营 个体 三资企业 入职时间
    所在部门。职务 每月发薪日 发新方式  现金 打卡。转账 每月收入 其他收入 月总收入
    企业信息
    经营类别。私营。民营 股份有限 个体。注册资本   占股比例
    经营场地类型。自由 租用 按揭。月租金。雇员人总数 利润率 年收入。企业净利润率 %

    联系人信息（精确到门牌号码）
    

    jinjilianxirenming:'', //紧急联络人
    jinjilianxirenhaoma:'', //紧急联络人电话
    danbaoren:'', //担保人
    danbaorenzhengjainleixing:'', //担保人证件类型
    danbaorenzhengjianhaoma:'', //担保人证件号码
    shouliyuanmingzi:'', //受理员名字
    shouliyuangonghao:'', //受理员工号
    hetongbianhao:'', //合同编号} */
          }
          </div>
        )
        }
        {contol1.抵押贷申请 &&(
          console.log("diyadai")
          )
        }
        
          {contol1.T12卡片信息显示 && 
          (
            <label className='u402f'>
              
              
            选择操作：
              <select name="业务选择" >
                <option value="业务选择">业务选择</option>
                <option onClick={检索交易明细画面显示} value="检索交易明细">检索交易明细</option>
                <option onClick={汇款画面显示} value="汇款">汇款</option>
                <option onClick={存款画面显示} value="存款">存款</option>
                <option onClick={取款画面显示} value="取款">取款</option>
                <option onClick={信息更改画面显示} value="信息修改">信息修改</option>


              </select>
              </label> 
              
          )
          }

          {/*kaishi item1 */}

         {contol1.T01检索画面显示 ?

         
          <div className="u402d1">

          <form method="post" onSubmit={user检索}>
              <h3 className='u4b3juzhong' >检索 (终止日期前为止交易记录)</h3>

              <div className='u402bu5'>

                      <div >起始日期</div>
                            <input name="kaishiriqi" type="date"
                              defaultValue={person.kaishiriqi} 
                              />    
              </div>

              <div className='u402bu5'>
                      <div >终止日期</div>
                      <input name="jiesuriqi"  type="date"
                        defaultValue={person.jiesuriqi} 
                      />
              </div>
              <br />
              <div>
              <p>
                   选择卡：
               
                <select value={selectedFruit} 
                         onChange={e => setSelectedFruit(e.target.value)}>
                 <option value="选择卡号">选择卡号</option>
                {data.map(data => (
                      <option key={data.id} name="cardid" defaultValue="选择卡号" value={data.cardid} >{data.cardid}</option> 
                   ))}
                </select>
                </p>
                <br />
                <br />
                  <button   type="submit"  className='u402bu6' >检索开始</button>
              </div>
            </form>
          </div>:<div></div>
        }
{/* Item1 neirong end . */}

{/* Item101 neirong start. */}
        {contol1.T00检索画面显示 ?
        
          <div className='u402selectout'>
        
            <table  border="1">
            <thead >
              
              <tr>
                <th className='u402th u402th1'>卡号 </th>
                <th className='u402th u402th1'>交易日期</th>
                <th className='u402th u402th1'>交易区分</th>
                <th className='u402th u402th1'>交易金额</th>
                <th className='u402th u402th1'>结算后金额</th>
              </tr>
              
            </thead >
            <tbody >
              {tbl2s1outdata.map(tbl2s1outdata => (
                <tr key={tbl2s1outdata.id}>
                  <td className='u402th u402th3'>{tbl2s1outdata.cardid}</td>
                  <td className='u402th u402th3'>{tbl2s1outdata.jiaoyiriqi}</td>
                  <td className='u402th u402th3'>{tbl2s1outdata.cunchukb}</td>
                  <td className='u402th u402th3'>{tbl2s1outdata.jine}</td>
                  <td className='u402th u402th3'>{tbl2s1outdata.yue}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>:<div></div>}
{/* Item101 neirong end. <Item101 /> */}      
        
        
{/* Item2 huikuan neirong start. */}
      {contol1.T02汇款画面显示 ?  
      <div>
        <form className='u402d1' onSubmit={汇款处理开始}>
          <h3 >汇款</h3>
          <label>
            <div className='u402bu5'>
                   <div >汇款金额</div>
                  <input name="汇款金额"  value={person.汇款金额} onChange={e => setPerson({...person,汇款金额:e.target.value})}
                  />
            </div>
            </label>
            <label>
                <p>
                   选择汇款卡：
               
                <select value={selectedFruit} 
                         onChange={e => setSelectedFruit(e.target.value)}>
                 <option value="选择卡号">选择卡号</option>
                {data.map(data => (
                      <option key={data.id} name="cardid" defaultValue="选择卡号" value={data.cardid} >{data.cardid}</option> 
                   ))}
                </select>
                </p>
              </label>
              <label>
            <div className='u402bu5'>
                  <div >收 款 人</div>
                  <input name="汇入户名" value={person.汇入户名} onChange={e => setPerson({...person,汇入户名:e.target.value})}
                    
                  />
  
            </div>
            </label>
          
            <p>
            <div className='u402bu5'>
            <div >汇入卡号</div>
                  <input name="汇入卡号"  value={person.汇入卡号} onChange={e => setPerson({...person,汇入卡号:e.target.value})}
                    
                  />
            </div>
            
            </p>
            <div>
                 <button type='submit'  className='u402bu6'>进行汇款</button>
            </div>
        </form>
        {console.log("huikuanwanchengkaiguan=",contol1.T07汇款完成开关)}
        {contol1.T07汇款完成开关 ? (
          <div >
        <ReactModal
        isOpen={contol1.T07汇款完成开关}
        onRequestClose={() => setContol1({...contol1,T07汇款完成开关:false})}
        
        contentLabel="汇款完成"
      >
      
        <h2>汇款完成</h2>
        <p> 汇款金额： {person.汇款金额} 元</p> 
        <p> 汇款卡号： {selectedFruit} </p> 
        <p> 汇入卡号： {person.汇入卡号} </p> 
        <p> 收款人： {person.汇入户名} </p> 
        <button onClick={() => setContol1({...contol1,T07汇款完成开关:false})}>关闭</button>
        
      </ReactModal>
          </div>
        ):<div></div>}
        </div>
        
        :<div ></div>}
{/* Item2 neirong.   <Item2 />  */}

{/* Item3 存款业务 neirong.   <Item2 />  */}
      {contol1.T03存款画面显示 ? 
      <div>
        <form className="u402存款1" onSubmit={存款处理开始}>
          <hr/>
        <h3  >存款</h3>
        <label>
                <p className='u402存款2'>
                   选择卡：
               
                <select value={selectedFruit} 
                         onChange={e => setSelectedFruit(e.target.value)}>
                 <option value="选择卡号">选择卡号</option>
                {data.map(data => (
                      <option key={data.id} name="cardid" defaultValue="选择卡号" value={data.cardid} >{data.cardid}</option> 
                   ))}
                </select>
                </p>
          </label>
        <div className='u402存款2'>
              <div >存款金额 :</div>
                <input name="存款金额"  dValue={person.存款金额} onChange={e => setPerson({...person, 存款金额:e.target.value})}
                />
          </div>
          <hr />
          <div>
                <button type='submit'  className='u402bu6' >进行存款</button>
          </div>
      </form>
      {contol1.T08存款完成开关 && (
        <div>
      <ReactModal
      isOpen={contol1.T08存款完成开关}
      onRequestClose={() => setContol1({...contol1,T08存款完成开关:false})}
      contentLabel="存款完成"
    >
      <h2>存款完成</h2>
      <p> 存款金额： {person.存款金额} 元</p> 
      <p> 存款账户： {selectedFruit} </p> 
      
      <button onClick={() => setContol1({...contol1,T08存款完成开关:false})}>关闭</button>
    </ReactModal>
        </div>
      )}
    </div>

      :<div></div>

      } 
      {/*取款业务模块  开始*/}
            {contol1.T04取款画面显示 ? 
            <div>
              <form className="u402存款1" onSubmit={取款处理开始}>
                <hr/>
              <h3  >取款</h3>
              <label>
                      <p className='u402存款2'>
                         选择卡：
                     
                      <select value={selectedFruit} 
                               onChange={e => setSelectedFruit(e.target.value)}>
                       <option value="选择卡号">选择卡号</option>
                      {data.map(data => (
                            <option key={data.id} name="cardid" defaultValue="选择卡号" value={data.cardid} >{data.cardid}</option> 
                         ))}
                      </select>
                      </p>
                </label>
              <div className='u402存款2'>
                    <div >取款金额 :</div>
                      <input name="取款金额"  dValue={person.取款金额} onChange={e => setPerson({...person, 取款金额:e.target.value})}
                      />
                </div>
                <hr />
                <div>
                      <button type='submit'  className='u402bu6' >进行取款</button>
                </div>
            </form>
            {/* 修改信息处理 开始 */}
            {contol1.T09取款完成开关 && (
              <div>
            <ReactModal
            isOpen={contol1.T09取款完成开关}
            onRequestClose={() => setContol1({...contol1,T09取款完成开关:false})}
            contentLabel="取款完成"
          >
            <h2>取款完成</h2>
            <p> 取款金额： {person.取款金额} 元</p> 
            <p> 取款账户： {selectedFruit} </p> 
            
            <button onClick={() => setContol1({...contol1,T09取款完成开关:false})}>关闭</button>
          </ReactModal>
              </div>
            )}
          </div>
      
            :<div></div>

            }   
            {/*取款业务模块  结束*/}
    {/*修改信息处理 开始*/}
    {contol1.T10修改信息开始? 
      <div>
        
          <hr/>
        <h3  >修改信息处理</h3>
        <label>
                <p className='u402存款2'>
                   选择卡：
               
                <select value={selectedFruit} 
                         onChange={e => setSelectedFruit(e.target.value)}>
                 <option value="选择卡号">选择卡号</option>
                {data.map(data => (
                      <option onClick={检索信息开始} key={data.id} name="cardid" defaultValue="选择卡号" value={data.cardid} >{data.cardid}</option> 
                   ))}
                </select>
                </p>
          </label>
       
      {t11卡片信息显示 && (
        <div>
          {console.log(useru5outdata)}

           
            <p>卡号:{useru5outdata.cardid}</p>
            <p>卡类型： {useru5outdata.cardkb} </p>
            <p>发行日： {useru5outdata.faxingriqi} </p>
           
            <p> 用户名: <input defaultValue={useru5outdata.username} type="text" onChange={e => setUseru5outdata({...useru5outdata, username:e.target.value})} /></p>
            <p>密码： <input defaultValue={useru5outdata.pswd} type="text" onChange={e => setUseru5outdata({...useru5outdata, pswd:e.target.value})} /></p>
            <p>确认密码： <input Value={useru5outdata.pswd} type="text" onChange={e => setQuerenxinxi({...querenxinxi, querenmima:e.target.value})} /></p>
            <p>地址： <input defaultValue={useru5outdata.addres} type="text" onChange={e => setUseru5outdata({...useru5outdata, addres:e.target.value})} /></p>
   
            <p>电子邮箱： <input defaultValue={useru5outdata.email} type="text" onChange={e => setUseru5outdata({...useru5outdata, email:e.target.value})} /></p>
            <p>电话号码： <input defaultValue={useru5outdata.tel} type="text" onChange={e => setUseru5outdata({...useru5outdata, tel:e.target.value})} /></p>
            <p>信用等级： <input defaultValue={useru5outdata.xinyongkb} type="text" onChange={e => setUseru5outdata({...useru5outdata, xinyongkb:e.target.value})} /></p>
            <p>冻结区分： <input defaultValue={useru5outdata.dongjiekb} type="text" onChange={e => setUseru5outdata({...useru5outdata, dongjiekb:e.target.value})} /></p>
          
          <button onClick={账号更新处理}>更新信息</button>
           {querenxinxi.mimachk && (
              <p className=''>两次输入的密码不一致</p>


           )} 



          </div>


      )}
      {contol1.T13账户更新完成 && (
        <div>
      <ReactModal
      isOpen={contol1.T13账户更新完成}
      onRequestClose={() => setContol1({...contol1,T13账户更新完成:false})}
      contentLabel="存款完成"
    >
      <h2>账户更新完成</h2>
      
      <button onClick={() => setContol1({...contol1,T13账户更新完成:false})}>关闭</button>
    </ReactModal>
        </div>
      )}
    </div>

      :<div></div>

      } 
      {/* 修改信息处理 结束 */}
        </div>
    </div>
    );
  }

