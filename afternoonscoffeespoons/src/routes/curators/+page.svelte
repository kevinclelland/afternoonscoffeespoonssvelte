<script lang="ts">

    import { Avatar, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';    
	   
       let element: HTMLElement;
        export let data;
    </script>

<h1 class="text-center text-4xl sm:text-6xl p-4">Afternoons Coffeespoons</h1>
    
    
    <div class="text-center text-6xl p-4" bind:this={element}>Curators</div>
    
    
    <div class="mx-auto text-token justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
		<!-- Detailed -->
		{#each data.curators as curator}
			<div class="col-span-1 card card-hover overflow-hidden max-w-xs">
				<header class="flex justify-around">
					<a href="/curators/movie/{curator.id}" class="title" on:click={() => element.scrollIntoView()}><img src={curator.avatar} class="bg-black/50 max-w-fill" alt="Post" /></a>
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
    