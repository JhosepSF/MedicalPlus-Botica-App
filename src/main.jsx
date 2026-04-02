import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Head from './modules/components/Head.jsx'
import Footer from './modules/components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head />
      <App />
    <Footer />
  </React.StrictMode>,
)
