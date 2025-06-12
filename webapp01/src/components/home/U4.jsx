//import { orderApi } from '../misc/OrderApi'
import axios from 'axios';
import { useState } from 'react';
import { preinit } from 'react-dom';
import './U4b1.css';
import { useNavigate } from 'react-router-dom';
import instance from '../misc/Axicolo';

export default function U4() {
  const [type, setType] = useState('password');
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    username: 'jin1',
    pswd: '123456',
    usernotfound: false
  });
  const [personwk, setPersonwk] = useState({
    username: 'jin1',
    pswd: '123456',
    usernotfound: false
  });
  const [userchka1,setUserchka1] = useState(false);
  const [showpswd, setShowpswd] = useState(false);
 
  const togglepswdVisibility = () => {
    setShowpswd(!showpswd);
    setType(type === 'password' ? 'text' : 'password');
  };


  function handleusernameChange(e) {
    setPerson({
      ...person,
      username: e.target.value
    });
  }

  function handlepswdChange(e) {
    setPerson({
      ...person,
      pswd: e.target.value
    });
  }

  // 支持async/await用法
  async function search2(e) {
  
    try {

      
      let urlpm01={};
      urlpm01.username = person.username
      urlpm01.pswd = person.pswd
      const response = await instance.post('/u4', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      console.log("response=",response)
      
      console.log("response.data.len=",response.data.length)
      // 只传递 response.data 而不是整个 response 对象
      if (response.data.length === 0 ) {
        
        alert(`用户名或者密码错误`);
        return;
      }
      navigate('/U402', { state: { data: response.data ,username:response.data[0].username} });
    } catch (error) {
      if (error.response) {
        console.error(`请求失败，状态码: ${error.response.status}, 状态信息: ${error.response.statusText}`);
        alert(`请求失败，状态码: ${error.response.status}, 状态信息: ${error.response.statusText}`);
      } else if (error.request) {
        console.error('没有收到服务器的响应，请检查网络连接。');
        alert('没有收到服务器的响应，请检查网络连接。');
      } else {
        setPerson({
          ...person,
          usernotfound: true
          });
        console.error('请求设置出错: ', error.message);
        alert('qq: ' + error.message);
      }
    }
  }
  function Item1() {
    
   
    if(person.usernotfound){
      return(
        <div className='u4b1errwenben'>用户名或者密码错误</div>
        
      )
    }
    
  }
  async function shenqing(e) {
    navigate('/U401', { state: { username:person.username} });
  }
  async function guanliyuandenglu(e) {
      let urlpm01={};
      urlpm01.username = person.username
      urlpm01.pswd = person.pswd
      const response = await instance.post('/u6', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      
      if (response.status !== 200) {
        alert("系统错误：数据库读取错误")
        return;
      }
      console.log("response.data.len(u403)=",response.data.length)
      console.log("response.data=",response.data)
      // 只传递 response.data 而不是整个 response 对象
      if (response.data.length === 0 ) {
        
        alert(`用户名或者密码错误`);
        return;
      }
      
    navigate('/U403', { state: { username:response.data[0].username,guanlijibie:response.data[0].guanlijibie} });
  }
  return (
    <div className="background-container">
     
      {/* 修改表单提交方式 */}
      
      <div className='u4b1bu3'>
          <div className="u4b1bu5">
            <div className='u4b1wenben1'>用户名

            </div>
              <input username="用户名" 
                value={person.username}
                onChange={handleusernameChange}
               
            />
          </div>  
         
          <div className="u4b1bu5">
            <div className='u4b1wenben1'>密码</div>
            <div className="input-button-container">
              <input username="密 码" value={person.pswd}
                onChange={handlepswdChange}
                type={type} 
                placeholder="Enter pswd"
                />
              <button onClick={togglepswdVisibility}  className='u4b1wenben2'>
              {type === 'password' ? 'Show' : 'Hide'}
              </button>
            </div>
          </div>
          
  
         {/* class="flex-container"   class="button2"    */}
         <div className="u4b1bu5">
        <button  onClick={search2}  type="submit"   >登入</button>
        <button onClick={shenqing}  >注册</button>
        <button onClick={guanliyuandenglu}  >管理员登入</button>
        
        </div>
       
        {person.usernotfound ? 
        <>
        {console.log("aaaa")}
        
        <div className='u4b1errwenben'>用户名或者密码错误</div>
        </>
      :<div></div>
      }
      </div>

    
    </div>
    
  );
}
