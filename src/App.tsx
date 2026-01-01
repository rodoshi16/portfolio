import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MagnaExperience from './components/MagnaExperience'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magna-experience" element={
            <div className="magna-page-wrapper">
              <Navigation activeSection="" />
              <MagnaExperience />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
