//import { orderApi } from '../misc/OrderApi'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { preinit } from 'react-dom';
import './U4b3.css';
import { useNavigate } from 'react-router-dom';


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
    检索结果显示: false
    
  });
 
  function handledata1Change(e) {
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
  async function mingxi_f(e){

    console.log("U402_userdata=",person.username)
    
    setPerson({
    ...person,
    检索结果显示: true
    });
    
  }
  function Item1(params) {
    

      if(person.检索结果显示){
        return (
          <div className='f'>
        
            <table  border="1">
            <thead >
              
              <tr>
                <th class="th th1">Name </th>
                <th class="th th1">username</th>
              </tr>
              
            </thead >
            <tbody >
              {data.map(data => (
                <tr key={data.id}>
                  <td class="th th3">{data.name}</td>
                  <td class="th th3">{data.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

        )
      }
   
  
    
  }
  async function mingxi_f2(e){

    console.log("U402_userdata=",person.username)

    setPerson({
    ...person
      
    });
    
  }
  
  async function huiu402(params) {
    navigate('/U402', { state: { data: person.data ,username:person.username} });
  }

    return(
    <div > 
      <button onClick={huiu402} className='ziti1'>欢迎{person.username}:</button>
      
      <div className='outer' >
        {/* 检索数据模块    */}
        <div className="d1">
          <h3 className='u4b3juzhong' >检索</h3>
        
           <div className='bu5'>
                <div >起始日期</div>
                  <input name="kaishiriqi" 
                    value={person.kaishiriqi}
                    onChange={handledata1Change}
                  />
          </div>

          <div className='bu5'>
                  <div >终止日期</div>
                  <input name="jiesuriqi" 
                    value={person.jiesuriqi}
                    onChange={handledata2Change}
            
                  />
          </div>
          <br />
          <div>
              <button onClick={mingxi_f} className='bu6' >检索开始</button>
          </div>
        </div>


        {/* 汇款模块    */}
        <div className='d2'>
          <h3 >汇款</h3>
            <div className='bu5'>
                   <div >汇款金额</div>
                  <input name="汇款金额" 
                    value={person.汇款金额}
                    onChange={handlehuikuanChange}
                  />
            </div>
                
            <div className='bu5'>
                  <div >汇入账号</div>
                  <input name="汇入账号" 
                    value={person.汇入账号}
                    onChange={handlehuiruzhanghuChange}
                    
                  />
            </div>
            <br />
            <div>
                 <button onClick={mingxi_f2}  className='bu6'>进行汇款</button>
            </div>
        </div>
        {/* 存款模块    */}
          <div className="d3">
            <h3  >存款</h3>
          
            <div className='bu5'>
                  <div >存款金额</div>
                    <input name="存款金额" 
                      value={person.存款金额}
                      onChange={存款金额编辑}
                    />
              </div>
              <br />
              <div>
                    <button onClick={mingxi_f}  className='bu6' >进行存款</button>
              </div>
          </div>
        {/* 存款模块    */}
        {/* 取款模块    */}
                <div className="e1">
            <h3  >取款</h3>
          
            <div className='bu5'>
                  <div >取款金额</div>
                    <input name="取款金额" 
                      value={person.取款金额}
                      onChange={取款金额编辑}
                    />
              </div>
              <br />
              <div>
                    <button onClick={mingxi_f}   className='bu6'>进行取款</button>
              </div>
          </div>
        {/* 取款模块    */}
        {/* 贷款模块    */}
                <div className="e2">
            <h3  >贷款</h3>
          
            <div className='bu5'>
                  <div >贷款金额</div>
                    <input name="贷款金额" 
                      value={person.贷款金额}
                      onChange={贷款金额编辑}
                    />
              </div>
              <br />
              <div>
                    <button onClick={mingxi_f}  className='bu6'>申请贷款</button>
              </div>
          </div>
        {/* 贷款模块    */}
        {/* 销户模块    */}
                <div className="e3">
            <h3  >销户</h3>
          
            <div className='bu5'>
                  <div >销户确认</div>
                    <input name="销户确认" 
                      value={person.销户确认}
                      onChange={确认进行销户}
                    />
              </div>
              <br />
              <div>
                    <button onClick={mingxi_f}  className='bu6'>申请销户</button>
              </div>
          </div>
        {/* 销户模块    */}
        
        <Item1 />





        </div>
    </div>
    );
  }

