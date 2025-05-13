import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto'
import '@fontsource/vt323'
import '@fontsource/creepster'
import '@fontsource/rubik-wet-paint'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
