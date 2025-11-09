import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from "./components/navbar"
import { Toaster } from "sonner";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className='flex justify-center relative items-center' style={{ fontFamily: "'Inter', sans-serif" }}>
      <div
        className="pointer-events-none fixed inset-0 z-[-1]
  bg-[#020617] 
  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,112,255,0.35),rgba(0,0,0,0))]"
      />

      <App />
      <Toaster richColors position="top-right" />
    </div>
  </StrictMode>,
)
