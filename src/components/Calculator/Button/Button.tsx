import { FC } from 'react';
import { mathSymbols, getIsEqual } from '../../../utils';
import styles from './Button.module.scss';


export const Button: FC<IButton> = ({ Icon, figure, setCount, clickAction, bgrCol = '#4B4B4B' }) => {
    const content = figure === 0 ? 0 : figure ? figure : <Icon />

    const getConditions = (value: string) => {
        const isEqual = getIsEqual(value || '');
        const lastLetter = value && value[value.length - 1];
        const isAnySymbol = mathSymbols.some(o => lastLetter === o);

        // if the result is known and we press the equals button:
        const isResultKnown = clickAction === '=' && isEqual;

        const isClickedOnPointAndScreenEmpty = content === '.' && !value.length;
        const isClickedOnPointAndEqualSymbol = content === '.' && isEqual;
        const isClickedOnPoint = isClickedOnPointAndScreenEmpty || isClickedOnPointAndEqualSymbol;

        const isResultKnownAndClickedOnTheFigure = isEqual && figure;

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
            isAllowedMathSymbol
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
        setCount((prev: string) => {

            const newValue = getNewValue(prev);
            if (newValue !== undefined) return newValue;

            const prevValue = prev || '';
            const sum = prevValue + clickAction;
            return sum;
        })
    }

    return <div className={styles.button} style={{ background: bgrCol }} onClick={onHandleClick}>
        <div className={`${styles.icon} ${figure ? styles.figure : ''}`}>
            {content}
        </div>
    </div>
}
