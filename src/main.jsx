import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Player from './components/Player.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Player name="lionel messi ronaldo"/>
  </StrictMode>,
)
