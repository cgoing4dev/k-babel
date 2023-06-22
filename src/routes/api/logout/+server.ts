import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ locals }) => {
	locals.pb.authStore.clear();

	console.log('authStore 클리어 했다!');

	throw redirect(303, '/');
}) satisfies RequestHandler;
