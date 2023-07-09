<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { getImageURL } from '$lib/utils.js';
	import type { ActionResult } from '@sveltejs/kit';
	import { A, Alert, Avatar, Card, Heading, Span } from 'flowbite-svelte';
	import { Button, Label, Input, Checkbox, Fileupload } from 'flowbite-svelte';

	export let data;
	let loading = false;

	import { FloatingLabelInput } from 'flowbite-svelte';

	import { Modal } from 'flowbite-svelte';

	export let form;
	let formModal = false;
</script>

<Modal bind:open={formModal} size="xs" class="w-full" outsideclose>
	<form class="flex flex-col space-y-6" action="?/resetPassword" method="post">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Request Password Reset</h3>
		<FloatingLabelInput
			style="outlined"
			id="floating_outlined"
			name="email"
			type="email"
			label="Email"
		/>
		<Button type="submit">Send Reset Email</Button>
	</form>
</Modal>

<div class="space-y-6">
	<div class="flex flex-col bg-white rounded-2xl p-6 space-y-6">
		<Label class="space-y-2" for="name">
			<span>Signup method of your account</span>
			{#if data.user?.avatarUrl === ''}
				<Alert color="green" class="text-xl">Email📧 Signup</Alert>
			{:else}
				<Alert color="green" class="text-xl">Signup with Google</Alert>
			{/if}
		</Label>
	</div>

	{#if data.user?.avatarUrl === ''}
		<form
			action="?/updatePassword"
			method="post"
			class="flex flex-col bg-white rounded-2xl p-6 space-y-6"
			enctype="multipart/form-data"
		>
			<Heading tag="h4">Change Password</Heading>
			<FloatingLabelInput
				style="outlined"
				id="floating_outlined"
				name="oldPassword"
				type="password"
				label="Old Password"
			/>
			<FloatingLabelInput
				style="outlined"
				id="floating_outlined"
				name="password"
				type="password"
				label="New Password"
			/>
			<FloatingLabelInput
				style="outlined"
				id="floating_outlined"
				name="passwordConfirm"
				type="password"
				label="Confirm New Password"
			/>

			<A on:click={() => (formModal = true)} class="ml-auto text-sm hover:underline"
				>Forgot password?</A
			>

			<Button type="submit" disabled={loading}>Update Password</Button>
		</form>
	{/if}
</div>
