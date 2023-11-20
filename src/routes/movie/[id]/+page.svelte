<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';

	export let data;
	$: movie = data.movie;
	$: releaseDate = new Date(movie.release_date);
	$: year = releaseDate.getFullYear() || '';

	const languageNames = new Intl.DisplayNames(['en'], {
		type: 'language'
	});
</script>

<section>
	<div class="hero">
		<Hero {movie} show_logo={false}>
			<div class="movie-details-large">
				<div class="heading">
					<h2 class="title">{movie.title}</h2>
					<p class="year">{year}</p>
				</div>
				<p class="overview">{movie.overview}</p>
			</div>
		</Hero>
	</div>
	<div class="movie-details-small">
		<div class="heading">
			<h2 class="title">{movie.title}</h2>
			<p class="year">{year}</p>
		</div>
		<p class="overview">{movie.overview}</p>
	</div>

	<dl>
		<dt>Released</dt>
		<dd>
			{releaseDate.toLocaleDateString('en-US', {
				month: 'short',
				day: 'numeric',
				year: 'numeric'
			})}
		</dd>

		<dt>Runtime</dt>
		<dd>{movie.runtime} min</dd>

		<dt>Language</dt>
		<dd>{languageNames.of(movie.original_language)}</dd>

		<dt>Genre</dt>
		<dd>{movie.genres.map((genre) => genre.name).join(', ')}</dd>
	</dl>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
	}

	.hero {
		margin-bottom: 2rem;
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

	dl {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 1.2rem;
		margin: 2rem 0;
	}

	dt {
		text-transform: uppercase;
		font-size: 1.2rem;
		float: left;
		clear: left;
	}

	dd {
		margin: 0;
		font-size: 1.6rem;
		float: left;
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

		dt {
			text-transform: uppercase;
			font-size: 1.6rem;
			float: left;
			clear: left;
		}

		dd {
			margin: 0;
			font-size: 2.4rem;
			float: left;
		}
	}
</style>
