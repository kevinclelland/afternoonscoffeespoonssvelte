<script lang="ts">
	import { page } from '$app/stores';

	$: curator = data.curators.find((curator) => curator.id === $page.params.id);
	let element: HTMLElement;
	export let data;

</script>



{#if curator}
	
		
	<div class="mx-auto max-w-sm p-4">
	<div class="col-span-1 card card-hover overflow-hidden">
		<header class="flex justify-around" bind:this={element}>
		<img class="bg-black/50 max-w-fill" src={curator.avatar} alt={curator.title}/>
		</header>
	<div class="p-4 space-y-4">
		<h1 class="h1">	{curator.title}	</h1>
		<p class="overview">{curator.overview}</p>
		<p class="overview">{curator.bio}</p>
	</div>
	</div>
	</div>


	
			
	<div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">

		{#each curator.albumcovers as albumcover, index (albumcover)}
			<div class="col-span-1 card card-hover overflow-hidden max-w-xs">
				<header class="flex justify-around">
					<img src={albumcover} class="bg-black/50 max-w-fill" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3">{curator.albumnames[index]}</h3>

					<article>
						<p class="description">{curator.albumartists[index]}</p>
					</article>
				</div>

				
			</div>
		{/each}
		
	</div>

	
	
	
	
{/if}
    <hr class="mt-4">
<div class="text-center text-6xl p-4 mt-6">Other Curators</div>

<div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
	<!-- Detailed -->
	{#each data.curators as curator}
		<div class="col-span-1 card card-hover overflow-hidden max-w-xs">
			<header class="flex justify-around">
				<a href="/curators/movie/{curator.id}" on:click={() => element.scrollIntoView()}><img src={curator.avatar} class="bg-black/50 max-w-fill" alt="Post" /></a>
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3"><a href="/curators/movie/{curator.id}" class="title">{curator.title}</a></h3>

				<article>
					<p class="description">{curator.overview}</p>
				</article>
			</div>

			
		</div>
	{/each}
</div>
