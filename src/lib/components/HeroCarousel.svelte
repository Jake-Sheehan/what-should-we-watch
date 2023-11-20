<script lang="ts">
	import type { MovieDetails } from '$lib/types';
	import { fade } from 'svelte/transition';
	import Hero from './Hero.svelte';
	export let movies: MovieDetails[];

	let current = 0;

	let reset: number;
	$: {
		clearInterval(reset);
		reset = setInterval(() => {
			current = (current + 1) % movies.length;
		}, 8000);
	}
</script>

<section>
	<div class="transition-enforcement">
		{#key current}
			<div class="hero" in:fade={{ duration: 500 }}>
				<Hero movie={movies[current]} />
			</div>
		{/key}
	</div>

	<div class="buttons">
		{#each movies as movie, index}
			<button class:active={index === current} on:click|preventDefault={() => (current = index)} />
		{/each}
	</div>
</section>

<style>
	section {
		width: 100%;
		margin-bottom: 1rem;
	}

	.transition-enforcement {
		display: grid;
	}

	.transition-enforcement > * {
		grid-column: 1/2;
		grid-row: 1/2;
	}

	.hero {
		margin-bottom: 1rem;
	}

	.buttons {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		margin: 0 1rem;
		width: 12px;
		height: 12px;
		border: 1px solid var(--highlight-color);
		border-radius: 100%;
		background: transparent;
		cursor: pointer;
		padding: 0;
	}

	button.active {
		background: var(--highlight-color);
	}

	button:focus {
		outline: none;
	}

	@media only screen and (min-width: 1280px) {
		section {
			margin-bottom: 2rem;
		}
	}
</style>
