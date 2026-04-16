import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Havenly from './Havenly.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Havenly />
  </StrictMode>,
)
