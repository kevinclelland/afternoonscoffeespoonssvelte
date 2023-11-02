<script lang="ts">
	import { onMount } from 'svelte';
const vibes = [
  "'...Cause when I see you, it's like I'm staring down the sun...'",
  "'...It's too late to repent, don't bother with the rent...'",
  "'...Someday I'll wear pyjamas in the daytime...'",
  "'...And I'm here, to remind you, of the mess you left when you went away...'",
  "'...I just want to be who I want to be. Guess that's hard for others to see...'",
  "'...I can't take my eyes off you...'",
  "'...You're calling too late. Too late to be gracious. You do not warrant long goodbyes...'",
  "'...I want to have the same last dream again. The one where I wake up and I'm alive...'",
  "'...be the change you want to see, revolutions don't come easily...'",
  "'...Young Boy, Shoreline, Big World and he's not done...'",
  "'...So this is the verse where I'll say goodbye, and let you fade away. And this is the song that I'll give to you...'",
  "'...and there's still love and that's enough, that's enough, that's enough, that's enough grace...'",
  "'...I'm waiting for blood, to flow to my fingers. I'll be all right when my hands get warm...'",
  "'...I, I'm a new day rising. I'm a brand new sky, to hang the stars upon tonight...'"
];

 // choose a random good vibe

 onMount(() => {
 const interval = setInterval(function() {
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe

//document.querySelector(".vibe").append(vibe);
const vibeElement = document.querySelector(".vibe");
if (vibeElement) {
	vibeElement.innerHTML = vibe;
}

}, 5000);
});


</script>


<div class="text-center mx-auto flex justify-center items-center max-w-4xl">
	<div class="space-y-2">
		<h1 class="text-7xl p-4">Afternoons Coffeespoons</h1>
		<p class="italic vibe">...It's times like these you learn to live again...</p>
		<p class="text-4xl">❤️</p>
		<p class="text-2xl p-4">These are the albums you HAVE to listen to. They are not playlists. They are not singles.
			They filled our ears and hearts and became the sole context that shaped our world. <br>
			They have defined lives.</p>




			<div class="relative inline-flex group">
				<div
					class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
				</div>
				<a href="/athleteprofiles" title="Get quote now"
					class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
					role="button">Play
				</a>
			</div>
			

			<img src="/cassetteAC5.png" alt="AC Logo" class="mx-auto max-w-md">


	</div>

	
	        
    

</div>


