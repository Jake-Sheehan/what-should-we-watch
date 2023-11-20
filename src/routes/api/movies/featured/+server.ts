import { BEARER_TOKEN } from '$env/static/private';
import type { MovieList } from '$lib/types.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	let url = 'https://api.themoviedb.org/3/trending/movie/day';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${BEARER_TOKEN}`
		}
	};
	const response = await fetch(url, options);

	const body = (await response.json()) as MovieList;
	const results = body.results.slice(0, 5);

	url = 'https://api.themoviedb.org/3/movie';
	const q = new URLSearchParams({
		append_to_response: 'images'
	});

	const movieDetailsListResult = await Promise.all(
		results.map((result) => {
			return fetch(`${url}/${result.id}?${q}`, options);
		})
	);

	const movieDetailsList = await Promise.all(
		movieDetailsListResult.map((res) => {
			return res.json();
		})
	);

	setHeaders({
		'cache-control': 'max-age=86400'
	});

	return json({
		results: movieDetailsList,
		total_results: movieDetailsList.length
	});
	// return type MovieList
}
