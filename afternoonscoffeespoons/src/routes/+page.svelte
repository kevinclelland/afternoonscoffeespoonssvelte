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

}, 4000);
});


</script>


<div class="text-center mx-auto flex justify-center items-center max-w-4xl">
	<div class="">
		<h1 class="text-4xl sm:text-6xl p-4">Afternoons Coffeespoons</h1>
		<p class="font-grapenuts vibe text-xl max-w-sm mx-auto h-14 p-2">...It's times like these you learn to live again...</p>
		<p class="text-4xl p-4">❤️</p>
		<p class="text-2xl p-4">Music albums that have changed, shaped and defined lives.</p>




			<div class="relative inline-flex group">
				<div
					class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
				</div>
				<a href="/curators" title="Go to Curators"
					class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
					role="button">▶ Play
				</a>
			</div>
			

			<img src="/cassette.webp" alt="AC Logo" class="mx-auto p-4 max-w-full">

			<div class="text-center mx-auto text-xl sm:text-2xl">
				

				<p class="p-2">A desk, an afternoon, an abundance of time.</p>
				<p class="p-2">Your music player, a cup of coffee, a stack of albums.</p>
				<p class="p-2">The only relativity the Afternoon has is your stirring of a Coffeespoon while the kettle boils yet again.</p>
				<p class="max-w-2xl text-center mx-auto text-2xl italic m-6">
					"...Afternoons will be measured out...measured out, measured with Coffeespoons and T.S. Eliot"
					</p>
				<p class="p-2 text-xl">The name is inspired by the Crash Test Dummies song "Afternoons & Coffeespoons" which took inspiration from the poem The Love Song of J. Alfred Prufrock by T.S Eliot.</p>
				
				
				<p class="p-4 text-xl">Email: kevin@afternoonscoffeespoons.com</p>
			</div>


	</div>

	
	        
    

</div>


