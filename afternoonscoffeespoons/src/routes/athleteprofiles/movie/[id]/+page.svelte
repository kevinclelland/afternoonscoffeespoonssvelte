<script lang="ts">
	import { page } from '$app/stores';

	$: curator = data.curators.find((curator) => curator.id === $page.params.id);


	export let data;

</script>



{#if curator}
	<article>
		
				<img class="max-w-sm" src={curator.avatar} alt={curator.title}/>
		

		<div class="details">
			<h1 class="h1">
				{curator.title}
			</h1>
			<p class="overview">{curator.overview}</p>
			<img src="/{curator.initials}/a1.jpg" alt="">
			<img src="/{curator.initials}/a2.jpg" alt="">
		</div>
	</article>

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

	
{/if}
    


