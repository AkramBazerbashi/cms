import { Pipe, PipeTransform } from '@angular/core';
import { LanguageTranslateService } from '../../services/language/language-translate.service';

@Pipe({
  name: 'ngxTranslate'
})
export class NgxTranslatePipe implements PipeTransform {

  constructor(
    private readonly languageTranslateService: LanguageTranslateService
  ) {}

  transform(value: string, ...args: unknown[]): any {
    return this.languageTranslateService.translate(value);
  }
}
