import React from 'react'
import { BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { NotFoundScreen } from './NotFoundScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/login'>Login</Link>
            </div>
            <Routes>
                <Route path="/about" element={ <AboutScreen /> } />
                <Route path="/login" element={ <LoginScreen /> } />
                <Route path="/" element={ <HomeScreen /> } />
                <Route path="*" element={ <NotFoundScreen /> } />
            </Routes>
        </Router>
    )
}