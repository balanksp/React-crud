import React from 'react'
import MyTable from './component/Table'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Addusers from './component/Addusers'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MyTable/>}></Route>
          <Route path="/addusers" element={<Addusers/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App