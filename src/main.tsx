import React from 'react'
import ReactDOM from 'react-dom/client'
import DepositAtom from './layouts/DepositAtom.tsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DepositAtom />
  </React.StrictMode>,
)
