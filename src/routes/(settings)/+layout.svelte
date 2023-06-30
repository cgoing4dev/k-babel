<script>
	import {
		Card,
		Sidebar,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
</script>

<h1 class="text-3xl">Settings for @username</h1>

<div class="flex">
	<Sidebar class="hidden md:block">
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Profile" href="/settings">
					<svelte:fragment slot="icon">🙂</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Customization" href="/settings/customization">
					<svelte:fragment slot="icon">⚙️</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Notifications" href="/settings/notifications">
					<svelte:fragment slot="icon">📩</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Account" href="/settings/account">
					<svelte:fragment slot="icon">🪪</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Billing" href="/settings/billing">
					<svelte:fragment slot="icon">💳</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Organization" href="/settings/organization">
					<svelte:fragment slot="icon">🏴</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
	<slot />
</div>
