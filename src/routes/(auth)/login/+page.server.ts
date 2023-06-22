import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, url, locals }) => {
		// signup과 똑같다. All-in-one
		// 이 함수가 하는 일은 authProviderRedirect 주소를 만들어서 구글로 요청을 보냄.
		// 구글은 redirectURL로 다시 redirect 시킴
		// redirectURL은 우리의 api 서버인 +server.ts로 가서 여기서 authWithOAuthCode 함수로 토큰을 받는다.
		// console.log('여기는 login actions 함수야!!');

		//
		const authMethods = await locals.pb?.collection('users').listAuthMethods();
		if (!authMethods) {
			return {
				authProviders: ''
			};
		}

		const redirectURL = `${url.origin}/api/oauth2-redirect`;
		const googleAuthProvider = authMethods.authProviders[0];
		const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;

		const state = googleAuthProvider.state;
		const verifier = googleAuthProvider.codeVerifier;

		// console.log('cookies set 전 확인 : ', cookies.getAll());

		cookies.set('state', state);
		cookies.set('verifier', verifier);

		// console.log('cookies set 후 확인 : ', cookies.getAll());

		throw redirect(302, authProviderRedirect);
	}
} satisfies Actions;
