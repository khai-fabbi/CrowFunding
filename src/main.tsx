import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globalStyle.css'
import './styles/customStyle.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <ToastContainer bodyClassName='font-primary text-sm' position='bottom-right' autoClose={5000} />
  </BrowserRouter>,

  // </React.StrictMode>
)
