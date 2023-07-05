<script>
	import {
		Alert,
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

	export let data;
</script>

<div>
	<div class="flex justify-end my-2 mx-2">
		<Alert border color="yellow" class="w-50">Settings for @{data.user.name}</Alert>
	</div>

	<div class="flex">
		<Sidebar class="hidden md:block w-52">
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
</div>
