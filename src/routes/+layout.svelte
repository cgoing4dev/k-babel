<script>
	import '../app.postcss';

	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		GradientButton,
		Input
	} from 'flowbite-svelte';
	import {
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		DropdownDivider,
		Tooltip
	} from 'flowbite-svelte';

	export let data;
</script>

<Navbar let:hidden let:toggle class="border-b-2 border-indigo-500">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			K-Babel
		</span>
	</NavBrand>
	<div>
		{#if data?.profile}
			<div class="flex space-x-4 items-center">
				<GradientButton outline pill color="greenToBlue">Create Post</GradientButton>
				<Avatar id="user-drop" src={data.profile.avatarUrl} class="cursor-pointer" />
			</div>
		{:else}
			<Button href="/login" size="md" color="blue" pill>Log in</Button>
			<Button href="/signup" size="md" color="yellow" pill>Create account</Button>
		{/if}
	</div>
</Navbar>

<!-- 아바타 클릭 시, Dropdown -->
<Dropdown triggeredBy="#user-drop">
	<DropdownHeader>
		<span class="block text-sm"> {data.profile.name} </span>
		<span class="block truncate text-sm font-medium"> @{data.profile.email.split('@')[0]} </span>
	</DropdownHeader>
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownItem>Reading list</DropdownItem>
	<DropdownDivider />
	<DropdownItem>Log out</DropdownItem>
</Dropdown>

<slot />
