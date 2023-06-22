import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions = {
	OAuth2: async ({ cookies, url, locals }) => {
		// 이 함수가 하는 일은 authProviderRedirect 주소를 만들어서 구글로 요청을 보냄.
		// 구글은 redirectURL로 다시 redirect 시킴
		// redirectURL은 우리의 api 서버인 +server.ts로 가서 여기서 authWithOAuthCode 함수로 토큰을 받는다.

		const authMethods = await locals.pb?.collection('users').listAuthMethods();
		// console.log(authMethods);
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
		cookies.set('state', state);
		cookies.set('verifier', verifier);

		// console.log(url);
		// console.log(url.origin);

		/* authUrl: https://accounts.google.com/o/oauth2/auth?
		
		client_id =    // 이 클라이언트 id가 웹애플리케이션의 id
		949630002941-678jqj0rrp1q3edk9hbm0md3dsrvi3vf.apps.googleusercontent.com
		&
		code_challenge =
		5j3yhOWu1DbTQhMJmYW4o-iRqb-MQ1NP18jpPDngNrU
		&
		code_challenge_method =
		S256
		&
		response_type =     // code Grant 방식의 OAuth 2.0
		code
		&
		scope =             // userinfo.profile과 userinfo.email 까지 scope으로 요청
		https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email
		&
		state =
		b0oiVUHG2wvo692v0BzJ8ZLuxjgaS0
		&
		redirect_uri =
		*/

		// redirectURL: ${url.origin}/api/oauth2-redirect;

		/*
		위에 2개를 합치면 authProviderRedirect
		여기서 구글의 승인을 받으면 redirectURL로 이동 (accessToken을 주나?)
		*/

		throw redirect(302, authProviderRedirect);
	}
} satisfies Actions;
