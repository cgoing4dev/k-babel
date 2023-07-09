import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	login: async ({ locals, request }) => {
		const data = await request.formData();

		try {
			const user = await locals.pb
				.collection('users')
				.authWithPassword(data.get('email') as string, data.get('password') as string);
			// authWithPassword 함수는 authStore를 업데이트함.
			// 로그인한 user model로

			if (!user.record.verified) {
				locals.pb.authStore.clear();
				return fail(400, { error: 'Please verify your email before login' });
			}
		} catch (e) {
			console.log(e);
			return fail(400, { error: "Password doesn't match" });
		}

		throw redirect(303, '/');
	},
	resetPassword: async ({ locals, request }) => {
		const data = await request.formData();
		console.log('들어왔니');

		try {
			await locals.pb.collection('users').requestPasswordReset(data.get('email') as string);
		} catch (e) {
			console.log(e);
			return fail(400, { error: 'error occured' });
		}

		return {
			success: 'Password reset link sent!'
		};
	}
} satisfies Actions;
