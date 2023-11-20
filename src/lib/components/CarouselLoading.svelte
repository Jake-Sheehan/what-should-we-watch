<div />

<style>
	div {
		display: block;
		background: #0c0032;
		height: 150px;
		width: 100%;
		border-radius: 25px;
		margin: 1rem 0;
		animation-name: shimmer;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@media only screen and (min-width: 1280px) {
		div {
			height: 300px;
		}
	}

	@keyframes shimmer {
		0% {
			background: #0c0032;
		}
		50% {
			background: transparent;
		}
		to {
			background: #0c0032;
		}
	}
</style>
