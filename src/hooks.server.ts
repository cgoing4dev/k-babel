import { pb } from '$lib/pocketbase';

import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	// before
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	// console.log('before cookie 확인', event.request.headers.get('cookie'));
	// console.log(event.cookies.getAll());

	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
			console.log('authStore.isValid해서 authRefresh 했나?');
		} catch (_) {
			pb.authStore.clear();
		}
	}

	event.locals.pb = pb;
	event.locals.user = structuredClone(pb.authStore.model);

	// console.log('pb 확인 : ', pb);
	// console.log('event.locals.user 확인 : ', event.locals.user);

	const response = await resolve(event);

	// after

	response.headers.append('set-cookie', pb.authStore.exportToCookie());

	// console.log(response.headers);
	// console.log('여기 봐봐 : ', response.headers.get('set-cookie'));

	return response;
}) satisfies Handle;
