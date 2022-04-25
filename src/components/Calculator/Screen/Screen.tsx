import { FC } from 'react';
import { getIsEqual } from '../../../utils';
import styles from './Screen.module.scss';

export const Screen: FC<IScreen> = ({ count }) => {

    const isEqual = getIsEqual(count);

    return <div className={styles.screen}>
        <div className={styles.sum}>
            {count}
            {isEqual && eval(String(count).split('=')[0])}
        </div>
    </div>
}