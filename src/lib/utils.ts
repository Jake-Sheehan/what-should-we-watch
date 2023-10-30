const image_base = 'https://image.tmdb.org/t/p/';

export function build_image_url(path: string, width: string) {
	return `${image_base}w${width}${path}`;
}
