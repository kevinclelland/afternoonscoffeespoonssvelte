<script lang="ts">
	import '../app.postcss';

	import PageTransition from './transition.svelte';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	export let data;
</script>


<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead"><div class="hidden text-2xl md:block"><a href="/">Afternoons Coffeespoons</a></div><div class="md:hidden text-3xl font-bold"><a href="/">AC</a></div></svelte:fragment>
			<div class="flex items-center"><p class="mx-1"><a href="/">HOME</a></p><p class="mx-1"><a href="/curators">CURATORS</a></p><p class="mx-1 text-center"><a href="/salove">SA LOVE</a></p><p class="mx-1"><a href="/about">ABOUT</a></p></div>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
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
