import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signup: async ({ locals, request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;

		const usernameByEmail = email.split('@')[0];
		data.append('username', usernameByEmail);

		try {
			await locals.pb.collection('users').create(data);
			await locals.pb.collection('users').requestVerification(email);
		} catch (err) {
			console.log('Error: ', err);
			return fail(400, { error: 'error occurred' });
		}

		return {
			success: email
		};

		// throw redirect(303, '/auth/login');
	}
} satisfies Actions;
