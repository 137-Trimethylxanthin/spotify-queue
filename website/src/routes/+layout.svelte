
<script>
    import './styles.css'
</script>


<nav class="top-nav">
    <h1>top nav</h1>
</nav>

<div>
    <h1>i am hidden</h1>
</div>

<slot></slot>


<footer class="bottom-footer">
    <h1>footer</h1>
</footer>
<style>
    :global(*){
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        overflow: scroll;
        scrollbar-width: thin;
        color: white;
    }
    :global(body){
        background-color: #1e1e1e;
    }

    .top-nav{
        background-color: #333;
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    .bottom-footer{
        background-color: #333;
        bottom: 0;
        color: #fff;
        left: 0;
        padding: 10px;
        position: fixed;
        text-align: center;
        width: 100%;
        z-index: 1;
    }
</style>