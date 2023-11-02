import movies from './movies.json';
import curators from './curators.json';

export async function load() {
	return { movies, curators };
}
