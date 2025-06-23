import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//import { Routes, Route } from "react-router"
import {HashRouter,Routes,Route} from "react-router-dom"



class Ut extends reactLogo.Component {
  // constructor(parameters) {
  //   super()
  //   this.state ={
  //     msg1: "chushi",
  //     name: "jin",
  //     age: 18
  //   }
    
  // }


  


  render(){
    return (

      <div>
      <p>{this.state.datayouwu}</p>
      {msg1 === 'chushi' ? (
      <p>没有记录可显示</p>
         ) : (
      <p>{msg1}</p>
          )
      }
    </div>
    )

}}
