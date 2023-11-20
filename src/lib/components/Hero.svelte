<script lang="ts">
	import { build_image_url } from '$lib/utils';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;
	export let show_logo: boolean = true;
	$: backdrop =
		movie.images.backdrops.find((image) => !image.iso_639_1) || movie.images.backdrops[0];
	$: logo = movie.images.logos.find((image) => image.iso_639_1 === 'en') || movie.images.logos[0];
</script>

<figure>
	<a href={`/movie/${movie.id}`}>
		<img class="backdrop" src={build_image_url(backdrop.file_path, '1280')} alt={movie.title} />
	</a>
	{#if show_logo}
		<figcaption class="with-logo">
			<img class="logo" src={build_image_url(logo.file_path, '500')} alt={movie.title} />
		</figcaption>
	{:else}
		<figcaption class="no-logo">
			<slot />
		</figcaption>
	{/if}
</figure>

<style>
	figure {
		width: 100%;
		position: relative;
	}
	img {
		width: 100%;
	}
	.with-logo {
		position: absolute;
		bottom: 5%;
		left: 5%;
		z-index: 2;
		pointer-events: none;
	}

	.no-logo {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		border-radius: 10px;
		overflow: auto;
	}

	.backdrop {
		border-radius: 10px;
		border: 2px solid hsl(255, 100%, 25%);
		-webkit-filter: drop-shadow(0 0 20px hsl(255, 100%, 25%));
		filter: drop-shadow(0 0 20px hsl(255, 100%, 25%));
	}

	.logo {
		max-width: 150px;
		-webkit-filter: drop-shadow(0 0 30px hsl(0, 0%, 25%));
		filter: drop-shadow(0 0 30px hsl(0, 0%, 25%));
	}

	@media only screen and (min-width: 1280px) {
		.logo {
			max-width: 500px;
		}

		.no-logo {
			top: auto;
			background: linear-gradient(to top, hsla(0, 0%, 0%, 0.7) 90%, hsla(0, 0%, 0%, 0));
			padding: 2rem;
			border-radius: 0 0 10px 10px;
		}
	}
</style>
