import { FC } from 'react';
import { mathSymbols, getIsEqual, point, equal, zeroWithPoint } from '../../../utils';
import styles from './Button.module.scss';

export const Button: FC<IButton> = ({ params: { Icon, figure, setScreenText, buttonText, bgrCol = '#4B4B4B' } }) => {
    const buttonContent = figure === 0 ? 0 : figure ? figure : <Icon />;

    const getConditions = (value: string) => {
        const isEqualSymbol = getIsEqual(value || '');
        const lastLetter = value && value[value.length - 1];
        const isAnySymbol = mathSymbols.some(mathSymbol => lastLetter === mathSymbol);

        // when the result is known and we press the equals button:
        const isResultKnown =buttonText === equal && isEqualSymbol;

        // when we click in the point button:
        const isClickedOnPointAndScreenEmpty = buttonContent === point && !value.length;
        const isClickedOnPointAndEqualSymbol = buttonContent === point && isEqualSymbol;
        const isClickedOnPoint = isClickedOnPointAndScreenEmpty || isClickedOnPointAndEqualSymbol;

        // when the sum is defined and when click in the figure:
        const isResultKnownAndClickedOnTheFigure = isEqualSymbol && figure;

        // not allowing math symbols
        const isLastLetterMathSymbol = isAnySymbol && Icon;
        const isScreenEmptyAndClickedMathSymbol = !value && Icon;
        const isAllowedMathSymbol = isLastLetterMathSymbol || isScreenEmptyAndClickedMathSymbol;

        // when math symbol and clicked in the point:
        const IsAllowPointWhenMathSymbols = buttonContent === point && isAnySymbol;

        return {
            isResultKnown,
            isClickedOnPoint,
            isResultKnownAndClickedOnTheFigure,
            isAllowedMathSymbol,
            IsAllowPointWhenMathSymbols
        }
    }

    const getNewValue = (prevValue: string) => {

        let newValue: string | undefined = undefined;

        const {
            isResultKnown,
            isClickedOnPoint,
            isResultKnownAndClickedOnTheFigure,
            isAllowedMathSymbol,
            IsAllowPointWhenMathSymbols
        } = getConditions(prevValue);


        if (isAllowedMathSymbol) {
            newValue = prevValue;
        } else if (isResultKnown) {
            newValue = prevValue;
        } else if (isClickedOnPoint) {
            newValue = zeroWithPoint;
        } else if (isResultKnownAndClickedOnTheFigure) {
            newValue = buttonText;
        } else if (IsAllowPointWhenMathSymbols) {
            newValue = prevValue;
        }

        return newValue;
    }

    const onHandleClick = () => {
        setScreenText((prev: string) => {

            const newValue = getNewValue(prev);
            if (newValue !== undefined) return newValue;

            const prevValue = prev || '';
            const sum = prevValue + buttonText;
            return sum;
        })
    }

    return <div className={styles.button} style={{ background: bgrCol }} onClick={onHandleClick}>
        <div className={`${styles.icon} ${figure ? styles.figure : ''}`}>
            {buttonContent}
        </div>
    </div>
}
