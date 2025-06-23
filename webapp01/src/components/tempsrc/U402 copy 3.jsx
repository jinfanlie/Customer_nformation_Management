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
import { response } from 'express';

export default function U402() {

  const location = useLocation();
  const { data,username } = location.state;
  const navigate = useNavigate();
  const [tbl2s1outdata,setTbl2s1outdata ]= useState(null);
  const [kaishiriqi2,setKaishiriqi2 ]= useState('起始日期格式:yyyymmdd');
 let tbl2d1 = [];
 let tbl2d2 = new Array();  
  const [person, setPerson] = useState({
    username: username,
    pswd: 'pas123',
    username2 : username,
    kaishiriqi:'20250401',  //'起始日期格式:yyyymmdd',
    jiesuriqi: '20250501', //'终止日期格式:yyyymmdd',
    userdata: data,
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
  const [tbl2data,setTbl2data] = useState({
    cardid: "4444111122223333",
    cunchukb: "1",
    dongjiekb: "0",
    id: 7,
    jiaoyiriqi: "20250402",
    jine: 300,
    username: "jin1",
    xinyongkb: "2",
    yue: 400


  })


  const [contol1,setContol1] = useState({
    T00检索结果显示: false,
    T01检索结果显示: false,
    T02汇款结果显示: false,
    T03存款结果显示: false,
    T04取款结果显示: false,
    T05贷款结果显示: false,
    T06销户画面显示: false,
    
    T08存款完成开关: false,
    T09取款完成开关: false


  })
  const [t07汇款完成开关,setT07汇款完成开关] = useState(false)
  // 用于存储选中的对象ID的数组
  const [selectedItems, setSelectedItems] = useState([]);
  const [firstName, setFirstName] = useState([]);

  
    // 处理选项变化的事件处理函数
    const handleChange = (event) => {
      const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
      setSelectedItems(selectedOptions);
    };
    const [selectedValue, setSelectedValue] = useState(null);
    const handleChange2 =(selectedOption) => {
      setSelectedValue(selectedOption);
    };
    //用于取得from里头select选项中 选中的内容
    const [selectedFruit, setSelectedFruit] = useState('initialValue');
    const [shouldRender, setShouldRender] = useState(false);


    const mapMap = () => {
      const iterator = data.entries();
      const els = [];
      for (let i = 0; i < data.size; i++) {
        els.push(<div>{iterator.next().value.at(1)}</div>);
      }
      return els;
}

const seleop1 = data.map(data => (
  <option key={data.id} value={data.cardid}>{data.cardid}</option>
))
//console.log("selectop=",seleop1)

//避免child的参数 value变化时 才重新渲染。
const Child = React.memo(({ value }) => {
  console.log('Child 渲染');
  return <div>{value}</div>;
});

const inputRef = useRef(null);



  function kaishiriqiChange(e) {
    setPerson({
      ...contol1,
      kaishiriqi: e.target.value
    });
  }


  function 检索交易明细画面显示(e){

    //console.log("U402_userdata=",person.username)
    
    setContol1({
      ...contol1,
      T00检索结果显示: false,
      T01检索画面显示: true,
      T02汇款画面显示: false,
      T03存款画面显示: false,
      T04取款画面显示: false,
      T05贷款画面显示: false,
      T06销户画面显示: false,
      
      T08存款完成开关: false,
      T09取款完成开关: false
      });
      setT07汇款完成开关(false)
  }
  function 汇款画面显示(e){

    //console.log("U402_userdata=",person.username)
    
    setContol1({
      ...contol1,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: true,
      T03存款画面显示: false,
      T04取款画面显示: false,
      T05贷款画面显示: false,
      T06销户画面显示: false,
      
      T08存款完成开关: false,
      T09取款完成开关: false
      });
      setT07汇款完成开关(false)
  }
  function 存款画面显示(e){

    //console.log("U402_userdata=",person.username)
    
    setContol1({
      ...contol1,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: false,
      T03存款画面显示: true,
      T04取款画面显示: false,
      T05贷款画面显示: false,
      T06销户画面显示: false,
      
      T08存款完成开关: false,
      T09取款完成开关: false
      });
      setT07汇款完成开关(false)
  }
  function 取款画面显示(e){

    //console.log("U402_userdata=",person.username)
    
    setContol1({
      ...contol1,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: false,
      T03存款画面显示: false,
      T04取款画面显示: true,
      T05贷款画面显示: false,
      T06销户画面显示: false,
      
      T08存款完成开关: false,
      T09取款完成开关: false
      });
      setT07汇款完成开关(false)
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
    
     
      
  
      setContol1({
        ...contol1,
        T00检索结果显示: true,
        T01检索画面显示: true,
        T02汇款画面显示: false,
        T03存款画面显示: false,
        T04取款画面显示: false,
        T05贷款画面显示: false,
        T06销户画面显示: false,
        
        T08存款完成开关: false,
        T09取款完成开关: false

        })
        setT07汇款完成开关(false)


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
            console.log("response_huiluuser_tbl2.data.length=",response_huiluuser_tbl2.data.length)
            //明细tbl（tbl2）里头追加汇款账号的汇款记录，
            let urlpm03={};
            urlpm03.cardid = response_huikuan_user.data[0].cardid
            urlpm03.username = response_huikuan_user.data[0].username
            urlpm03.cardkb = response_huikuan_user.data[0].cardkb
            urlpm03.dongjiekb = response_huikuan_user.data[0].dongjiekb
            urlpm03.xinyongkb = response_huikuan_user.data[0].xinyongkb
            urlpm03.jiaoyiriqi = format(currentDate,'yyyy-MM-dd hh:mm:ss')
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
              urlpm04.jiaoyiriqi = format(currentDate,'yyyy-MM-dd hh:mm:ss')
              urlpm04.dongjiekb = response_huiluuser.data[0].dongjiekb
              urlpm04.xinyongkb = response_huiluuser.data[0].xinyongkb
              urlpm04.huikuanjine = Number(formData.get("汇款金额"))
              urlpm04.cunchukb = "汇入"
              

              if (response_huiluuser_tbl2.data.length === 0) {urlpm04.yue =0}

              else{urlpm04.yue =   response_huiluuser_tbl2.data[0].yue}
              console.log("urlpm04=",urlpm04)
    
              const response_huilutbl2 = await instance.post('/s4', urlpm04,{headers: { 'X-Custom-Header': 'application/json'}})
              if (response_huilutbl2.status === 200 ) {
                setT07汇款完成开关(true)
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
    urlpm03.jiaoyiriqi = format(currentDate,'yyyy-MM-dd hh:mm:ss')
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
    urlpm03.cardid = response_huikuan_user.data[0].cardid
    urlpm03.username = response_huikuan_user.data[0].username
    urlpm03.cardkb = response_huikuan_user.data[0].cardkb
    urlpm03.dongjiekb = response_huikuan_user.data[0].dongjiekb
    urlpm03.xinyongkb = response_huikuan_user.data[0].xinyongkb
    urlpm03.jiaoyiriqi = format(currentDate,'yyyy-MM-dd hh:mm:ss')
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

  function formatDate(dateString) {
    // 使用date-fns的parse函数解析字符串为Date对象
    const date = parse(dateString, 'yyyyMMddHHmmss', new Date());
    // 使用format函数格式化日期和时间
    return format(date, 'yyyy-MM-dd HH:mm:ss');
  }
    return(
    <div > 
      
      <button className='u402ziti1'>用户{person.username}登入:</button>
      
      <div className='u402outer' >
            <label className='u402f'>
            选择操作：
              <select name="业务选择" >
              <option value="业务选择2">业务选择2</option>
                <option value="业务选择3">业务选择3</option>
                <option onClick={检索交易明细画面显示} value="检索交易明细">检索交易明细</option>
                <option onClick={汇款画面显示} value="汇款">汇款</option>
                <option onClick={存款画面显示} value="存款">存款</option>
                <option onClick={取款画面显示} value="取款">取款</option>
                <option onClick={存款画面显示} value="存款">这</option>
              </select>
              </label> 
        
          {/*kaishi item1 */}

         {contol1.T01检索画面显示 ?

         
          <div className="u402d1">

          <form method="post" onSubmit={user检索}>
              <h3 className='u4b3juzhong' >检索 (终止日期前为止交易记录)</h3>

              <div className='u402bu5'>

                      <div >起始日期</div>
                            <input name="kaishiriqi" 
                              defaultValue={person.kaishiriqi} 
                              />    
              </div>

              <div className='u402bu5'>
                      <div >终止日期</div>
                      <input name="jiesuriqi" 
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
        {contol1.T00检索结果显示 ?
        
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
          <div >汇款</div>
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
            <div className='u402bu5'>
                  <div >汇入户名</div>
                  <input name="汇入户名" value={person.汇入户名} onChange={e => setPerson({...person,汇入户名:e.target.value})}
                    
                  />

            </div>
            <div className='u402bu5'>
            <div >汇入卡号</div>
                  <input name="汇入卡号"  value={person.汇入卡号} onChange={e => setPerson({...person,汇入卡号:e.target.value})}
                    
                  />
            </div>
            <div></div>
            <hr />
            <div>
                 <button type='submit'  className='u402bu6'>进行汇款</button>
            </div>
        </form>
        {t07汇款完成开关 && (
          <div id="app" className='u402huikuanjieguo'>
        <ReactModal
        isOpen={t07汇款完成开关}
        onRequestClose={() => setT07汇款完成开关(false)}
        contentLabel="汇款完成"
      >
      
        <h2>汇款完成</h2>
        <p> 汇款金额： {person.汇款金额} 元</p> 
        <p> 汇款账户： {selectedFruit} </p> 
        <p> 汇入账户： {person.汇入卡号} </p> 
        <p> 收款人： {person.汇入户名} </p> 
        <button onClick={() => setT07汇款完成开关(false)}>关闭</button>
        
      </ReactModal>
          </div>
        )}
        </div>
        
        :<div ></div>}
{/* Item2 neirong.   <Item2 />  */}

{/* Item3 存款业务 neirong.   <Item3 />  */}
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
      contentLabel="汇款完成"
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
      {contol1.T04取款结果显示 ? 
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
        </div>
    </div>
    );
  }

