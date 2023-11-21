import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({ children, isAuthenticated }) => {
	const location = useLocation()

	localStorage.setItem('lastPath', location.pathname)

	if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} />
	
	return children
}

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	children: PropTypes.object.isRequired
}