<script lang="ts">
	import '../app.postcss';

	import PageTransition from './transition.svelte';
	import { AppShell, AppBar} from '@skeletonlabs/skeleton';
	export let data;
</script>


<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead"></svelte:fragment>
			<div class="flex items-center text-center"><p class="mx-2"><a href="/">HOME</a></p><p class="mx-4"><a href="/curators">CURATORS</a></p><p class="mx-2 text-center"><a href="/salove">SA LOVE</a></p></div>
			<svelte:fragment slot="trail"></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	
	<!-- Router Slot -->
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"></svelte:fragment>
	<!-- (footer) -->
</AppShell>
