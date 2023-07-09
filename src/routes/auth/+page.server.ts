import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	googleAuth: async ({ cookies, url, locals }) => {
		// 이 함수가 하는 일은 authProviderURL 주소를 만들어서 구글로 요청을 보냄.
		// 구글은 redirectURL (api/oauth2-redirect)로 다시 redirect 시킴
		// api/oauth2-redirect에서 authWithOAuthCode 함수로 토큰을 받는다.
		//
		const authMethods = await locals.pb?.collection('users').listAuthMethods();
		if (!authMethods) {
			return {
				authProviders: ''
			};
		}

		console.log(authMethods);

		const redirectURL = `${url.origin}/api/oauth2-redirect`;

		const googleAuthProvider = authMethods.authProviders[0];
		const authProviderURL = `${googleAuthProvider.authUrl}${redirectURL}`;

		const state = googleAuthProvider.state;
		const verifier = googleAuthProvider.codeVerifier;

		cookies.set('state', state);
		cookies.set('verifier', verifier);

		console.log(authProviderURL);

		throw redirect(302, authProviderURL);
	}
} satisfies Actions;
