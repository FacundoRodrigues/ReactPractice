import React from 'react'
import PropTypes from 'prop-types'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

	const heroes = getHeroByPublisher(publisher)
	return (
		<div className='card-grid'>
			{
				heroes.map(heroe => 
					<HeroCard
						key={heroe.id}
						{ ...heroe }
					>
					</HeroCard>
				)
			}
		</div>
	)
}

HeroList.propTypes = {
	publisher : PropTypes.string.isRequired
}