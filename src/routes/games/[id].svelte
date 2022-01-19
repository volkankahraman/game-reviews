<script context="module">
        export async function load({fetch, params}) {
            const id = params.id;
            const res = await fetch(`/games/${id}.json`);
          
        const {game} = await res.json();
        
        if(res.ok)
            return {
                props:{
                    game
                }
            }

        return {
            status: 301,
            // error: new Error('Could not load')
            redirect: '/games'
        }
    }
</script>

<script>
    export let game;
</script>
<div class="game">
    <h2>{game.title}</h2>
    <p>{game.body}</p>

</div>

<style>
    .game{
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);

    }
</style>