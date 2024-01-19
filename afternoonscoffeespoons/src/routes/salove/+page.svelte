<script lang="ts">
let albums = [
{albumcover: "/RSA/a1.jpg", albumname: "All or Nothing", albumartist: "The Black Lapels"},
{albumcover: "/RSA/a2.jpg", albumname: "The Lukka EP", albumartist: "The Kickstands"},{albumcover: "/RSA/a3.jpg", albumname: "Watching & Waiting", albumartist: "Rambling Bones"},
{albumcover: "/RSA/a4.jpg", albumname: "Be Brave", albumartist: "Shotgun Tori"},
{albumcover: "/RSA/a5.jpg", albumname: "Son of Old", albumartist: "Son Of Old"},
{albumcover: "/RSA/a6.jpg", albumname: "My Heart Belongs in Africa", albumartist: "Haylea Heyns"},
{albumcover: "/RSA/a7.jpg", albumname: "Buried", albumartist: "Tim Johnson"},
{albumcover: "/RSA/a8.jpg", albumname: "All that is should be", albumartist: "Plush"},
{albumcover: "/RSA/a9.jpg", albumname: "Ubaba", albumartist: "Urban Village"},
{albumcover: "/RSA/a10.jpg", albumname: "The Healing", albumartist: "BCUC"},
{albumcover: "/RSA/a11.jpg", albumname: "A Noise in the Void", albumartist: "Kahn"},
{albumcover: "/RSA/a12.jpg", albumname: "Shotgun Tori and The Hounds", albumartist: "Shotgun Tori and The Hounds"},
{albumcover: "/RSA/a13.jpg", albumname: "Roadhouse Royalty", albumartist: "Trevor Rebello"},
{albumcover: "/RSA/a14.jpg", albumname: "Picture Perfect", albumartist: "Perez"},
{albumcover: "/RSA/a15.jpg", albumname: "Indie Soul", albumartist: "Josie Field"},
{albumcover: "/RSA/a16.jpg", albumname: "One", albumartist: "Alexandra May"},
{albumcover: "/RSA/a17.jpg", albumname: "Just Becuase", albumartist: "Thus Far and Bevan Lynch"},
{albumcover: "/RSA/a18.jpg", albumname: "Ghost", albumartist: "Matthew Mole"},
{albumcover: "/RSA/a19.jpg", albumname: "The Question, Sir, Is Why?", albumartist: "Dustland Express"},
{albumcover: "/RSA/a20.jpg", albumname: "Shifting Boundaries", albumartist: "Dave Starke"},
{albumcover: "/RSA/a21.jpg", albumname: "Slap in the Face", albumartist: "Henry Ate"},
{albumcover: "/RSA/a22.jpg", albumname: "Are we fine yet?", albumartist: "Shotgun Tori"},
{albumcover: "/RSA/a23.jpg", albumname: "Rewind", albumartist: "Wonderboom"},
{albumcover: "/RSA/a24.jpg", albumname: "Trinity", albumartist: "TKZEE"},
{albumcover: "/RSA/a25.jpg", albumname: "Afterlifesatisfaction", albumartist: "Springbok Nude Girls"},
{albumcover: "/RSA/a26.jpg", albumname: "Nomvula", albumartist: "Freshly Ground"},
{albumcover: "/RSA/a27.jpg", albumname: "A South African Story", albumartist: "Johnny Clegg"},
{albumcover: "/RSA/a28.jpg", albumname: "Media", albumartist: "Karen Zoid"},
{albumcover: "/RSA/a29.jpg", albumname: "Dutch Courage", albumartist: "aKING"},
{albumcover: "/RSA/a30.jpg", albumname: "Tree63", albumartist: "Tree63"},
{albumcover: "/RSA/a31.jpg", albumname: "Something for now", albumartist: "Just Jinjer"},
{albumcover: "/RSA/a32.jpg", albumname: "Home is where the music is", albumartist: "Hugh Masekela"}]

</script>

<h1 class="text-center text-4xl sm:text-6xl p-4">Afternoons Coffeespoons</h1>
<div class="text-center text-6xl p-4">SA LOVE</div>
    
<p class="text-center max-w-md mx-auto p-4">Some world class South African albums. Follow the playlist on Spotify.</p>

<iframe class="max-w-fit sm:max-w-xl mx-auto" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/25m6KgekuU7Fp6R5izHeef?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="spotify playlist"></iframe>
    
<div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">

    {#each albums as {albumcover, albumname, albumartist}, index (albumcover)}
        <div class="col-span-1 card card-hover overflow-hidden max-w-xs">
            <header class="flex justify-around">
                <img src={albumcover} class="bg-black/50 max-w-fill" alt="Post" />
            </header>
            <div class="p-4 space-y-4">
                <h3 class="h3">{albumname}</h3>

                <article>
                    <p class="description">{albumartist}</p>
                </article>
            </div>

            
        </div>
    {/each}
    
</div>
