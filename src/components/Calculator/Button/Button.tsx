import { FC, memo } from 'react';
import { mathSymbols, getIsEqual } from '../../../utils';
import styles from './Button.module.scss';

export const Button: FC<IButton> = memo(({ params: { Icon = () => <></>, figure, setScreenText, clickAction, bgrCol = '#4B4B4B' } }) => {
    const buttonContent = figure === 0 ? 0 : figure ? figure : <Icon />

    const getConditions = (value: string) => {
        const isEqualSymbol = getIsEqual(value || '');
        const lastLetter = value && value[value.length - 1];
        const isAnySymbol = mathSymbols.some(mathSymbol => lastLetter === mathSymbol);

        // when the result is known and we press the equals button:
        const isResultKnown = clickAction === '=' && isEqualSymbol;

        // when we click in the point button:
        const isClickedOnPointAndScreenEmpty = buttonContent === '.' && !value.length;
        const isClickedOnPointAndEqualSymbol = buttonContent === '.' && isEqualSymbol;
        const isClickedOnPoint = isClickedOnPointAndScreenEmpty || isClickedOnPointAndEqualSymbol;

        // when the sum is defined and when click in the figure:
        const isResultKnownAndClickedOnTheFigure = isEqualSymbol && figure;

        // not allowing math symbols
        const isLastLetterMathSymbol = isAnySymbol && Icon;
        const isScreenEmptyAndClickedMathSymbol = !value && Icon;
        const isAllowedMathSymbol = isLastLetterMathSymbol || isScreenEmptyAndClickedMathSymbol;

        return {
            isResultKnown,
            isClickedOnPoint,
            isResultKnownAndClickedOnTheFigure,
            isAllowedMathSymbol,
        }
    }

    const getNewValue = (prevValue: string) => {

        let newValue;

        const {
            isResultKnown,
            isClickedOnPoint,
            isResultKnownAndClickedOnTheFigure,
            isAllowedMathSymbol,
        } = getConditions(prevValue);


        if (isAllowedMathSymbol) {
            newValue = prevValue;
        } else if (isResultKnown) {
            newValue = prevValue;
        } else if (isClickedOnPoint) {
            newValue = '0.';
        } else if (isResultKnownAndClickedOnTheFigure) {
            newValue = clickAction;
        }

        return newValue;
    }

    const onHandleClick = () => {
        setScreenText((prev: string) => {

            const newValue = getNewValue(prev);
            if (newValue !== undefined) return newValue;

            const prevValue = prev || '';
            const sum = prevValue + clickAction;
            return sum;
        })
    }

    return <div className={styles.button} style={{ background: bgrCol }} onClick={onHandleClick}>
        <div className={`${styles.icon} ${figure ? styles.figure : ''}`}>
            {buttonContent}
        </div>
    </div>
})
