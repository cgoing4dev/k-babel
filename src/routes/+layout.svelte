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
		Input,
		Modal,
		Label,
		Checkbox
	} from 'flowbite-svelte';
	import {
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		DropdownDivider,
		Tooltip
	} from 'flowbite-svelte';

	let loginModal = false;
	let signupModal = true;

	export let data;
	const emailId = data.user?.email.split('@')[0] || '';
</script>

<Modal bind:open={loginModal} size="xs" autoclose={false} outsideclose class="w-full">
	<form method="post" action="/auth?/googleAuth" class="flex flex-col space-y-6">
		<span
			class="font-['Audiowide'] text-center text-3xl font-medium text-purple-500 dark:text-white"
		>
			K-Babel
		</span>
		<span class="text-center text-2xl text-black font-medium">Log in</span>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
				>Lost password?</a
			>
		</div>
		<Button type="submit" class="w-full1">Login to your account</Button>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"
				>Create account</a
			>
		</div>
		<hr />
		<div class="flex justify-center">
			<Button type="submit" outline color="purple" class="rounded-3xl w-1/2">
				<svg
					width="20px"
					height="20px"
					class="mr-2"
					viewBox="-0.5 0 48 48"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="#000000"
					stroke="#000000"
					><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><g id="SVGRepo_iconCarrier">
						<title>Google-color</title> <desc>Created with Sketch.</desc> <defs />
						<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="Color-" transform="translate(-401.000000, -860.000000)">
								<g id="Google" transform="translate(401.000000, 860.000000)">
									<path
										d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
										id="Fill-1"
										fill="#FBBC05"
									/>
									<path
										d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
										id="Fill-2"
										fill="#EB4335"
									/>
									<path
										d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
										id="Fill-3"
										fill="#34A853"
									/>
									<path
										d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
										id="Fill-4"
										fill="#4285F4"
									/>
								</g>
							</g>
						</g>
					</g></svg
				>
				Log in with Google</Button
			>
		</div>
	</form>
</Modal>

<Modal bind:open={signupModal} size="xs" autoclose={false} outsideclose class="w-full">
	<form method="post" action="/auth?/googleAuth" class="flex flex-col space-y-6">
		<span
			class="font-['Audiowide'] text-center text-3xl font-medium text-purple-500 dark:text-white"
		>
			K-Babel
		</span>
		<span class="text-center text-2xl text-black font-medium">Sign up</span>
		<Label class="space-y-2">
			<span>Name</span>
			<Input type="text" name="name" placeholder="Name" required />
		</Label>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="Email" required />
		</Label>
		<Label class="space-y-2">
			<span>Password</span>
			<Input type="password" name="password" placeholder="Password" required />
		</Label>
		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
				>Lost password?</a
			>
		</div>
		<Button type="submit" class="w-full1">Sign up</Button>
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			<a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
		</div>
		<hr />
		<div class="flex justify-center">
			<Button type="submit" outline color="purple" class="rounded-3xl w-1/2">
				<svg
					width="20px"
					height="20px"
					class="mr-2"
					viewBox="-0.5 0 48 48"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					fill="#000000"
					stroke="#000000"
					><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><g id="SVGRepo_iconCarrier">
						<title>Google-color</title> <desc>Created with Sketch.</desc> <defs />
						<g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="Color-" transform="translate(-401.000000, -860.000000)">
								<g id="Google" transform="translate(401.000000, 860.000000)">
									<path
										d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
										id="Fill-1"
										fill="#FBBC05"
									/>
									<path
										d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
										id="Fill-2"
										fill="#EB4335"
									/>
									<path
										d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
										id="Fill-3"
										fill="#34A853"
									/>
									<path
										d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
										id="Fill-4"
										fill="#4285F4"
									/>
								</g>
							</g>
						</g>
					</g></svg
				>
				Sign up with Google</Button
			>
		</div>
	</form>
</Modal>

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
				on:click={() => {
					loginModal = true;
				}}>Log in</Button
			>
			<Button
				size="sm"
				color="purple"
				pill
				on:click={() => {
					signupModal = true;
				}}
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
