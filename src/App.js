// import React from 'react'
// import {BrowserRouter, Route,Routes} from "react-router-dom"
// import {GlobalState} from './Component/Home/GlobalState'
// import Header from './Component/Home/Header'
// import Home from './Component/Home/Home'
// import Quote from './Component/Home/Quote'
// import YourQuote from './Component/Home/YourQuote'

// const App = () => {
//   return (
//     <GlobalState>

//      <BrowserRouter>
//      <Header />
//      <Routes>
//        <Route path='/' element={<Quote/>}/>
//     <Route path='/your' element={<YourQuote/>}/>
//     <Route path='/home' element={<Home/>}/>
      
//      </Routes>
//      </BrowserRouter>
//     </GlobalState>
//   )
// }

// export default App


import React from 'react'
import Home2 from './Comp/Home/Home2'
// import Home2 from './Comp/Home/Home'
import { GlobalState } from './Comp/Home/GlobalState'


const App = () => {
  return (
    <GlobalState>
    <div>
       <Home2/>
    </div>
    </GlobalState>
  )
}

export default App