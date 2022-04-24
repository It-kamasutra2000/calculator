import { FC } from 'react';
import { actionSymbols, getIsEqual } from '../../../utils';
import styles from './Button.module.scss';

interface IButton {
    Icon?: React.Component | any;
    bgrCol?: string;
    figure?: number | string;
    clickAction: string;
    setCount: any;
    count?: string;
    isEqualButton?: boolean;
}

export const Button: FC<IButton> = ({ Icon, count, figure, setCount, clickAction, bgrCol = '#4B4B4B' }) => {
    const symbol = figure === 0 ? 0 : figure ? figure : <Icon />

    const onHandleClick = () => {
        setCount((prev: string) => {
            const isEqual = getIsEqual(prev || '');
            const test = prev && prev[prev.length - 1]
            const result = actionSymbols.some(o => test === o)
            
            if((result && Icon) || (!prev && Icon)) return prev;

            if(clickAction === '=' && isEqual) return prev;

            if ((symbol === '.' && !prev.length) || (symbol === '.' && isEqual)) {
                return '0.';
            }

            if (isEqual && figure) {
                return clickAction;
            }

            const prevValue = prev || '';
            const sum = prevValue + clickAction;
            return sum;
        })
    }

    return <div className={styles.button} style={{ background: bgrCol }} onClick={onHandleClick}>
        <div className={`${styles.icon} ${figure ? styles.figure : ''}`}>
            {symbol}
        </div>
    </div>
}
