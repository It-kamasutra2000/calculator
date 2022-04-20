import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
    Icon?: React.Component | any;
    bgrCol?: string;
    figure?: number | string;
    clickAction: string;
    setCount: any
}

export const Button: FC<IButton> = ({ Icon, figure, setCount, clickAction, bgrCol = '#4B4B4B' }) => {
    const icon = figure === 0 ? 0 : <Icon/>; 
    const onHandleClick = () => {
        setCount((prev: string) => {
            const prevValue = prev || '';
            const sum = prevValue + clickAction; 
            return sum
        })
    }

    return <div className={styles.button} style={{background: bgrCol}} onClick={onHandleClick}>
        <div className={`${styles.icon} ${figure ? styles.figure : ''}`}>
            {figure || icon} 
        </div>
    </div>
}
