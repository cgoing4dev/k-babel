<script lang="ts">
	import '../app.postcss';
	import { getImageURL } from '$lib/utils.js';

	import { Navbar, NavBrand, Button } from 'flowbite-svelte';
	import { Avatar, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
	import { avatarSrcStore } from '$lib/store';

	export let data;

	$: $avatarSrcStore = data.user?.avatar
		? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
		: data.user?.avatarUrl;
</script>

<Navbar let:hidden let:toggle class="sticky top-0 z-30 py-1">
	<NavBrand href="/">
		<!-- <img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Logo" />
				<img src="/images/K-babel_text.png" class="mr-3 h-6 sm:h-9" alt="Logo" /> -->
		<span
			class="font-['Audiowide'] self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
		>
			K-Babel
		</span>
	</NavBrand>
	<div class="">
		{#if data.user}
			<div class="flex space-x-4 items-center">
				<Button href="/new" outline pill size="sm">Create Post</Button>
				<Avatar
					id="user-drop"
					src={$avatarSrcStore}
					class="cursor-pointer object-contain"
					size="md"
				/>
				<!-- 아바타 클릭 시, Dropdown -->
				<Dropdown triggeredBy="#user-drop">
					<DropdownItem href={`/@${data.user.username}`}>
						<span class="block text-sm"> {data.user.name} </span>
						<span class="block truncate text-sm font-medium">
							{'@' + data.user.username}
						</span>
					</DropdownItem>
					<DropdownDivider />
					<DropdownItem href="/dashboard">Dashboard</DropdownItem>
					<DropdownItem href="/settings">Settings</DropdownItem>
					<DropdownItem href="/readinglist">Reading list</DropdownItem>
					<DropdownDivider />
					<DropdownItem href="/api/logout">Log out</DropdownItem>
				</Dropdown>
			</div>
		{:else}
			<Button size="sm" color="light" pill href="/auth/login">Log in</Button>
			<Button
				size="sm"
				color="purple"
				pill
				href="/auth/signup"
				class="hover:bg-white hover:text-indigo-500 hover:ring-2 hover:ring-indigo-500"
				>Sign Up</Button
			>
		{/if}
	</div>
</Navbar>

<div class="xl:container xl:mx-auto">
	<slot />
</div>
