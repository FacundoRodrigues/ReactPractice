import { heroes } from '../data/heroes'

export const getHeroById = ( id ) => {
	//find: a penas encuentra uno, no sigue buscando
	return heroes.find(hero => hero.id == id)
}