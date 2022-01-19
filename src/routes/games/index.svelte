<script context="module">
    export async function load({fetch}) {
        const res = await fetch('/games.json');
        const {games} = await res.json();
        
        if(res.ok){
            return {
                props:{
                    games
                }
            }
        }

        return {
            status: res.status,
            error: new Error('Could not load')
        }
    }
</script>

<script>
    export let games;
</script>
<div class="guides">
    <ul>
        {#each games as game}
        <li>
            <a sveltekit:prefetch href={`/games/${game.id}`}>
                {game.title}
            </a>
        </li>
        {/each}
    </ul>
</div>
<style>
    .guides {
        margin-top: 20px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>