import React from 'react'
import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

	const navigate = useNavigate()
	const { user:{name}, dispatch } = useContext(AuthContext)

	const userName = name === undefined ? '' : name
	
	const handleLogout = () => {
		dispatch({
			type: types.logout
		})

		navigate('/login')
	}

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			
			<Link 
				className="navbar-brand" 
				to="/"
			>
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">

					<NavLink 
						className="nav-item nav-link" 
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink 
						className="nav-item nav-link" 
						to="/dc"
					>
						DC
					</NavLink>

					<NavLink 
						className="nav-item nav-link" 
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2" style={{ direction: 'rtl'}}>
				<ul className="navbar-nav ml-auto">
					<button 
						className="nav-item nav-link btn"
						onClick={ handleLogout }
					>
						Logout
					</button>

					<span className='nav-item nav-link text-info'>
						{userName}
					</span>
				</ul>
			</div>
		</nav>
	)
}