import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const items = [
  "1 cup of water",
  "2 cup of water"
];
createRoot(document.getElementById('root')).render(


  <StrictMode>
    <App item = {item}/>
  </StrictMode>,
)
