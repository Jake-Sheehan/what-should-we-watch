<script lang="ts">
	import type { MovieListResult } from '$lib/types';
	import { build_image_url } from '$lib/utils';
	import right_arrow from '$lib/icons/chevron-right.svg';
	import left_arrow from '$lib/icons/chevron-left.svg';

	export let movies: MovieListResult[];
	export let category: string = 'Popular';

	let carousel: HTMLDivElement;
	let currentScroll: number = 0;

	function handleScroll() {
		currentScroll = carousel.scrollLeft;
	}

	function handleScrollRight() {
		const firstElement = carousel.firstChild as HTMLElement;
		const offset = firstElement.clientWidth;
		if (carousel.scrollWidth - carousel.scrollLeft > carousel.clientWidth) {
			currentScroll += offset;
		} else {
			currentScroll = 0;
		}
		carousel.scrollTo({
			left: currentScroll,
			behavior: 'smooth'
		});
		console.log(currentScroll);
	}

	function handleScrollLeft() {
		const firstElement = carousel.firstChild as HTMLElement;
		const offset = firstElement.offsetWidth;
		currentScroll -= offset;
		if (currentScroll <= 0) currentScroll = 0;
		carousel.scrollTo({
			left: currentScroll,
			behavior: 'smooth'
		});
	}
</script>

<section>
	<h2>{category}</h2>

	<div class="navigation">
		<button on:click={handleScrollLeft} class="arrow">
			<img class="arrow-image" src={left_arrow} alt="left arrow" />
		</button>
		<div on:scroll={handleScroll} bind:this={carousel} class="carousel">
			{#each movies as movie}
				<figure>
					<a href={`/movie/${movie.id}`}>
						<img src={build_image_url(movie.poster_path, '500')} alt={movie.title} />
					</a>
				</figure>
			{/each}
		</div>
		<button on:click|preventDefault={handleScrollRight} class="arrow">
			<img class="arrow-image" src={right_arrow} alt="right arrow" />
		</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 2rem 0;
	}

	.arrow,
	.arrow-image {
		display: none;
	}

	h2 {
		margin: 1rem 0;
		font-family: 'Nokora', sans-serif;
		text-transform: uppercase;
		font-size: 1.2rem;
	}

	.navigation {
		max-width: 100%;
		display: flex;
		flex-flow: row nowrap;
	}

	.carousel {
		display: flex;
		gap: 0.5rem;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		max-width: 100%;
		padding: 0 1rem;
		scroll-padding-left: 0.2rem;
		-webkit-filter: drop-shadow(0 0 20px hsl(255, 100%, 25%));
		filter: drop-shadow(0 0 10px hsl(255, 100%, 25%));
		transition: all 0.1s ease-in;
		position: relative;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	.carousel figure {
		scroll-snap-align: center;
		/* scroll-snap-stop: always; */
		flex-shrink: 0;
		width: 100px;
	}

	figure {
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 10px;
		border: 2px solid hsl(255, 100%, 25%);
	}

	@media only screen and (min-width: 1280px) {
		.carousel {
			gap: 1rem;
		}

		h2 {
			font-size: 2.4rem;
		}

		.carousel figure {
			width: 200px;
		}

		.arrow-image {
			display: block;
			pointer-events: none;
			border: none;
			width: 100%;
			height: auto;
		}

		.arrow {
			display: block;
			background: transparent;
			border: none;
			width: 64px;
			min-width: 64px;
			cursor: pointer;
		}

		.arrow:hover {
			transform: scale(1.2);
		}
	}
</style>
