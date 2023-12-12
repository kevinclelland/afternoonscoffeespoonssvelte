<script lang="ts">
	import '../app.postcss';

	
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>


<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">Afternoons Coffeespoons</svelte:fragment>
			<div class="flex items-center"><p class="mx-2"><a href="/">HOME</a></p><p class="mx-2 text-center"><a href="/salove">SA LOVE</a></p><p class="mx-2"><a href="/about">ABOUT</a></p></div>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"></svelte:fragment>
	<!-- (footer) -->
</AppShell>
