import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes/routes.jsx'
import GlobalStyle from './Components/Style/globalStyle.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas/> 
      <GlobalStyle/>     
    </BrowserRouter>
  </React.StrictMode>,
)
