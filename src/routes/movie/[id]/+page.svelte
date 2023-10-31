<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';

	export let data;
	$: movie = data.movie;
	$: year = new Date(movie.release_date).getFullYear() || '';
</script>

<section>
	<Hero {movie} show_logo={false}>
		<div class="movie-details-large">
			<div class="heading">
				<h2 class="title">{movie.title}</h2>
				<p class="year">{year}</p>
			</div>
			<p class="overview">{movie.overview}</p>
		</div>
	</Hero>
	<div class="movie-details-small">
		<div class="heading">
			<h2 class="title">{movie.title}</h2>
			<p class="year">{year}</p>
		</div>
		<p class="overview">{movie.overview}</p>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
	}

	.movie-details-large {
		display: none;
	}

	.heading {
		display: flex;
		flex-flow: row wrap;
		gap: 1.6rem;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.title {
		font-family: 'Nokora', sans-serif;
		font-size: 2.4rem;
	}

	.year {
		font-size: 1.6rem;
	}

	.overview {
		font-size: 1.6rem;
	}

	@media only screen and (min-width: 1280px) {
		.heading {
			margin-bottom: 2rem;
		}

		.movie-details-small {
			display: none;
		}

		.movie-details-large {
			display: block;
		}
		.title {
			font-size: 2.8rem;
		}

		.year {
			font-size: 2.4rem;
		}

		.overview {
			font-size: 2.4rem;
		}
	}
</style>
