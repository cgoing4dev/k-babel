import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signup: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData()) as {
			name: string;
			email: string;
			password: string;
			passwordConfirm: string;
		};

		try {
			await locals.pb.collection('users').create(data);
			await locals.pb.collection('users').requestVerification(data.email);
		} catch (e) {
			console.log(e);
			return fail(400, { error: 'error occurred' });
		}

		return {
			success: data.email
		};

		// throw redirect(303, '/auth/login');
	}
} satisfies Actions;
