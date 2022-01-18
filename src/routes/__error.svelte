<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error }) {
		return {
			props: { error }
		};
	}
</script>

<script>
	export let error;
</script>

<div class="error">
    <h2>Ooops!</h2>
    <p>
        {error.message}
    </p>
    <a href="/games"> View All Games</a>
</div>

<style>
    .error{
        text-align: center;
        margin-bottom: 60px;
    }
</style>
