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

export default function U402() {

  const location = useLocation();
  const { data,username } = location.state;
  const navigate = useNavigate();
  const [selectedFruit,setSelectedFruit] = useState()
  const [selectedFruit2,setSelectedFruit2] = useState()

  const [person, setPerson] = useState({
    username: '用户名',
    pswd: '密码',
    chkpawd:'确认密码',
    cardkb:'储蓄卡，借记卡',
    addres:'地址',
    email:'邮箱',
    tel:'18040108888',
    xinyongkb:'良好',
    dongjiekb:'正常',
    faxingriqi:'自动写入',
    zhengjiankb:'身份证，护照',
    zhengjianhaoma:'证件号码',
    cardid:0
  });

  const [contol1,setContol1] = useState({
    发生错误: false,
    确认密码结果: false,
    确认用户名: false,
    注册完成确认: false,
    chk4: false,
    T05贷款画面显示: false,
    T06销户画面显示: false,
    T07汇款完成开关: false,
    T08存款完成开关: false,
    T09取款完成开关: false,
    T10申请卡处理: false
  })


  function 返回登陆画面(e){
    navigate('/');
  }

  async function 卡申请处理(e) {
    e.preventDefault();

    const currentDate = new Date();
    console.log("e=",e.target)
 
    // console.log("formdata=",formData.values(0))
    // console.log("formdata=",formData.keys)
    // console.log("person=",person)
    let urlpm01={};

    urlpm01.username = person.username
    urlpm01.pswd = person.pswd
    urlpm01.cardkb= person.cardkb 
    urlpm01.addres= person.addres
    urlpm01.email= person.email
    urlpm01.tel= person.tel
    urlpm01.xinyongkb='良好',
    urlpm01.dongjiekb='正常',
    urlpm01.faxingriqi = format(currentDate,'yyyy-MM-dd HH:mm:ss')
    urlpm01.zhengjiankb=person.zhengjiankb
    urlpm01.zhengjianhaoma=person.zhengjianhaoma
    console.log("urlpm01=",urlpm01)
    //汇款用户卡号确认
    const response_user = await instance.post('/s6', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
    console.log("response_user=",response_user)
    console.log("response_user.status=",response_user.status)
    
    //汇款用户卡号没有错误的时候
    if (response_user.status !== 200 ) {
      setPerson({
        ...person,
        发生错误: true
      })
      console.error('访问数据库发生错误1')
      alert('访问数据库发生错误1')
      return;
    }
    if (response_user.data.length === 0) {
      if (person.cardkb === '借记卡') {
        urlpm01.cardid  = 4444333322220001

      }
      if (person.cardkb === '储蓄卡') {
        urlpm01.cardid  = 4444000022220001

      }

    } else {

      urlpm01.cardid = +response_user.data[0].cardid + 1
    }
    
      //汇款户名，账号余额确认
    const response_user2 = await instance.post('/userin01', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      
    if (response_user2.status !== 200  ) {
      setPerson({
        ...person,
        发生错误: true
      })
        console.error('访问数据库发生错误2')
        alert('访问数据库发生错误2')

        return;

    } else {
      setPerson({
        ...person,
        注册完成确认: true
      })
      alert('wancheng')    
    }
    
  }  
  
  return(
    <p className='u40all1'> 
      
      <p className='u402ziti1'>申请卡:</p>
      

      <button className='u402tuichu' onClick={返回登陆画面}>退出申请卡</button>

      <select value={person.cardkb} 
                         onChange={e => setPerson({...person,cardkb:e.target.value})}>
      <option value="申请卡类型">申请卡类型</option>
      <option value="借记卡">借记卡</option>
      <option value="储蓄卡">储蓄卡</option>
      
     </select >


      <label className='u402bu5'>
        <div className='u402bu5001 u402bu5002'>用户名：</div>
      <input name="username" type="text" className='u402bu5001  u402bu5003'
                              defaultValue={person.username} onChange={e => setPerson({...person,username:e.target.value})}
                              />    
     </label>


     <label className='u402bu5'>
        <div className='u402bu5001 u402bu5002'>密码：</div>
      <input name="pswd" type="text" className='u402bu5001  u402bu5003'
                              defaultValue={person.pswd} onChange={e => setPerson({...person,pswd:e.target.value})}
                              />    
     </label>

     <label className='u402bu5'>
        <div className='u402bu5001 u402bu5002'>确认密码：</div>
      <input name="chkpswd" type="text" className='u402bu5001  u402bu5003'
                              defaultValue={person.chkpawd} onChange={e => setPerson({...person,chkpawd:e.target.value})}
                              />    
     </label>

     <label className='u402bu5'>
        <div className='u402bu5001 u402bu5002'>地址：</div>
      <input name="addres" type="text" className='u402bu5001  u402bu5003'
                              defaultValue={person.addres} onChange={e => setPerson({...person,addres:e.target.value})}
                              />    
     </label>
     <label className='u402bu5'>
        <div className='u402bu5001 u402bu5002'>电话：</div>
      <input name="tel" type="text" className='u402bu5001  u402bu5003'
                              defaultValue={person.tel} onChange={e => setPerson({...person,tel:e.target.value})}
                              />    
     </label>

     <label className='u402bu5'>
     <select value={person.zhengjiankb} className='u402bu5001 u402bu5002'
                         onChange={e => setPerson({...person,zhengjiankb:e.target.value})}>
      <option value="身份证明">身份证件</option>
      <option value="身份证">身份证</option>
      <option value="护照">护照</option>
     
     </select >
     <input name='zhengjian' type='text' onChange={e => setPerson({...person,zhengjianhaoma:e.target.value})}
          className='u402bu5001 u402bu5003' defaultValue={person.zhengjianhaoma}
          />
     </label>



     <label>
        <div  className='u402bu5001 u402bu5002'>邮箱：</div>
      <input name="email" type="text" onChange={e => setPerson({...person,email:e.target.value})}
                              defaultValue={person.email} 
                              />    
     </label>

     <button onClick={卡申请处理}>提交申请</button>








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


    </p>
        
    );
}

