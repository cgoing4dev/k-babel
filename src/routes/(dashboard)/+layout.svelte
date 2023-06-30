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

<h1 class="text-3xl">Dashboard</h1>
<div class="flex">
	<Card>임시카드</Card>
	<Card>임시카드</Card>
	<Card>임시카드</Card>
</div>

<div class="flex">
	<Sidebar class="hidden md:block">
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Post" href="/dashboard">
					<svelte:fragment slot="icon">✍️</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Followers" href="/dashboard/followers">
					<svelte:fragment slot="icon">👈</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Following tags" href="/dashboard/following_tags">
					<svelte:fragment slot="icon">🔖</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Following users" href="/dashboard/following_users">
					<svelte:fragment slot="icon">👉</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Following organizations" href="/dashboard/following_organizations">
					<svelte:fragment slot="icon">🏴</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Analytics" href="/dashboard/analytics">
					<svelte:fragment slot="icon">📈</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
	<slot />
</div>
