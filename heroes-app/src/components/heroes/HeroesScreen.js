import React, { useEffect, useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroesScreen = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { heroeId } = useParams()
	
	const heroe = useMemo(() => getHeroById(heroeId), [heroeId])

	useEffect(() => {
		if(!heroe){
			navigate('/marvel')
		}
	},[navigate])

	const {
		superhero,
		alter_ego,
		publisher,
		first_appearance,
		characters 
	} = heroe

	const handleClick = () => {
		console.log(location)
		if(location.key === 'default') navigate('/marvel')
		else navigate(-1)
	}
	
	return (
		<>
			<hr />
			<div className='row animate__animated animate__fadeInDown'>
				<div className='col-4'>
					<img src={ `/assests/heroes/${ heroeId }.jpg` } className="img-thumbnail" alt={superhero} />
				</div>
				<div className='col-8'>
					<h3>{ superhero }</h3>
					<p><b>Alter ego: </b> { alter_ego }</p>
					<p><b>Comic: </b> { publisher }</p>
					<p><b>Personajes: </b> { characters }</p>
					<p><b>Primera aparición: </b> <i>{ first_appearance }</i></p>

					<button 
						className='btn btn-primary'
						onClick={ handleClick }
					>
						Volver
					</button>
				</div>
			</div>
		</>
	)
}