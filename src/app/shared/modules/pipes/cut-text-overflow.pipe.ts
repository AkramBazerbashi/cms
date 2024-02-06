import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'textOverFlow'
})
export class TextOverFlowPipe implements PipeTransform {
    constructor() {}

    transform(value: string, cutLength: number = 15): string {
        return (value?.length > cutLength) ?
            `${value?.substring(0, cutLength)}...` : value;
    }
}