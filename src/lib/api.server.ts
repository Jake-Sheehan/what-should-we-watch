import { BEARER_TOKEN } from '$env/static/private';

const base = 'https://api.themoviedb.org/3';

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	let response: Response;

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${BEARER_TOKEN}`
		}
	};

	if (params) {
		const query = new URLSearchParams(params);
		response = await fetch(`${base}/${endpoint}?${query}`, options);
	} else {
		response = await fetch(`${base}/${endpoint}`, options);
	}
	return await response.json();
}
