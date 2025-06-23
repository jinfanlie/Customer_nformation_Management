//import { orderApi } from '../misc/OrderApi'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { preinit } from 'react-dom';
import './U4b3.css';
import { useNavigate } from 'react-router-dom';
import instance from '../misc/Axicolo';


export default function U402() {

  const location = useLocation();
  const { data,username } = location.state;
  const navigate = useNavigate();

  const [person, setPerson] = useState({
    username: username,
    password: 'pas123',
    username2 : username,
    kaishiriqi:'起始日期格式:yyyymmdd',
    jiesuriqi: '终止日期格式:yyyymmdd',
    userdata: data,
    汇款金额: 0,
    汇入账号: "汇入账号",
    存款金额: 0,
    贷款金额: 0,
    取款金额: 0,
    销户确认: "确认销户 请填写 ‘yes’ ",
    业务选择: "业务选择"
    
  });

  const [contol1,setContol1] = useState({
    T00检索结果显示: false,
    T01检索结果显示: false,
    T02汇款结果显示: false,
    T03存款结果显示: false,
    T04取款结果显示: false,
    T05贷款结果显示: false,
    T06销户结果显示: false


  })
 
  function kaishiriqiChange(e) {
    setPerson({
      ...person,
      kaishiriqi: e.target.value
    });
  }

  function handledata2Change(e) {
    setPerson({
      ...person,
      jiesuriqi: e.target.value
    });
  }

  function handlehuikuanChange(e) {
    setPerson({
      ...person,
      汇款金额: e.target.value
    });
  }
  
  function handlehuiruzhanghuChange(e) {
    setPerson({
      ...person,
      汇入账号: e.target.value
    });
  }
  function 存款金额编辑(e) {
    setPerson({
      ...person,
      存款金额: e.target.value
    });
  }
  function 取款金额编辑(e) {
    setPerson({
      ...person,
      取款金额: e.target.value
    });
  }
  function 贷款金额编辑(e) {
    setPerson({
      ...person,
      贷款金额: e.target.value
    });
  }
  function 确认进行销户(e) {
    setPerson({
      ...person,
      销户确认: e.target.value
    });
  }
  async function mingxi_f0(e){

    console.log("U402_userdata=",person.username)
    
    setContol1({
    ...person,
    T00检索结果显示: true,
    T01检索画面显示: false,
    T02汇款画面显示: false,
    T03存款画面显示: false,
    T04取款画面显示: false,
    T05贷款画面显示: false,
    T06销户画面显示: false
    });
    
  }
  async function mingxi_f1(e){

    console.log("U402_userdata=",person.username)
    
    setContol1({
      ...person,
      T00检索结果显示: false,
      T01检索画面显示: true,
      T02汇款画面显示: false,
      T03存款画面显示: false,
      T04取款画面显示: false,
      T05贷款画面显示: false,
      T06销户画面显示: false
      });
  }
  async function mingxi_f2(e){

    console.log("U402_userdata=",person.username)

    setContol1({
      ...person,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: true,
      T03存款画面显示: false,
      T04取款画面显示: false,
      T05贷款画面显示: false,
      T06销户画面显示: false
      });
    
  }
  async function mingxi_f3(e){

    console.log("U402_userdata=",person.username)

    setContol1({
      ...person,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: false,
      T03存款画面显示: true,
      T04取款画面显示: false,
      T05贷款画面显示: false,
      T06销户画面显示: false
      });
    
  }
  async function mingxi_f4(e){

    console.log("U402_userdata=",person.username)

    setContol1({
      ...person,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: false,
      T03存款画面显示: false,
      T04取款画面显示: true,
      T05贷款画面显示: false,
      T06销户画面显示: false
      });
    
  }
  async function mingxi_f5(e){

    console.log("U402_userdata=",person.username)

    setContol1({
      ...person,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: false,
      T03存款画面显示: false,
      T04取款画面显示: false,
      T05贷款画面显示: true,
      T06销户画面显示: false
      });
    
  }
  async function mingxi_f6(e){

    console.log("U402_userdata=",person.username)

    setContol1({
      ...person,
      T00检索结果显示: false,
      T01检索画面显示: false,
      T02汇款画面显示: false,
      T03存款画面显示: false,
      T04取款画面显示: false,
      T05贷款画面显示: false,
      T06销户画面显示: true
      });
    
  }
  function ItemOT0(params) {
    

      if(person.检索结果显示){
        return (
          <div className='f'>
        
            <table  border="1">
            <thead >
              
              <tr>
                <th className="th th1">Name </th>
                <th className="th th1">username</th>
              </tr>
              
            </thead >
            <tbody >
              {data.map(data => (
                <tr key={data.id}>
                  <td className="th th3">{data.name}</td>
                  <td className="th th3">{data.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

        )
      }
   
  
    
  }
  function Item1(are) {
    console.log("are=",are)
    if(contol1.T01检索画面显示){
      return(
         
          <div className="d1">
          <h3 className='u4b3juzhong' >检索</h3>

          <div className='bu5'>
                <div >起始日期(yyyymmdd)</div>
                  <input name="kaishiriqi" 

                        value={person.kaishiriqi}
                        onChange={kaishiriqiChange}
                                      
                    
                  />
                
          </div>

          <div className='bu5'>
                  <div >终止日期(yyyymmdd)</div>
                  <input name="jiesuriqi" 
                    value={person.jiesuriqi} 
            
                  />
          </div>
          <br />
          <div>
              <button onClick={user检索}  className='bu6' >检索开始</button>
          </div>
          </div>
      )

    }
    
  }
  async function user检索(e) {
  
    try {

      console.log("person=",person)
      let urlpm01={};
      urlpm01.username = person.username
      urlpm01.password = person.password
      const response = await instance.post('/u4', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})
      // 只传递 response.data 而不是整个 response 对象
      person.data = response.data
      setContol1({
        ...person,
        检索结果显示: true,
        检索画面显示: true,
        汇款画面显示: false,
        存款画面显示: false,
        取款画面显示: false,
        贷款画面显示: false,
        销户画面显示: false
          
        })


      navigate('/U402', { state: { data: response.data ,username:response.data[0].username} });
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


  function Item2(params) {
    if(contol1.汇款画面显示){
      return(
        <div className='d1'>
          <h3 >汇款</h3>
            <div className='bu5'>
                   <div >汇款金额</div>
                  <input name="汇款金额" 
                  />
            </div>
                
            <div className='bu5'>
                  <div >汇入账号</div>
                  <input name="汇入账号" 
                    
                  />
            </div>
            <br />
            <div>
                 <button onClick={mingxi_f2}  className='bu6'>进行汇款</button>
            </div>
        </div>



      )
    }
    
  }
  function Item3(params) {
    if(contol1.存款画面显示){
      return(
        <div className="d1">
        <h3  >存款</h3>
      
        <div className='bu5'>
              <div >存款金额</div>
                <input name="存款金额" 
                />
          </div>
          <br />
          <div>
                <button onClick={mingxi_f0}  className='bu6' >进行存款</button>
          </div>
      </div>

        
      )
    }
    
  }
  function Item4(params) {
    if(contol1.取款画面显示){
      return(
        <div className="d1">
        <h3  >取款</h3>
      
        <div className='bu5'>
              <div >取款金额</div>
                <input name="取款金额" 
                />
          </div>
          <br />
          <div>
                <button onClick={mingxi_f0}   className='bu6'>进行取款</button>
          </div>
      </div>

        
      )
    }
    
  }
  function Item5(params) {
    if(contol1.贷款画面显示){
      return(
        <div className="d1">
        <h3  >贷款</h3>
      
        <div className='bu5'>
              <div >贷款金额</div>
                <input name="贷款金额" 
                />
          </div>
          <br />
          <div>
                <button onClick={mingxi_f1}  className='bu6'>申请贷款</button>
          </div>
      </div>

        
      )
    }
    
  }
  function Item6(params) {
    if(contol1.销户画面显示){
      return(
        <div className="d1">
        <h3  >销户</h3>
      
        <div className='bu5'>
              <div >销户确认(请输入【yes】)</div>
                <input name="销户确认" 
                />
          </div>
          <br />
          <div>
                <button onClick={mingxi_f1}  className='bu6'>申请销户</button>
          </div>
      </div>

        
      )
    }
    
  }

  
  async function huiu402(params) {
    setContol1({
      ...person,
      检索结果显示: false,
      检索画面显示: false,
      汇款画面显示: false,
      存款画面显示: false,
      取款画面显示: false,
      贷款画面显示: false,
      销户画面显示: false
        
      })
    navigate('/U402', { state: { data: person.data ,username:person.username} });
  }

    return(
    <div > 
      <button onClick={huiu402} className='ziti1'>欢迎{person.username}:</button>
      
      <div className='outer' >
      <label className='f'>
      选择操作：
        <select name="精选水果" >
          <option value="业务选择">业务选择</option>
          <option onClick={mingxi_f1} value="检索交易明细">检索交易明细</option>
          <option onClick={mingxi_f2} value="汇款">汇款</option>
          <option onClick={mingxi_f3} value="存款">存款</option>
          <option onClick={mingxi_f4} value="取款">取款</option>
          <option onClick={mingxi_f5} value="贷款">贷款</option>
          <option onClick={mingxi_f6} value="销户">销户</option>
        </select>
      </label> 
        <Item1 
        
        

        
        />
        <Item2 />
        <Item3 />
        <Item4 />
        <Item5 />
        <Item6 />


        {/* 汇款模块    */}

        {/* 存款模块    */}

        {/* 存款模块    */}
        {/* 取款模块    */}

        {/* 取款模块    */}
        {/* 贷款模块    */}

        {/* 贷款模块    */}
        {/* 销户模块    */}

        {/* 销户模块    */}
        
        <ItemOT0 />





        </div>
    </div>
    );
  }

