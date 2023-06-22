<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
	import {
		Sidebar,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { page } from '$app/stores';

	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	$: activeUrl = $page.url.pathname;

	export let data;
</script>

<Navbar let:hidden let:toggle class="bg-pink-400">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			K-Babel
		</span>
	</NavBrand>
	<div>
		{#if data?.profile}
			<span>{data.profile.email}</span>
			<Button href="/api/logout" size="md" color="red" pill>Log out</Button>
		{:else}
			<Button href="/login" size="md" color="blue" pill>Log in</Button>
			<Button href="/signup" size="md" color="yellow" pill>Create account</Button>
		{/if}
	</div>
</Navbar>

<slot />
