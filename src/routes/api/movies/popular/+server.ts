import { BEARER_TOKEN } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	console.log('here');
	const url = 'https://api.themoviedb.org/3/movie/popular';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${BEARER_TOKEN}`
		}
	};
	const response = await fetch(url, options);
	setHeaders({
		'cache-control': 'max-age=3600'
	});
	return new Response(response.body);
}
