import { NgModule } from '@angular/core';

import { TextOverFlowPipe } from './cut-text-overflow.pipe';
import { NgxTranslatePipe } from './translate.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { PluralPipe } from './plural.pipe';
import { RoundPipe } from './round.pipe';
import { TimingPipe } from './timing.pipe';
import { CalcDaysBetweenPipe } from './calc-days-between.pipe';
import { JsonParserPipe } from './json-parser.pipe';
import { RemoveUnderscorePipe } from './remove-underscore.pipe';
import { ArabicNumberPipePipe } from './arabic-number-pipe.pipe';

const pipes = [
    TextOverFlowPipe,
    NgxTranslatePipe,
    CapitalizePipe,
    PluralPipe,
    NumberWithCommasPipe,
    RoundPipe,
    TimingPipe,
    CalcDaysBetweenPipe,
    JsonParserPipe,
    RemoveUnderscorePipe
]

@NgModule({
    declarations: [ ...pipes, ArabicNumberPipePipe ],
    imports: [],
    exports: [ ...pipes ],
    providers: [],
})
export class NgxPipesModule { }
