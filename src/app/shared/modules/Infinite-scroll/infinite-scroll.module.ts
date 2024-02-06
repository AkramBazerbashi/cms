import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

const sharedComponents = [
    InfiniteScrollComponent
]

@NgModule({
    declarations: [
        ...sharedComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...sharedComponents
    ],
    providers: [],
})
export class NgxInfiniteScrollModule { }
