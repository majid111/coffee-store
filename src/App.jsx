import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='max-w-6xl mx-auto font-poppins'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
