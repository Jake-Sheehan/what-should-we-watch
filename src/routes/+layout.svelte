<script lang="ts">
	import '@fontsource/roboto';
	import '@fontsource/bungee-shade';
	import '@fontsource/nokora';
	import '../styles.css';
	import menu from '$lib/icons/menu-48px.svg';
	import tmdb_logo from '$lib/logos/tmdb-logo.svg';

	let footer_height: number;
	let header_height: number;
</script>

<header bind:offsetHeight={header_height}>
	<h1 class="logo">What Should We Watch?</h1>
	<img src={menu} alt="menu" />
</header>

<main style="margin-bottom: {footer_height + 12}px; margin-top: {header_height + 12}px">
	<slot />
</main>

<footer bind:offsetHeight={footer_height}>
	<div class="copyright">
		<p>&copy; 2023 Jake Sheehan</p>
	</div>
	<div class="attribution">
		<p>Powered by</p>
		<img class="tmdb-logo" src={tmdb_logo} alt="TMDB Logo" />
	</div>
</footer>

<style>
	header {
		background: linear-gradient(to bottom, hsl(254, 100%, 2%) 90%, hsla(254, 100%, 2%, 0));
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 2rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}

	main {
		width: 100%;
		height: 100%;
	}

	.logo {
		font-family: 'Bungee Shade';
	}

	h1 {
		font-size: 1.6rem;
	}

	footer {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to top, hsl(254, 100%, 2%) 90%, hsla(254, 100%, 2%, 0));
	}

	footer p {
		font-size: 1.2rem;
	}

	.attribution {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}

	.attribution p {
		padding-right: 10px;
	}

	.tmdb-logo {
		height: auto;
		width: 100px;
	}

	/* desktop */
	@media only screen and (min-width: 1280px) {
		h1 {
			font-size: 3.2rem;
		}

		header {
			padding: 2rem 5rem;
		}

		footer {
			padding: 2rem 5rem;
		}
	}
</style>
