<script>
	import { Alert, GradientButton, Heading } from 'flowbite-svelte';
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
</script>

<div class="flex justify-center py-10 bg-pink-50">
	<Card class="space-y-6" size="md">
		<h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">🙌 로그인 폼</h3>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">로그인 하세요~</p>
		<Alert>
			<svg
				slot="icon"
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
					clip-rule="evenodd"
				/></svg
			>
			<span class="font-medium">Default alert!</span> Change a few things up and try submitting again.
		</Alert>
		<form method="post">
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
					LOG IN with Google</Button
				>
			</div>
		</form>
	</Card>
</div>
