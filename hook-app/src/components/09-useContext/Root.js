import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { Navbar } from './Navbar'

export const Root = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/about" element={ <AboutScreen /> } />
                <Route path="/login" element={ <LoginScreen /> } />
                <Route path="/" element={ <HomeScreen /> } />
            </Routes>
        </>
    )
}