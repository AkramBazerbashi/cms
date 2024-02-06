import { NgModule } from '@angular/core';
import { NgxTiptapModule } from 'ngx-tiptap';

import { TiptapMenuComponent } from './components/tiptap-menu/tiptap-menu.component';
import { TiptapEditorComponent } from './components/tiptap-editor/tiptap-editor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbIconModule } from '@nebular/theme';

@NgModule({
    declarations: [
        TiptapMenuComponent,
        TiptapEditorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxTiptapModule,
        NbIconModule,
    ],
    exports: [
        TiptapEditorComponent,
        TiptapMenuComponent
    ],
    providers: [],
})
export class NgxTextEditorModule { }