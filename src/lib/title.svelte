<script>
    export let title = "Gaming"
</script>

<div class="title">
    <img src="/retro-game-svgrepo-com.svg" alt="icon" >
    <h1>{title}</h1>
</div>

<style>
    .title{
        display: flex;
    }
    .title img{
        display: inline-block;
        width: 50px;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }

    .title h1{
        margin-left: 10px;
    }
</style>