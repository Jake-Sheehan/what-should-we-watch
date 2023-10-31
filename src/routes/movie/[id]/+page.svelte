<script lang="ts">
	export let data;
	$: movie = data.movie;
</script>

<h1>{movie.title}</h1>
