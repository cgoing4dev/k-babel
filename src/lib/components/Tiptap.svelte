<script lang="ts">
	import StarterKit from '@tiptap/starter-kit';
	import { Editor } from '@tiptap/core';
	import { onMount } from 'svelte';
	import { Button } from 'flowbite-svelte';
	import { Toolbar, ToolbarGroup, ToolbarButton } from 'flowbite-svelte';

	let element: any;
	let editor: any;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: `
            <h2>
              Hi there,
            </h2>
            <p>
              this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
            </p>
          `,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			editorProps: {
				attributes: {
					class:
						'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none p-4 border border-black-500 mt-4'
				}
			}
		});
	});
</script>

{#if editor}
	<div>
		<div>
			<ToolbarButton
				size="xs"
				color="dark"
				outline
				on:click={() => console.log && editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				class={editor.isActive('bold') ? 'is-active' : ''}
			>
				bold
			</ToolbarButton>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				class={editor.isActive('italic') ? 'is-active' : ''}
			>
				italic
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleStrike().run()}
				disabled={!editor.can().chain().focus().toggleStrike().run()}
				class={editor.isActive('strike') ? 'is-active' : ''}
			>
				strike
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleCode().run()}
				disabled={!editor.can().chain().focus().toggleCode().run()}
				class={editor.isActive('code') ? 'is-active' : ''}
			>
				code
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().unsetAllMarks().run()}>clear marks</Button
			>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().clearNodes().run()}>clear nodes</Button
			>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().setParagraph().run()}
				class={editor.isActive('paragraph') ? 'is-active' : ''}
			>
				paragraph
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				class={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
			>
				h1
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				class={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
			>
				h2
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				class={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
			>
				h3
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleBulletList().run()}
				class={editor.isActive('bulletList') ? 'is-active' : ''}
			>
				bullet list
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleOrderedList().run()}
				class={editor.isActive('orderedList') ? 'is-active' : ''}
			>
				ordered list
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleCodeBlock().run()}
				class={editor.isActive('codeBlock') ? 'is-active' : ''}
			>
				code block
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().toggleBlockquote().run()}
				class={editor.isActive('blockquote') ? 'is-active' : ''}
			>
				blockquote
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().setHorizontalRule().run()}
			>
				horizontal rule
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().setHardBreak().run()}>hard break</Button
			>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().undo().run()}
				disabled={!editor.can().chain().focus().undo().run()}
			>
				undo
			</Button>
			<Button
				size="xs"
				color="dark"
				outline
				on:click={() => editor.chain().focus().redo().run()}
				disabled={!editor.can().chain().focus().redo().run()}
			>
				redo
			</Button>
		</div>
	</div>
{/if}

<div bind:this={element} />
