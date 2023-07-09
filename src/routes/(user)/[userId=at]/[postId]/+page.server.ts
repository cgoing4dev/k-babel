import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Post } from '$lib/myType';

export const load = (async ({ locals, params }) => {
	const getPost = async (postId: string) => {
		try {
			const post = serializeNonPOJOs(await locals.pb.collection('post').getOne(postId));

			return post as Post;
		} catch (err) {
			console.log('Error: ', err);
			throw error(400, 'error occured');
		}
	};

	return {
		post: getPost(params.postId)
	};
}) satisfies PageServerLoad;
