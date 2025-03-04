
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  

  return (
    <div className="max-w-md mx-auto w-full min-h-screen bg-[#252A3E]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

