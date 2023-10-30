import type { LayoutServerLoad } from './$types';
import * as api from '$lib/api.server';
import type { GenreList } from '$lib/types';

export const load: LayoutServerLoad = async ({ locals, fetch }) => {
	const genres_result = (await api.get(fetch, 'genre/movie/list', {
		language: 'en'
	})) as GenreList;

	locals.genres = genres_result.genres;
};
