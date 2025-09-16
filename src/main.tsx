import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from "./components/navbar"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className='flex justify-center relative items-center' style={{ fontFamily: "'Preahvihear', sans-serif" }}>
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-5 right-32 w-48 h-48  bg-blue-600 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute bottom-20 left-2 w-48 h-48  bg-purple-700 rounded-full blur-3xl opacity-20 "></div>
      </div> */}
      <App />
    </div>
  </StrictMode>,
)
