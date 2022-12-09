
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Routes>
    <Route path="/" element={<Header />} />
    <Route path="*" element={<h1>page not found</h1>} />
     </Routes>
    </div>
  )
}

export default App
