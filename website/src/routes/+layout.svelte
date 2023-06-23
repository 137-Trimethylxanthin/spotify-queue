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
<style>

    .top-nav{
        background-color: var(--bg-color-2);
        padding: 1vh;
        text-align: center;
        color: var(--text-color-2);
    }
    .top-nav ul{
        float: right;
        list-style-type: none;
        margin: 0 3vb 0 0;
        padding: 0;
    }
    .top-nav ul li{
        display: inline-block;
        margin: 0 10px;
    }
    .top-nav .left{
        float: left;
        margin-right: 10vh;
    }

    .bottom-footer{
        background-color: var(--bg-color-2);
        color: var(--text-color-2);
        padding: 20px;
        text-align: center;

    }
</style>

<script>
    import './styles.css';
    import {_toggleDarkMode} from "./+layout.ts";
</script>