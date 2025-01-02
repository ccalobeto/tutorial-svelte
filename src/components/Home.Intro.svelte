<script>
	import wordmark from "$svg/wordmark-bubble.svg";
	import copy from "$data/home.json";
</script>

<h1 aria-label={copy.title}>
	<div class="wordmark">
		{@html wordmark}
	</div>
</h1>

<div class="letter">
	<p>{@html copy.letter}</p>
</div>

<style>
	.wordmark {
		max-width: 10em;
	}
</style>
