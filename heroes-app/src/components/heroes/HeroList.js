import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

	const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

	return (
		<div className='card-grid animate__animated animate__fadeIn'>
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