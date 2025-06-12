import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//import { Routes, Route } from "react-router"
import {HashRouter,Routes,Route} from "react-router-dom"
import U2 from './components/home/U2'
import U401 from './components/home/U401'
import U402 from './components/home/U402'
import U403 from './components/home/U403'
import U4 from './components/home/U4'
import U5 from './components/home/U5'
import U4bk from './components/home/U4bk'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// <Route path='/a1/:id' element={<User1 />}></Route>


function App() {

  return (
    <HashRouter>
    <div>

  <Routes>

  <Route path='/' element={<U4 />}></Route>
  <Route path='/U401' element={<U401 />}></Route>
  <Route path='/U402' element={<U402 />}></Route>
  <Route path='/U403' element={<U403 />}></Route>
  </Routes>

  </div>
  </HashRouter>

  )

}
export default App