import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const HeroCard = ({ 
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters 
}) => {

	console.log(superhero)
	return (
		<>
			{/* <div className='card ms-3'>{ superhero }</div> */}
			<div className="card ms-3" style={{ width: '15rem' }}>
				<img src={ `./assests/heroes/${ id }.jpg` } className="card-img" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{ superhero }</h5>
					<p className="card-text">{ alter_ego }</p>

					{
						(alter_ego !== characters)
            && <p className='card-text'>{ characters }</p>
					}

					<p className="card-text">
						<small className='text-muted'> {first_appearance} </small>
					</p>
					
					<Link className='btn btn-primary' to={`.hero/${id}`}>
            Mas..
					</Link>
				</div>
			</div>
		</>
    
	)
}

HeroCard.propTypes = {
	id: PropTypes.string,
	superhero: PropTypes.string,
	publisher: PropTypes.string,
	alter_ego: PropTypes.string,
	first_appearance: PropTypes.string,
	characters: PropTypes.string,
}