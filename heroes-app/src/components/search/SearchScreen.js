import React, { useMemo } from 'react'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useSearchParams  } from 'react-router-dom'
import { getHeroByName } from '../../selectors/getHeroByName'

export const SearchScreen = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	
	const queryString = searchParams.get('q')
	const [ formValues, hanldeInputChange ] = useForm({
		searchText: queryString && ''
	})
	
	const { searchText } = formValues
	
	const heroesFiltered = useMemo(() => getHeroByName(queryString), [queryString])

	const handleSearch = (e) => {
		e.preventDefault()
		searchParams.set('q', searchText)
		setSearchParams(searchParams)
	}

	return (
		<>
			<h1>SearchScreen</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Search form</h4>
					<hr />

					<form onSubmit={ handleSearch }>
						<input
							type='text'
							name='searchText'
							placeholder='Find your hero'
							className='form-control'
							autoComplete='off'
							onChange={ hanldeInputChange }
						/>

						<button
							type='submit'
							className='btn m-1 btn-block btn-outline-primary'
						>
              Search
						</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results: </h4>
					<hr />
					{
						(queryString === '') 
						&&
						<div className='alert alert-info'>
							Search a Hero
						</div>
					}

					{
						(queryString !== '' && heroesFiltered.length === 0) 
						&&
						<div className='alert alert-info'>
							No matches with <strong>{ queryString }</strong>
						</div>
					}

					{
						heroesFiltered.map(hero =>
							<HeroCard 
								key={hero.id}
								{...hero}
							/>
						)
					}
				</div>
			</div>
		</>
	)
}
