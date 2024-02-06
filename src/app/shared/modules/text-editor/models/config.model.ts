import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import OrderedList from '@tiptap/extension-ordered-list';

export const editorConfig = new Editor({
    extensions: [
        StarterKit,
        Placeholder,
        BubbleMenu,
        OrderedList,
        Link.configure({
            validate: href => /^https?:\/\//.test(href),
        })
    ],
    editorProps: {
        attributes: {
            class: 'pt-4 pl-4 pr-4 pb-3 border-none outline-none',
            spellcheck: 'true',
        },
    },
});