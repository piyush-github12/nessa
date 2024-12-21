
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Solutions from './pages/solutions/Solutions'
import SolutionDetail from './pages/solutionDetail/SolutionDetail'

const App = () => {

  
  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/:airport" element={<SolutionDetail />} />
    </Routes>
  )
}

export default App