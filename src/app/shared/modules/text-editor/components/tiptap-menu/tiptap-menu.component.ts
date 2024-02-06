import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-tiptap-menu',
  templateUrl: './tiptap-menu.component.html',
  styleUrls: ['./tiptap-menu.component.scss']
})
export class TiptapMenuComponent implements OnInit {
  @Input('editor') editor: any;

  colorInput: string;
  constructor() { }

  ngOnInit(): void { }

  addImage() {
    const url = window.prompt('URL')

    if (url) {
      this.editor.chain().focus().setImage({ src: url }).run()
    }
  }
}
