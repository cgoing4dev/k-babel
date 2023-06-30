import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = null;

	console.log('authStore.clear 수행');

	throw redirect(303, '/');
}) satisfies RequestHandler;
