import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
    actionType: string
}

export const Button: FC = () => {
    return <div className={styles.button}>

    </div>
}