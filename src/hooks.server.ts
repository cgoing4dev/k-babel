import { pb } from '$lib/pocketbase';

import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	//
	console.log('hooks.server.ts 진입 체크');
	console.log('pb.authStore.isValid', pb.authStore.isValid);
	console.log('pb.authStore.token', pb.authStore.token);
	//

	// before
	// pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	// console.log('before cookie 확인', event.request.headers.get('cookie'));

	// next we need to check if the token is still valid
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
	// response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));
	// console.log('after cookie 확인', response.headers.get('cookie'));

	return response;
}) satisfies Handle;
