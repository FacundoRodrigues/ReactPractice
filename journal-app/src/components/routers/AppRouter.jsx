import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../journal/JournalScreen'
import { LoginScreen } from '../auth/LoginScreen'

import '../../index.css'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
          <Route path='/auth/*' element={<AuthRouter /> }/>
          <Route path='/' element={ <JournalScreen /> } />
          <Route path='*' element={ <LoginScreen /> } />
        </Routes>
    </div>
  )
}
