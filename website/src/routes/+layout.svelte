<script>
    import './styles.css';
    import {_toggleDarkMode} from "./+layout.ts";
    let y = 0;
</script>

<nav class="top-nav">
    <h1 class="left">top nav</h1>
    <ul>
        <li><button on:click={_toggleDarkMode}>Toggle</button></li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>


</nav>


<main>
    <slot></slot>
</main>



<footer class="bottom-footer">
    <h1>footer</h1>
</footer>
{#if y < 110}
    <style>
        .top-nav{
            background-color: var(--bg-color-2);
            padding:  3vh 0 3vh 0;
            color: var(--text-color-2);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
        }
    </style>
{:else}
    <style>
        .top-nav{
            background-color: var(--bg-color-2);
            padding:  1.5vh 0 1.5vh 0;
            color: var(--text-color-2);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;

        }
    </style>
{/if}
<style>

    .top-nav {
        transition: all 0.1s ;
    }


    .top-nav ul{
        float: right;
        list-style-type: none;
        margin: 0 5vb 0 0;
        padding: 0;
    }
    .top-nav ul li{
        display: inline-block;
        margin: 0 10px;
    }
    .top-nav .left{
        float: left;
        margin-left: 4vh;
    }

    .bottom-footer{
        background-color: var(--bg-color-2);
        color: var(--text-color-2);
        padding: 20px;
        text-align: center;

    }
</style>
<svelte:window bind:scrollY={y} />
