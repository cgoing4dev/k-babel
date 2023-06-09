import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/auth/login');
	}
}) satisfies PageServerLoad;

export const actions = {
	createPost: async ({ request, locals }) => {
		const formData = await request.formData();

		// 커버 이미지
		const coverImage = formData.get('cover_image') as File;

		if (coverImage.size === 0) {
			formData.delete('cover_image');
		}

		// formData에 user 정보 추가
		if (locals.user !== null) {
			formData.append('user', locals.user.id);
		}

		// formData 저장
		try {
			await locals.pb.collection('post').create(formData);
		} catch (err) {
			console.log('Error: ', err);
			return fail(400, { err: '에러 발생' });
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
