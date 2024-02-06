import { Pipe, PipeTransform } from "@angular/core";
import { getDaysBetween } from "../../utils/date.util";

@Pipe({
    name: 'calcDaysBetween'
})
export class CalcDaysBetweenPipe implements PipeTransform {
    constructor() {}
    transform(value: any, ...args: any[]): any {
        const daysBetween = getDaysBetween(value);
        return daysBetween;
    }
}