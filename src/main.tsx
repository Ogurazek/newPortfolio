import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from "./components/navbar"
import { Toaster } from "sonner";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <div className='flex justify-center relative items-center' style={{ fontFamily: "'Preahvihear', sans-serif" }}>
      <App />
      <Toaster richColors position="top-right" />
    </div>
  </StrictMode>,
)
