import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useRef,useState, useEffect  } from 'react';
import { preinit } from 'react-dom';
import './U4b3.css';
import { useNavigate } from 'react-router-dom';
import instance from '../misc/Axicolo';



export default function Item2(params) {
    
    const [contol1,setContol1] = useState({
        T00检索结果显示: false,
        T01检索结果显示: false,
        T02汇款结果显示: false,
        T03存款结果显示: false,
        T04取款结果显示: false,
        T05贷款结果显示: false,
        T06销户结果显示: false

      })


    console.log("params=" ,params)
    if(contol1.T02汇款画面显示){
      return(
        <form className='d1' onSubmit={汇款处理开始}>
          <h3 >汇款</h3>
          <input ref={inputRef}  name="kaishiriqi2" 
                            value={kaishiriqi2}
                            onChange={e => setKaishiriqi2(e.target.value)}

                      />
            <div className='bu5'>
                   <div >汇款金额</div>
                  <input name="汇款金额" 
                  />
            </div>
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
            <div className='bu5'>
                  <div >汇入户名</div>
                  <input name="汇入户名" 
                    
                  />

            </div>
            <div className='bu5'>
            <div >汇入卡号</div>
                  <input name="汇入卡号" 
                    
                  />
            </div>
            <div></div>
            <div>
                 <button type='submit'  className='u402bu6'>进行汇款</button>
            </div>
        </form>



      )
    }
    
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
    console.log("urlpm01=",urlpm01)
    let urlpm02={};
    urlpm02.username = formData.get("汇入户名")
    urlpm02.cardid = formData.get("汇入卡号")
    console.log("urlpm01=",urlpm02)
    const response_user = await instance.post('/s2', urlpm01,{headers: { 'X-Custom-Header': 'application/json'}})

    


    const response_huiluuser = await instance.post('/s3', urlpm02,{headers: { 'X-Custom-Header': 'application/json'}})

    
  }  
  