import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' /* 1. MUST IMPORT THIS */
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 2. MUST WRAP APP IN THIS */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)