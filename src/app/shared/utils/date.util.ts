export enum DateFormats {
    DD_MM_YY = 'DD_MM_YY',
    MM_DD_YY = 'MM_DD_YY',
    YY_MM_DD = 'YY_MM_DD'
}
export enum DateSeparates {
    DASH = 'DASH',
    SLASH = 'SLASH'
}

type dateFormat = DateFormats.DD_MM_YY | DateFormats.MM_DD_YY | DateFormats.YY_MM_DD
type separate = DateSeparates.DASH | DateSeparates.SLASH

export const getDaysBetween = (value: any) => {
    if (typeof value == 'number') return value;

    const endDate = new Date(value);
    const currentDate = new Date();
    const dateDiff = endDate.getTime() - currentDate.getTime();
    const daysBetween = Math.ceil(dateDiff / (1000 * 3600 * 24))
    return daysBetween <= 0 ? 0 : daysBetween;
}

export const getFullDateTime = (invalidDate: Date | string, formatWith: dateFormat, separateًWith: separate) => {
    const validDate = new Date(invalidDate);
    const fullDate = getDateOnly(validDate, formatWith, separateًWith);
    const hours = validDate.getHours().toString();
    const minutes = validDate.getMinutes().toString();
    const seconds = validDate.getSeconds().toString();

    return `${fullDate} ${normalizeDate(hours)}:${normalizeDate(minutes)}:${normalizeDate(seconds)}`
}

export const getDateOnly = (invalidDate: Date, formatWith: dateFormat, separateًWith: separate) => {
    const day = normalizeDate(invalidDate.getDate().toString());
    const month = normalizeDate((invalidDate.getMonth() + 1).toString());
    const year = invalidDate.getFullYear();
    const dateList = getFomratList(formatWith, { day, month, year });

    return separateًWith == DateSeparates.DASH ? dateList.join('-') : dateList.join('/');
}

const normalizeDate = (dateString: string) => dateString.padStart(2, '0')
const getFomratList = (format: string, { day, month, year }) => {
    switch (format) {
        case DateFormats.DD_MM_YY: return [day, month, year];
        case DateFormats.MM_DD_YY: return [month, day, year];
        case DateFormats.YY_MM_DD: return [year, month, day];
    }
}
const convertToDate = (invalidDate: string | Date) => new Date(invalidDate);