<script lang="ts">
	import Carousel from './../lib/components/Carousel.svelte';
	import type { GenreCategory, MovieDetails, MovieDetailsList, MovieList } from '$lib/types';
	import CarouselLoading from '$lib/components/CarouselLoading.svelte';
	import HeroCarousel from '$lib/components/HeroCarousel.svelte';

	async function getFeaturedMovies() {
		const res = await fetch('/api/movies/featured');
		const data = (await res.json()) as MovieDetailsList;
		return data;
	}

	const featuredPromise = getFeaturedMovies();

	async function getPopluarMovies() {
		const res = await fetch('/api/movies/popular');
		const data = (await res.json()) as MovieList;
		return data;
	}

	const popularPromise = getPopluarMovies();

	async function getTopRatedMovies() {
		const res = await fetch('/api/movies/top-rated');
		const data = (await res.json()) as MovieList;
		return data;
	}

	const topRatedPromise = getTopRatedMovies();

	async function getGenres() {
		const res = await fetch('/api/movies/categories');
		const data = (await res.json()) as GenreCategory[];
		return data;
	}

	const genresPromise = getGenres();
</script>

{#await featuredPromise}
	<p>...loading</p>
{:then data}
	<HeroCarousel movies={data.results} />
{/await}

{#await popularPromise}
	<CarouselLoading />
{:then data}
	<Carousel movies={data.results} category="Popular" />
{/await}

{#await topRatedPromise}
	<CarouselLoading />
{:then data}
	<Carousel movies={data.results} category="Top Rated" />
{/await}

{#await genresPromise}
	<CarouselLoading />
{:then data}
	{#each data as genre}
		<Carousel movies={genre.movies} category={genre.name} />
	{/each}
{/await}
