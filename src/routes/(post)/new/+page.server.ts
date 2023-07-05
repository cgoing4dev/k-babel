import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const records = await locals.pb.collection('tag').getFullList({
		sort: 'name'
	});

	const results = records.map((record) => {
		return {
			id: record.id as string,
			name: record.name as string,
			description: record.description as string
		};
	});

	return {
		records: results
	};
}) satisfies PageServerLoad;

export const actions = {
	createPost: async ({ request, locals }) => {
		console.log('actions 들어왔니?');

		const raw = await request.formData();
		const data = Object.fromEntries(raw);

		// 커버 이미지
		const file = raw.get('cover_image');
		console.log(file);

		// 태그 리스트
		const tags = JSON.parse(data.tags as string);

		const postData = {
			user_id: [locals.user.id],
			title: data.title,
			content: data.content,
			hits: 0
		};

		// post collection에 저장
		const record = await locals.pb.collection('post').create(postData);
		console.log('post create : ', record);

		// post_tag collection에 저장
		const tagData = {
			post_id: [record.id],
			tag_id: [tags[0]?.id, tags[1]?.id, tags[2]?.id]
		};

		const record2 = await locals.pb.collection('post_tag').create(tagData);
		console.log('post_tag create : ', record2);

		throw redirect(303, '/');
	},
	upload: async ({ request, locals }) => {
		const data = await request.formData();
		const file = data.get('cover_image');
		console.log(file);
	}
} satisfies Actions;
