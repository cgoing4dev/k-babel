import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ locals, url, cookies }) => {
	console.log('api/oauth2-redirect로 왔니?');

	console.log('url', url);

	const redirectURL = `${url.origin}/api/oauth2-redirect`;
	const expectedState = cookies.get('state');
	const expectedVerifier = cookies.get('verifier');

	const state = await url.searchParams.get('state');
	const code = await url.searchParams.get('code');

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

	try {
		const authData = await locals.pb
			?.collection('users')
			.authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL);

		// const authData = await locals.pb.collection('users').authWithOAuth2({ provider: 'google' });

		console.log('authData 확인', authData);
		// 차근차근 생각해보자
		// 여기서 authData (구글이 가진 data)를 이용해서 나의 users collection에 넣어야 하지 않을까?

		// 여기서 이미 Log in과 Sign up의 분기를 해야함.
		// 이미 가입을 했으면 pb.collection('users')에 업데이트를 할 필요가 없음.

		// update를 이용해서 업데이트해보자
		// example update data

		console.log(locals.pb.authStore.isValid);
		console.log(locals.pb.authStore.token);
		// console.log(locals.pb.authStore.model.id);

		// DB에 없던 계정이면 (isNew가 true면) DB에 구글의 사용자 정보를 업데이트
		// DB에 있는 계정이면 업데이트 과정은 패스
		if (authData.meta.isNew) {
			const data = {
				// username: 'test_username2',
				name: authData.meta.name,
				family_name: authData.meta.rawUser.family_name,
				given_name: authData.meta.rawUser.given_name,
				locale: authData.meta.rawUser.locale,
				avatarUrl: authData.meta.avatarUrl
			};

			const record = await locals.pb.collection('users').update(authData.record.id, data);
			// console.log('record 확인', record);
		}
	} catch (err) {
		console.log('Error Sigining Up with OAuth2', err);
	}

	throw redirect(303, '/');
}) satisfies RequestHandler;
