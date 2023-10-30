<script>
	import '@fontsource/roboto';
	import '@fontsource/bungee-shade';
	import '@fontsource/nokora';
	import '../styles.css';
	import menu from '$lib/icons/menu-48px.svg';
	import tmdb_logo from '$lib/logos/tmdb-logo.svg';
</script>

<header>
	<h1 class="logo">What Should We Watch?</h1>
	<img src={menu} alt="menu" />
</header>

<slot />

<footer>
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
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 2rem;
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
		padding: 2rem 1rem;
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
			padding: 2rem 0;
		}

		footer {
			padding: 4rem 0;
		}
	}
</style>
