import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


//import "./User3.css"

function U5() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data,username } = location.state;
  console.log("data=",data)
  console.log("username=",username)
   //return <h1>Hello {props.match.params.id}!</h1>
   function mingxi1() {
    console.log("点击跳转画面4",data);
    navigate('/U4', { state: { data: data,username: username} });
  }



   return  <div><h1>Hello U5!</h1>
  <input ></input>
  <h3>{data.name}</h3>
  <button onClick={mingxi1}  class="button button2" >检索画面</button>
</div>
  }
export default U5