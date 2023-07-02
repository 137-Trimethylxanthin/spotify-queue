<script lang="ts">
	import { element } from "svelte/internal";
    /** @type {import('./$types').PageServerLoad} */
    import{ _Song as Song , _currentSong as currentSong, _queue as queue} from "./+page";


    queue[0] = new Song("test_title", "test_artist", "test_duration", "test_cover", "test_id");
    queue[1] = new Song("test_title", "test_artist", "test_duration", "test_cover", "test_id");
    queue[2] = new Song("test_title", "test_artist", "test_duration", "test_cover", "test_id");
    let inputValue = "";
    let recommend_songs: any[] = [];
    let allRecommend_songs: any[] = [];
    let page = 1;
    let maxPage: number = 1;

    async function searchSongs(querey:string) {
        page = 1;
        for (let i = 0; i < 10; i++) {
            allRecommend_songs[i] = new Song("test_title", "test_artist", "test_duration", "test_cover", i.toString());
        }
        maxPage = Math.floor(allRecommend_songs.length / 3);

        for (let i = 0; i < 3 && i < allRecommend_songs.length; i++) {
            recommend_songs.push(allRecommend_songs[i]);
        }
    }

    function changePage(direction: number) {
        page += direction;
        if (page < 1) {
            page = 1;
        }
        else if (page > maxPage) {
            page = maxPage;
        }
        else{
            recommend_songs = [];
            for (let i = 0; i < 3 && i < allRecommend_songs.length; i++) {
                recommend_songs.push(allRecommend_songs[i + (page - 1) * 3]);
            }
        }
        
    }

</script>
<body>
    <div class="title">
        <h1>Spotify Music</h1>
        <hr>
    </div>


    <div class="cplaying">
        <h2>Currently playing</h2>
        <img src="{currentSong.cover}" alt="">
        <h3 id="currentTitle">{currentSong.title}</h3>
    </div>

    <div class="queue">
        <hr>
        <h2>Queue:</h2>
        {#each queue as Song}
            <div class="song">
                <img src="{Song.cover}" alt="">
                <ul>
                    <li><h3>{Song.title}</h3></li>
                    <li><p>{Song.id}, {Song.artist}</p></li>
                </ul>
            </div>
        {/each}
        <hr>
    </div>



    <div class="addSong">
        <h2>Suche hier:</h2>
        <input 
            bind:value={inputValue} 
            on:input={async () => {
                if (inputValue.length > 0) {
                    await searchSongs(inputValue);
                }
                else {
                    recommend_songs = [];
                }
            }}
            type="text" id="search" placeholder="Type here"
        >

        {#if inputValue === ""}
        <p>
            Du kannst entweder nach einen title suchen <br>
            oder du kannst einfach den link hier rein kopieren
        </p>
        {:else}
            <p>Suche nach: {inputValue}</p>
            {#if recommend_songs.length > 0}
                <hr>
                {#each recommend_songs as song}
                    <div class="song">
                        <img src="{song.cover}" alt="">
                        <ul>
                            <li><h3>{song.title}</h3></li>
                            <li><p>{song.id}, {song.artist}</p></li>
                        </ul>
                    </div>
            {/each}
            <hr>
            <p>Page: {page}/{maxPage}</p>
            <button on:click={() => changePage(-1)}>Back</button>
            <button on:click={() => changePage(1)}>Next</button>
            {:else}
                <p>Keine Ergebnisse</p>
            {/if}
        {/if}

    </div>
</body>


<style>
    .addSong {
        text-align: center;
        margin: 4vh auto 0 auto;
        width: fit-content;
        padding: 1vh 2vh 1vh 2vh;
    }
    .addSong h2 {
        font-size: 3.2vh;
    }
    .addSong p{
        font-size: 2.5vh;

    }
    .addSong input {
        font-size: 2.5vh;
        margin: 2vh 0 2vh 0;
    }
    .addSong button {
        font-size: 2.5vh;
        margin: 2vh 0 2vh 0;
    }
    .title {
        text-align: center;
        margin-bottom: 4vh;
    }
    .title h1 {
        font-size: 8vh;
        color: var(--actzent-color-1);
    }
    .title hr {
        width: 50%;
        margin: auto;
        height: 2px;
        background-color: var(--text-color-1);
    }


    .cplaying {
        display: flex;
        flex-direction: column;
        text-align: center;
        border: var(--actzent-color-1) solid 2px;
        width: fit-content;
        margin: 4vh auto 0 auto;
        border-radius: 5px;
        padding: 1vh 2vh 1vh 2vh;
    }
    .cplaying h2 {
        font-size: 5vh;
        margin-bottom: 2vh;
    }
    .cplaying img {
        width: 30vh;
        height: 30vh;
        border-radius: 25%;
        margin: 0 auto 2vh auto;
    }
    .cplaying h3 {
        font-size: 3.2vh;
    }

    .queue {
        text-align: center;
        margin: 4vh auto 0 auto;
        border: var(--actzent-color-1) solid 2px;
        width: fit-content;
        border-radius: 5px;
        padding: 1vh 2vh 1vh 2vh;
    }

    .queue h2 {
        font-size: 3.2vh;
        margin: 2vh 0 2vh 0;
    }

    .queue .song h3 {
        font-size: 2.5vh;
        display: flex;
    }
    .queue .song p {
        font-size: 2vh;
        display: flex;
    }
    .queue .song img {
        width: 10vh;
        height: 10vh;
        border-radius: 50%;
        margin: 1vh 0 1vh 0;
        display: flex;
    }
    .queue .song {
        display: flex;
        margin: 2vh 0 2vh 0;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .queue .song ul {
        flex-direction: column;
        margin: 0 0 0 2vh;
        list-style: none;
    }


</style>