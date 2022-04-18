import { FC } from 'react';
import styles from './Screen.module.scss';

export const Screen: FC<any> = ({ count }) => {
    return <div className={styles.screen}>
        <div className={styles.sum}>
            {count}
        </div>
    </div>
}