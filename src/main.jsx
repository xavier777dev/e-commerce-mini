import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ShoopApp from './ShoopApp'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <React.StrictMode>
            <ShoopApp />
        </React.StrictMode>,
    </HashRouter>
)
