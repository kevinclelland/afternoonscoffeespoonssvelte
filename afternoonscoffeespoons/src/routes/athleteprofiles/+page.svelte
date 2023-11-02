<script lang="ts">

    import { Avatar, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';    
	

    
       
   
    
        export let data;
    </script>
    
    
    <div class="text-center text-6xl p-4">Curators</div>
    
    
    <div class="mx-auto text-token grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
		<!-- Detailed -->
		{#each data.curators as curator}
			<div class="col-span-1 card card-hover overflow-hidden">
				<header class="flex justify-around">
					<img src={curator.avatar} class="bg-black/50 max-w-fill" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3"><a href="/athleteprofiles/movie/{curator.id}" class="title">{curator.title}</a></h3>

					<article>
						<p class="description">{curator.overview}</p>
					</article>
				</div>

				
			</div>
		{/each}
	</div>
    