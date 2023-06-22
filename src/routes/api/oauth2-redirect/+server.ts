import { currentUser } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ locals, url, cookies }) => {
	console.log('api/oauth2-redirect로 왔니?');
	console.log(url.searchParams);

	const redirectURL = `${url.origin}/api/oauth2-redirect`;
	const expectedState = cookies.get('state');
	const expectedVerifier = cookies.get('verifier');

	//console.log('exprected state', expectedState);

	const state = await url.searchParams.get('state');
	const code = await url.searchParams.get('code');

	//console.log('returned state', state);
	// console.log('returned code', code);

	// as a side effect, this will generate a new code verifier, hence why we need to pass the verifier back in through a cookie

	const authMethods = await locals.pb?.collection('users').listAuthMethods();

	if (!authMethods?.authProviders) {
		console.log('No Auth Providers');
		throw redirect(303, '/');
	}

	const provider = authMethods.authProviders[0];

	if (!provider) {
		console.log('Provider Not Found');
		throw redirect(303, '/');
	}

	// cookie에 저장된 state이 구글이 보낸 state와 같지 않다면
	if (expectedState !== state) {
		console.log('Returned state does not match expected : ', expectedState, state);
		throw redirect(303, '/');
	}
	// 같다면
	console.log('expected = Returned state', expectedState, state);

	try {
		const authData = await locals.pb
			?.collection('users')
			.authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {
				name: 'My Awesome user'
			});
		console.log('authWithOAuth2Code 함수 실행 후', authData);
		// 여기서 스토어에 저장해보자
		currentUser.set(locals.user);
	} catch (err) {
		console.log('Error Sigining Up with OAuth2', err);
	}

	throw redirect(303, '/');
}) satisfies RequestHandler;
