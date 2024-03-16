import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {chakraProvider} from "@chakra-ui/react"
import {chakraProvider} from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <chakraProvider>
    <App />
    </chakraProvider>
  </React.StrictMode>,
)