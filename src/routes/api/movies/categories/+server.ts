import { BEARER_TOKEN } from '$env/static/private';
import type { GenreCategory, GenreList, MovieList } from '$lib/types.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	console.log('here');
	const genreConfigURL = 'https://api.themoviedb.org/3/genre/movie/list';
	const genreURL = 'https://api.themoviedb.org/3/discover/movie';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${BEARER_TOKEN}`
		}
	};
	const genreConfigResponse = await fetch(genreConfigURL, options);
	const genreConfigData = (await genreConfigResponse.json()) as GenreList;
	const genreList = genreConfigData.genres;

	// gets all genres from api and returns an array
	const genreCategoriesResponse = await Promise.all(
		genreList.map((genre) => {
			const query = new URLSearchParams({
				with_genres: genre.id.toString(),
				page: '1'
			});
			return fetch(`${genreURL}?${query}`, options)
				.then((res) => res.json() as Promise<MovieList>)
				.catch((error) => {
					// TODO: this needs to be changed to handle error
					throw new Error(error);
				});
		})
	);

	// empty genres array
	const genres: GenreCategory[] = [];

	// goes through each genre from list and assigns movie list to it,
	// then puts it in array
	for (let i = 0; i < genreList.length; i++) {
		genres.push({
			name: genreList[i].name,
			movies: genreCategoriesResponse[i].results
		});
	}

	// cache control
	setHeaders({
		'cache-control': 'max-age=3600'
	});

	return new Response(JSON.stringify(genres));
}
