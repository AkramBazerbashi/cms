import { 
  Component, 
  OnDestroy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import OrderedList from '@tiptap/extension-ordered-list';
import TextAlign from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Image from '@tiptap/extension-image';

@Component({
  selector: 'ngx-text-editor',
  templateUrl: './tiptap-editor.component.html',
  styleUrls: ['./tiptap-editor.component.scss']
})

export class TiptapEditorComponent implements OnDestroy {  
  @Input('textEditor') model: string;
  @Output('textEditorChange') update: EventEmitter<string> = new EventEmitter()

  public editor = new Editor({
    extensions: [
      StarterKit, 
      Placeholder, 
      BubbleMenu,
      OrderedList,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle,
      Link.configure({
        validate: href => /^https?:\/\//.test(href),
      }),
      Image
    ],
    editorProps: {
      attributes: {
        class: 'pt-4 pl-4 pr-4 pb-3 border-none outline-none',
        spellcheck: 'true',
      },
    },
  });

  constructor() {}

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public onModelChange(value: string): void {
    this.model = value;
    this.update.emit(value)
  }
}
