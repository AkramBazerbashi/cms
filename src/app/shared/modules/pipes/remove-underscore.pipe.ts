import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ngxRemoveUnderscore'
})
export class RemoveUnderscorePipe implements PipeTransform {
    transform(value: string, ...args: any[]): any {
        return value.replace(/_/g, ' ').replace(/-/g, ' ');
    }
}