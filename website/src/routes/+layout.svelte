



<nav class="top-nav">
    <h1>top nav</h1>
    <button on:click={_toggleDarkMode}>Toggle</button>

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
        color: var(--some-value);
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
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