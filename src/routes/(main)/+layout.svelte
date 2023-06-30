<script>
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

	// Sidebar에서 쓰이고 있음
	import { page } from '$app/stores';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	$: activeUrl = $page.url.pathname;
</script>

<div class="flex">
	<Sidebar class="hidden md:block">
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Home" href="/">
					<svelte:fragment slot="icon">🏠</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Reading List" href="/readinglist">
					<svelte:fragment slot="icon">📜</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Video" href="/video">
					<svelte:fragment slot="icon">📺</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Tags" href="/tags">
					<svelte:fragment slot="icon">🏷️</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="FAQ" href="/faq">
					<svelte:fragment slot="icon">💡</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Shop" href="/shop">
					<svelte:fragment slot="icon">🎁</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="About" href="/about">
					<svelte:fragment slot="icon"
						><img src="/images/logo.svg" class="w-6" alt="Logo" /></svelte:fragment
					>
				</SidebarItem>
				<SidebarItem label="Contact" href="/contact">
					<svelte:fragment slot="icon">📧</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
	<slot />
</div>
