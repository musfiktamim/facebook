import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import {Toaster} from "sonner"
import { Userprovider } from './contextapi/index.context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Userprovider>
    <Toaster  />
    <App />
  </Userprovider>,
)
