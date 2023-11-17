import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoute = ({ children, isAuthenticated}) => {
	const location = useLocation()

	if (isAuthenticated) return <Navigate to="/" state={{ from: location }} />
	
	return children
}

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	children: PropTypes.object.isRequired
}