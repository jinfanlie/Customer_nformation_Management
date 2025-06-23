//import { orderApi } from '../misc/OrderApi'
import axios from 'axios';
import { useState } from 'react';
import { preinit } from 'react-dom';
import './U4b1.css';
import { useNavigate } from 'react-router-dom';
import instance from '../misc/Axicolo';

export default function U4() {

  const navigate = useNavigate();
  const [person, setPerson] = useState({
    username: 'jin1',
    password: 'pas123',
    usernotfound: false
  });
  const [personwk, setPersonwk] = useState({
    username: 'jin1',
    password: 'pas123',
    usernotfound: false
  });

  const [showPassword, setShowPassword] = useState(false);
 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  function handleusernameChange(e) {
    setPerson({
      ...person,
      username: e.target.value
    });
  }

  function handlePasswordChange(e) {
    setPerson({
      ...person,
      password: e.target.value
    });
  }

  // 支持async/await用法
  async function search2(e) {
  
    try {

      
      let urlpm01={};
      urlpm01.username = person.username
      urlpm01.password = person.password
      const response = await instance.post('/u4', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      console.log("response=",response)
      console.log("response.data[0].username=",response.data[0].username)
      console.log("response.data.len=",response.data.length)
      // 只传递 response.data 而不是整个 response 对象
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
        alert('请求设置出错: ' + error.message);
      }
    }
  }
  function Item1() {
    
   
    if(person.usernotfound){
      return(
        <div >用户名或者密码错误</div>
        
      )
    }
    
  }
  async function shenqing(e) {
    navigate('/U401', { state: { username:person.username} });
  }
  return (
    <div classusername="background-container">
     
      {/* 修改表单提交方式 */}
      
      <div classusername='u4b1bu3'>
          <div classusername="u4b1bu5">
            <div classusername='u4b1wenben1'>用户名

            </div>
              <input username="用户名" 
                value={person.username}
                onChange={handleusernameChange}
               
            />
          </div>  
         
          <div classusername="u4b1bu5">
            <div classusername='u4b1wenben1'>密码</div>
            <div classusername="input-button-container">
              <input username="密 码" value={person.password}
                onChange={handlePasswordChange}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                />
              <button onClick={togglePasswordVisibility} classusername='u4b1wenben2'>
              {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
  
         {/* class="flex-container"   class="button2"    */}
         <div classusername="u4b1bu5">
        <button  onClick={search2}  type="submit"   >登入</button>
        <button onClick={shenqing}  type="submit"  >注册</button>
       
        </div>
      </div>

    <Item1 />
    </div>
    
  );
}
