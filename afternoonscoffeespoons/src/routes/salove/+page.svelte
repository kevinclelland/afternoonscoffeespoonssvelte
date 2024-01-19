<script lang="ts">
let albums = [
{albumcover: "/RSA/a1.webp", albumname: "All or Nothing", albumartist: "The Black Lapels"},
{albumcover: "/RSA/a2.webp", albumname: "The Lukka EP", albumartist: "The Kickstands"},
{albumcover: "/RSA/a3.webp", albumname: "Watching & Waiting", albumartist: "Rambling Bones"},
{albumcover: "/RSA/a4.webp", albumname: "Be Brave", albumartist: "Shotgun Tori"},
{albumcover: "/RSA/a5.webp", albumname: "Son of Old", albumartist: "Son Of Old"},
{albumcover: "/RSA/a6.webp", albumname: "In Parallel", albumartist: "Silent Generator"},
{albumcover: "/RSA/a7.webp", albumname: "Buried", albumartist: "Tim Johnson"},
{albumcover: "/RSA/a8.webp", albumname: "All that is should be", albumartist: "Plush"},
{albumcover: "/RSA/a9.webp", albumname: "Ubaba", albumartist: "Urban Village"},
{albumcover: "/RSA/a10.webp", albumname: "The Healing", albumartist: "BCUC"},
{albumcover: "/RSA/a11.webp", albumname: "A Noise in the Void", albumartist: "Kahn"},
{albumcover: "/RSA/a12.webp", albumname: "Shotgun Tori and The Hounds", albumartist: "Shotgun Tori and The Hounds"},
{albumcover: "/RSA/a13.webp", albumname: "Roadhouse Royalty", albumartist: "Trevor Rebello"},
{albumcover: "/RSA/a14.webp", albumname: "Picture Perfect", albumartist: "Perez"},
{albumcover: "/RSA/a15.webp", albumname: "Indie Soul", albumartist: "Josie Field"},
{albumcover: "/RSA/a16.webp", albumname: "One", albumartist: "Alexandra May"},
{albumcover: "/RSA/a17.webp", albumname: "Just Becuase", albumartist: "Thus Far and Bevan Lynch"},
{albumcover: "/RSA/a18.webp", albumname: "Ghost", albumartist: "Matthew Mole"},
{albumcover: "/RSA/a19.webp", albumname: "The Question, Sir, Is Why?", albumartist: "Dustland Express"},
{albumcover: "/RSA/a20.webp", albumname: "Shifting Boundaries", albumartist: "Dave Starke"},
{albumcover: "/RSA/a21.webp", albumname: "Slap in the Face", albumartist: "Henry Ate"},
{albumcover: "/RSA/a22.webp", albumname: "Are we fine yet?", albumartist: "Shotgun Tori"},
{albumcover: "/RSA/a23.webp", albumname: "Rewind", albumartist: "Wonderboom"},
{albumcover: "/RSA/a24.webp", albumname: "Trinity", albumartist: "TKZEE"},
{albumcover: "/RSA/a25.webp", albumname: "Afterlifesatisfaction", albumartist: "Springbok Nude Girls"},
{albumcover: "/RSA/a26.webp", albumname: "Nomvula", albumartist: "Freshly Ground"},
{albumcover: "/RSA/a27.webp", albumname: "A South African Story", albumartist: "Johnny Clegg"},
{albumcover: "/RSA/a28.webp", albumname: "Media", albumartist: "Karen Zoid"},
{albumcover: "/RSA/a29.webp", albumname: "Dutch Courage", albumartist: "aKING"},
{albumcover: "/RSA/a30.webp", albumname: "Tree63", albumartist: "Tree63"},
{albumcover: "/RSA/a31.webp", albumname: "Something for now", albumartist: "Just Jinjer"},
{albumcover: "/RSA/a32.webp", albumname: "Home is where the music is", albumartist: "Hugh Masekela"},
{albumcover: "/RSA/a33.webp", albumname: "My Heart Belongs in Africa", albumartist: "Haylea Heyns"}]

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
