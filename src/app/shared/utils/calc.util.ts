export enum ConstantValue {
    VAT = 15,
    FULL_PERCENTAGE = 100
}

export const calcVatOfAmount = (amount: number) => (amount/ConstantValue.FULL_PERCENTAGE)*ConstantValue.VAT;
export const calcDiscountOfAmount = (amount: number, discount: number) => (amount/ConstantValue.FULL_PERCENTAGE)*discount;
export const calcTotalAmount = (amount: number, discount: number) => (amount - calcDiscountOfAmount(amount, discount)) + calcVatOfAmount(amount);
export const calcTotalAmountWithDiscount = (amount: number, discount: number) => amount - calcDiscountOfAmount(amount, discount);