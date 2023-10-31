import type { PageServerLoad } from './$types';
import * as api from '$lib/api.server';
import type { MovieDetails } from '$lib/types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const movieID = params.id;
	const movie = (await api.get(fetch, `/movie/${movieID}`, {
		append_to_response: 'images'
	})) as MovieDetails;
	return {
		movie
	};
};
