import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
    Icon?: React.Component | any;
    bgrCol?: string;
    figure?: number | string;
}

export const Button: FC<IButton> = ({ Icon, figure, bgrCol = '#4B4B4B' }) => {
    const icon = figure === 0 ? 0 : <Icon/>; 

    return <div className={styles.button} style={{background: bgrCol}}>
        <div className={`${styles.icon} ${figure ? styles.figure : ''}`}>
            {figure || icon} 
        </div>
    </div>
}
