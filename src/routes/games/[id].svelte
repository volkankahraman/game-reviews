<script context="module">
        export async function load({fetch, params}) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        const id = params.id;
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const game = await res.json();
        
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