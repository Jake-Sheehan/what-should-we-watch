<script lang="ts">
	import { build_image_url } from '$lib/utils';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;
	$: backdrop =
		movie.images.backdrops.find((image) => !image.iso_639_1) || movie.images.backdrops[0];
	$: logo = movie.images.logos.find((image) => image.iso_639_1 === 'en') || movie.images.logos[0];
</script>

<figure>
	<a href={`/movie/${movie.id}`}>
		<img class="backdrop" src={build_image_url(backdrop.file_path, '1280')} alt={movie.title} />
	</a>
	<figcaption>
		<img class="logo" src={build_image_url(logo.file_path, '500')} alt={movie.title} />
	</figcaption>
</figure>

<style>
	figure {
		width: 100%;
		position: relative;
		margin-bottom: 2rem;
	}
	img {
		width: 100%;
	}
	figcaption {
		position: absolute;
		bottom: 5%;
		left: 5%;
		z-index: 999;
		pointer-events: none;
	}

	.backdrop {
		border-radius: 10px;
		border: 2px solid hsl(255, 100%, 25%);
		-webkit-filter: drop-shadow(0 0 20px hsl(255, 100%, 25%));
		filter: drop-shadow(0 0 20px hsl(255, 100%, 25%));
	}

	.logo {
		max-width: 150px;
		-webkit-filter: drop-shadow(0px 0px 20px #000);
		filter: drop-shadow(0px 0px 20px #000);
	}

	@media only screen and (min-width: 1280px) {
		.logo {
			max-width: 500px;
		}
	}
</style>
