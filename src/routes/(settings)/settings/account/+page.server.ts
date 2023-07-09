import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	updatePassword: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').update(locals.user.id, data);
			locals.pb.authStore.clear();
		} catch (err) {
			console.log('Error: ', err);
			return fail(400, { error: 'error occured' });
		}

		throw redirect(303, '/auth/login');
	},
	resetPassword: async ({ locals, request }) => {
		const data = await request.formData();

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
