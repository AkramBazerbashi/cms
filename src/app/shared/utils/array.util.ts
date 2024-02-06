import { ILastItemsOptions } from "../interfaces/items-options.interface";
import { CheckArrayExist } from "../shared";
import { checkFieldsKeys } from "./objects.util";

export const checkArrayExist: CheckArrayExist = (array) => array && !!array.length;

export const getLastItems = (array: any[], options: ILastItemsOptions) => {    
    if(!checkFieldsKeys(options)) throw new Error('Options is requied.');
    
    const copyArray = [...array];
    const fullArray = [];
    const memo: any = {};

    let index: number = 0;
    let middleIndex: number = 0;

    while(copyArray.length) {
        memo[index] = copyArray.splice(0, options.from);
        
        if(!isGreater(memo[index].length, options.from)) break;

        middleIndex = options.get;
        memo[index] = memo[index].splice(-middleIndex);

        if(options.full) {
            fullArray.push(...memo[index]);
        }

        index++;
    }
    
    return options.full ? fullArray : memo;
}

export const isGreater = (arrayLength: number, range: number) => arrayLength == range || arrayLength == (range-1);