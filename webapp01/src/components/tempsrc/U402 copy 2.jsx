//import { orderApi } from '../misc/OrderApi'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useRef,useState, useEffect  } from 'react';
import { preinit } from 'react-dom';
import './U4b3.css';
import { useNavigate } from 'react-router-dom';
import instance from '../misc/Axicolo';



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
    password: 'pas123',
    username2 : username,
    kaishiriqi:'20250401',  //'起始日期格式:yyyymmdd',
    jiesuriqi: '20250501', //'终止日期格式:yyyymmdd',
    userdata: data,
    汇款金额: 0,
    汇入账号: "汇入账号",
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
    T06销户结果显示: false


  })
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

  async function mingxi_f0(e){

    //console.log("U402_userdata=",person.username)
    
    setContol1({
    ...contol1,
    T00检索结果显示: true,
    T01检索画面显示: true,
    T02汇款画面显示: false,
    T03存款画面显示: false,
    T04取款画面显示: false,
    T05贷款画面显示: false,
    T06销户画面显示: false
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
      T06销户画面显示: false
      });
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
      T06销户画面显示: false
      });
  }
  function Item1(are) {
    //console.log("are=",are)
    
    if(contol1.T01检索画面显示){
      return(

         
          <div className="d1">
                          <div >起始日期2</div>
                      
                      <input name="kaishiriqi2" 
                            value={kaishiriqi2}
                            onChange={e => setKaishiriqi2(e.target.value)}

                                               

                      />
          <form method="post" onSubmit={user检索}>
              <h3 className='u4b3juzhong' >检索</h3>

              <div className='bu5'>

                      <div >起始日期</div>
                            <input name="jiesuriqi" 
                              defaultValue={person.kaishiriqi} 
                              />
                    
              </div>

              <div className='bu5'>
                      <div >终止日期</div>
                      <input name="jiesuriqi" 
                        defaultValue={person.jiesuriqi} 
                      />
              </div>
              <br />
              <label>
              <p>
                   选择卡：
               
                <select value={selectedFruit} 
                         onChange={e => setSelectedFruit(e.target.value)}>
                 <option value="选择卡号">选择卡号</option>
                {data.map(data => (
                      <option key={data.id} name="cardid" defaultValue="选择卡号" value={data.cardid} >{data.cardid}</option> 
                   ))}
                </select>
                <input name='zhengjian' type='text'/>
                </p>

                  <button   type="submit"  className='bu6' >检索开始</button>
              </label>
            </form>
          </div>
      )

    }
    
  }
  function Item101(params) {
    //console.log("T00检索结果显示",contol1.T00检索结果显示)
    //console.log("selectout data=",data)
   
    //console.log("tbl2datas21=",tbl2d1)
    //console.log("tbl2datas22=",tbl2d2)
    

      if(contol1.T00检索结果显示){
        return (
          <div className='selectout'>
        
            <table  border="1">
            <thead >
              
              <tr>
                <th className="th th1">卡号 </th>
                <th className="th th1">交易日期</th>
                <th className="th th1">交易金额</th>
                <th className="th th1">结算后金额</th>
              </tr>
              
            </thead >
            <tbody >
              {tbl2s1outdata.map(tbl2s1outdata => (
                <tr key={tbl2s1outdata.id}>
                  <td className="th th3">{tbl2s1outdata.cardid}</td>
                  <td className="th th3">{tbl2s1outdata.jiaoyiriqi}</td>
                  <td className="th th3">{tbl2s1outdata.jine}</td>
                  <td className="th th3">{tbl2s1outdata.yue}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

        )
      }
   
  
    
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
      urlpm01.password = person.password
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
        T06销户画面显示: false
          
        })


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

  function Item2(params) {
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
                 <button type='submit'  className='bu6'>进行汇款</button>
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
  
    return(
    <div > 
      
    <input
    ref={inputRef}
      value={firstName} // ...强制输入框的值与 state 相匹配...
      onChange={e => setFirstName(e.target.value)} // ... 并在每次改变（change）时更新 state！ <Item1 />
    />
      <button className='ziti1b'>用户{person.username}登入:</button>
      
      <div className='outerb' >
            <label className='f'>
            选择操作：
              <select name="业务选择" >
                <option value="业务选择">业务选择</option>
                <option onClick={检索交易明细画面显示} value="检索交易明细">检索交易明细</option>
                <option onClick={汇款画面显示} value="汇款">汇款</option>
              </select>
              </label> 
        
          {/*kaishi item1 */}

         {contol1.T01检索画面显示 ?

         
          <div className="d1">
                          <div >起始日期2</div>
                      
                      <input name="kaishiriqi2" 
                            value={kaishiriqi2}
                            onChange={e => setKaishiriqi2(e.target.value)}

                      />
          <form method="post" onSubmit={user检索}>
              <h3 className='u4b3juzhong' >检索</h3>

              <div className='bu5'>

                      <div >起始日期</div>
                            <input name="jiesuriqi" 
                              defaultValue={person.kaishiriqi} 
                              />
                    
              </div>

              <div className='bu5'>
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
                  <button   type="submit"  className='bu6' >检索开始</button>
              </div>
            </form>
          </div>:<div></div>
        }




         
        
        <Item101 />
        <Item2 />
        </div>
    </div>
    );
  }

