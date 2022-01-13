<script>
import Title from "$lib/title.svelte";
import '../style.css';
</script>

<header>
    <Title></Title>
</header>
<main>
    <slot></slot>
</main>
<footer>
    <p>
        Copyright@ 2022 Gaming
    </p>
</footer>
<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
</style>