import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { RouteTracker } from './RouteTracker'  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteTracker />   {/* Google Analytics Page Tracking */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
