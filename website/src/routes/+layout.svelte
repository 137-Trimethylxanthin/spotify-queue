



<nav class="top-nav">
    <h1 class="left">top nav</h1>
    <ul>
        <li><button on:click={_toggleDarkMode}>Toggle</button></li>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>


</nav>


<div class="content">
    <slot></slot>
</div>



<footer class="bottom-footer">
    <h1>footer</h1>
</footer>
<style>
    .content{
        margin-top: 50px;
    }

    .top-nav{
        background-color: var(--some-other-value);
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        padding: 10px;
        display: inline-block;
        color: var(--some-value);
    }
    .top-nav ul{
        list-style-type: none;
        margin: 0;
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
        background-color: var(--some-other-value);
        color: var(--some-value);
        bottom: 0;
        left: 0;
        padding: 10px;
        position: fixed;
        text-align: center;
        width: 100%;
        z-index: 1;
    }
</style>

<script>
    import './styles.css';
    import {_toggleDarkMode} from "./+layout.ts";
</script>