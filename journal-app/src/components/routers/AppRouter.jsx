import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
// import { JournalScreen } from '../journal/JournalScreen'

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <AuthRouter /> } />
        {/* <Route path='/' element={ <JournalScreen /> } /> */}
      </Routes>
    </div>
  )
}
