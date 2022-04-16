import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
    Icon: React.Component | any;
    bgrCol?: string;
}

export const Button: FC<IButton> = ({ Icon, bgrCol = '#4B4B4B' }) => {
    return <div className={styles.button} style={{background: bgrCol}}>
        <div className={styles.icon}>
            <Icon />
        </div>
    </div>
}
