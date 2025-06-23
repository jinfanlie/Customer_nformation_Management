//import { orderApi } from '../misc/OrderApi'
import axios from 'axios';
import { useState } from 'react';
import { preinit } from 'react-dom';
import './U4b1.css';
import { useNavigate } from 'react-router-dom';

export default function U4() {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    username: 'jin1',
    password: 'pas123'
  });
  function handleNameChange(e) {
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
  async function search2(formData) {
    try {
      const instance = axios.create({
        baseURL: 'http://localhost:8080/api/',
        timeout: 1000
      });
      console.log("fromdata=",formData);
      let urlpm01={};
      urlpm01.username = formData.get("username")
      urlpm01.password = formData.get("password")
      const response = await instance.post('/u4', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      console.log("response=",response)
      console.log("response.data[0].username=",response.data[0].username)
      // 只传递 response.data 而不是整个 response 对象
      navigate('/U2', { state: { data: response.data ,username:response.data[0].username} });
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
  }

  return (
    <div className="background-container">
     
      {/* 修改表单提交方式 */}
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        search2(formData);
      }}>
        <div class="bu24">
          <div class="bu5">
            <div class="wenben1">User_name</div>
              <input name="username" 
                value={person.username}
                onChange={handleNameChange}
                class="wenben2"
            />
          </div>  
          <br></br>
          <div class="bu5">
            <div class="wenben1">Password</div>
              <input name="password" value={person.password}
                onChange={handlePasswordChange}
                class="wenben2"/>
          </div>
          
  
  <br></br>
         {/* class="flex-container"   class="button2"    */}
        <button type="submit"  class="button2">Search</button>
        <button type="submit"  class="button2">shenqing</button>
        </div>
      </form>

    {/* 修改表单提交方式 */}
    <br></br>
    <form onSubmit={(e) => {
        e.preventDefault();
        const formData2 = new FormData(e.target);
        search2(formData2);
      }}>
              <input name="username2" 
                value={person.username}
                onChange={handleNameChange}
                class="wenben2"
            />
 
          <br></br>

              <input name="password2" value={person.password}
                onChange={handlePasswordChange}
                class="wenben2"/>

          
  
  <br></br>
         {/* class="flex-container"   class="button2"    */}
        <button type="submit"  class="button2">Search</button>
        <button type="submit"  class="button2">shenqing</button>
        <button type="submit"  class="button3">shenqing2</button>

      </form>
    </div>
  );
}
