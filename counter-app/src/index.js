import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp'
import './index.css'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
    <React.StrictMode>
        <CounterApp />
    </React.StrictMode>
);