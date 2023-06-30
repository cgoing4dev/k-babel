<script>
	import '../app.postcss';

	import {
		Navbar,
		NavBrand,
		Button,
	} from 'flowbite-svelte';
	import {
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownDivider,
	} from 'flowbite-svelte';

	export let data;
	const emailId = data.user?.email.split('@')[0] || '';
</script>

<Navbar let:hidden let:toggle class="border-b-2 border-indigo-500">
	<NavBrand href="/">
		<img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Logo" />
		<img src="/images/K-babel_text.png" class="mr-3 h-6 sm:h-9" alt="Logo" />
		<!-- <span
			class="font-['Audiowide'] self-center whitespace-nowrap text-3xl font-semibold dark:text-white"
		>
			K-Babel
		</span> -->
	</NavBrand>
	<div>
		{#if data.user}
			<div class="flex space-x-4 items-center">
				<Button href="/new" outline pill color="purple">
					<span class="mr-2">✏️</span>
					Create Post</Button
				>
				<Avatar id="user-drop" src={data.user.avatarUrl} class="cursor-pointer" />
			</div>
		{:else}
			<Button
				size="sm"
				color="light"
				pill
				href="/auth/login">Log in</Button
			>
			<Button
				size="sm"
				color="purple"
				pill
				href="/auth/signup"
				class="hover:bg-white hover:text-purple-500 hover:ring-2 hover:ring-purple-500"
				>Sign Up</Button
			>
		{/if}
	</div>
</Navbar>

<!-- 아바타 클릭 시, Dropdown -->
<Dropdown triggeredBy="#user-drop">
	<DropdownItem href={`/${emailId}`}>
		<span class="block text-sm"> {data.user.name} </span>
		<span class="block truncate text-sm font-medium"> {'@' + emailId} </span>
	</DropdownItem>
	<DropdownDivider />
	<DropdownItem href="/dashboard">Dashboard</DropdownItem>
	<DropdownItem href="/settings">Settings</DropdownItem>
	<DropdownItem href="/readinglist">Reading list</DropdownItem>
	<DropdownDivider />
	<DropdownItem href="/api/logout">Log out</DropdownItem>
</Dropdown>

<slot />
