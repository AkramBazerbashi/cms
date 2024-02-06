import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'jsonParser'
})

export class JsonParserPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return JSON.parse(value);
    }
}