import { FC } from 'react';
import { getIsEqual } from '../../../utils';
import styles from './Screen.module.scss';

export const Screen: FC<IScreen> = ({ screenText }) => {

    const isEqual = getIsEqual(screenText);

    return <div className={styles.screen}>
        <div className={styles.sum}>
            {screenText}
        </div>
        <div className={styles.test}>{isEqual && eval(String(screenText).split('=')[0])}</div>
    </div>
}