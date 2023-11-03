import type { PageServerLoad } from './$types';
import * as api from '$lib/api.server';
import type { GenreList, MovieDetails, MovieList, MovieListResult } from '$lib/types';

export const load: PageServerLoad = async ({ fetch }) => {
	const [popular, top_rated] = await Promise.all([
		api.get(fetch, 'movie/popular', {
			language: 'en-US',
			page: '1'
		}) as Promise<MovieList>,
		api.get(fetch, 'movie/top_rated', {
			language: 'en-US',
			page: '1'
		}) as Promise<MovieList>
	]);

	const hero = (await api.get(fetch, `movie/${popular.results[0].id}`, {
		append_to_response: 'images'
	})) as MovieDetails;

	// remove hero from results so it does not repeat
	popular.results.shift();

	// generate genre categories

	// on navigation layout doesn't reload and we lose locals

	const genresResponse = (await api.get(fetch, 'genre/movie/list', {
		language: 'en'
	})) as GenreList;
	const genres_list = genresResponse.genres;

	// gets all genres from api and returns an array
	const genre_categories_response = await Promise.all(
		genres_list.map((genre) => {
			return api.get(fetch, 'discover/movie', {
				with_genres: genre.id.toString(),
				page: '1'
			}) as Promise<MovieList>;
		})
	);

	// empty genres array
	const genres: { name: string; movies: MovieListResult[] }[] = [];

	// goes through each genre from list and assigns movie list to it,
	// then puts it in array
	for (let i = 0; i < genres_list.length; i++) {
		genres.push({
			name: genres_list[i].name,
			movies: genre_categories_response[i].results
		});
	}

	return {
		popular,
		top_rated,
		genres,
		hero
	};
};
