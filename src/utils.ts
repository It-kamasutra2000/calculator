export const colors = {
    mathActionColor:  '#FD8D0E',
    topFiguresColor: '#2E2E2E',
    figuresColor: '#4B4B4B',
    screenColor: '#1E1E1E',
};

export const getIsEqual = (screenText: string) => {
    return String(screenText).includes('=');
} 

export const mathSymbols = ['*', '/', '+', '-', '=', '.'];
