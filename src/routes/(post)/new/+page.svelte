<script lang="ts">
	import {
		Button,
		ButtonGroup,
		Label,
		Input,
		Textarea,
		Badge,
		Heading,
		CloseButton,
		Fileupload
	} from 'flowbite-svelte';

	import Editor from '@tinymce/tinymce-svelte';
	import { enhance } from '$app/forms';

	// 커버 이미지
	let coverImage: any;

	// 태그 리스트 (DB 데이터)
	export let data;
	let tags = data.records;

	let tagSelectInput = '';

	// 태그 선택
	let selectedTags: string[] = [];

	// filteredTags는 tag id 를 가지고 있는 원래 object 형태의 태그들
	let filteredTags: any[] = [];
	function selectTag(e: any) {
		if (selectedTags.length >= 3) {
			alert('maximum tags number : 3');
			tagSelectInput = '';
			return;
		}
		selectedTags.push(e.target.value);
		selectedTags = selectedTags;

		let idx = 0;
		// filterTags
		switch (selectedTags.length) {
			case 1:
				idx = tags.findIndex((tag) => tag.name === selectedTags[0]);
				filteredTags.push(tags[idx]);
				filteredTags = filteredTags;
				// 선택한 tag를 tags에서 없애기
				tags = tags.filter((tag) => tag.name !== selectedTags[0]);
				break;
			case 2:
				idx = tags.findIndex((tag) => tag.name === selectedTags[1]);
				filteredTags.push(tags[idx]);
				filteredTags = filteredTags;
				// 선택한 tag를 tags에서 없애기
				tags = tags.filter((tag) => tag.name !== selectedTags[1]);
				break;
			case 3:
				idx = tags.findIndex((tag) => tag.name === selectedTags[2]);
				filteredTags.push(tags[idx]);
				filteredTags = filteredTags;
				// 선택한 tag를 tags에서 없애기
				tags = tags.filter((tag) => tag.name !== selectedTags[2]);
				break;
			default:
				break;
		}

		tagSelectInput = '';
	}

	// $: console.log('filteredTags :', filteredTags);

	function handleBadgeClose() {
		selectedTags = [];
	}

	// tinymce setting
	let conf = {
		plugins:
			'preview searchreplace autolink autosave directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking insertdatetime advlist lists wordcount help charmap quickbars emoticons',
		toolbar:
			'restoredraft undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview print | image media link codesample',
		toolbar_sticky: true,
		image_caption: true,
		autosave_ask_before_unload: true,
		autosave_interval: '30s',
		autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-',
		autosave_restore_when_empty: false,
		autosave_retention: '2m',
		quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
		placeholder: 'post content here...'
	};

	let tinyValue = '';
</script>

<div class="mx-auto max-w-2xl">
	<!-- <div class="flex justify-end mt-10">
		<ButtonGroup class="">
			<Button>Edit</Button>
			<Button>Preview</Button>
		</ButtonGroup>
	</div> -->
	<div class="mt-10">
		<form action="?/upload" method="post" enctype="multipart/form-data">
			<Label class="text-lg">Cover image</Label>
			<!-- <Fileupload accept="image/jpeg, image/png, image/gif, image/webp" /> -->
			<!-- <Fileupload name="cover_image" accept=".jpg, .png, .gif, .webp" /> -->
			<input type="file" name="cover_image" id="" />
			<Button type="submit">이미지 제출</Button>
		</form>
		<form action="?/createPost" method="post" class="space-y-4" use:enhance>
			<div>
				<Label class="text-lg">Your title</Label>
				<Input type="text" name="title" placeholder="post title here..." required />
			</div>

			<div>
				<Label class="text-lg">Your tags</Label>
				<Input
					list="tags"
					placeholder="choose tags upto 3"
					on:change={selectTag}
					bind:value={tagSelectInput}
				/>
				<datalist id="tags">
					{#each tags as tag}
						<option value={tag.name}>{tag.name}</option>
					{/each}
				</datalist>
				{#if selectedTags.length > 0}
					<div class="flex items-center">
						{#each selectedTags as tag}
							<Badge large class="mr-2" color="blue">{tag}</Badge>
						{/each}
						<CloseButton on:click={handleBadgeClose} />
					</div>
				{/if}
			</div>

			<div>
				<Label class="text-lg">Your content</Label>
				<Editor
					apiKey="385ag9xxprg33b9x2lythtexkc7dkwjt8sbv9vsrj2ybktrl"
					bind:value={tinyValue}
					{conf}
				/>
			</div>

			<!-- 선택한 tag list 서버에 전달 -->
			<input type="hidden" name="content" value={tinyValue} />
			<input type="hidden" name="tags" value={JSON.stringify(filteredTags)} />
			<Button type="submit" color="blue">Publish</Button>
		</form>
	</div>
</div>
