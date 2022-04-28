export const multiple = '*';
export const divide = '/';
export const equal = '=';
export const add = '+';
export const subtract = '-';
export const point = '.';
export const cleanSymnol = 'C';
export const zeroWithPoint = '0.';

export const colors = {
    mathActionColor:  '#FD8D0E',
    topFiguresColor: '#2E2E2E',
    figuresColor: '#4B4B4B',
    screenColor: '#1E1E1E',
};

export const getIsEqual = (screenText: string) => {
    return String(screenText).includes(equal);
} 

export const mathSymbols = [multiple, divide, equal, add, subtract, point];
