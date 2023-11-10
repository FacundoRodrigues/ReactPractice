import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
	const navigate = useNavigate()
	const { dispatch }  = useContext(AuthContext)
	
	const handleClick = () => {		
		dispatch({
			type: types.login,
			payload: {
				name: 'Facu'
			}
		})

		navigate('/', { replace: true })
	}

	return (
		<div className='container mt-5'>
			<h1>LoginScreen</h1>
			<hr />

			<button
				className='btn btn-primary'
				onClick={ handleClick }
			>
				Login
			</button>
		</div>
	)
}