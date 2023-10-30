<script lang="ts">
	import Carousel from './../lib/components/Carousel.svelte';
	import Hero from '$lib/components/Hero.svelte';

	export let data;

	$: hero = data.hero;
	$: popular = data.popular.results;
	$: top_rated = data.top_rated.results;
	$: genres = data.genres;
</script>

<Hero movie={hero} />

<Carousel movies={popular} category="Popular" />

<Carousel movies={top_rated} category="Top Rated" />

{#each genres as genre}
	<Carousel movies={genre.movies} category={genre.name} />
{/each}
