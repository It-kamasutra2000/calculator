import { FC } from 'react';
import { equal, getIsEqual } from '../../../utils';
import styles from './Screen.module.scss'

export const Screen: FC<IScreen> = ({ screenText }) => {

    const isEqualSymbol = getIsEqual(screenText);
    const screenTextWithoutEqual = String(screenText).split(equal)[0];

    return <div className={styles.screen}>
        <div className={styles.screenText}>
            {screenText}
        </div>
        <div className={styles.sum}>
            {isEqualSymbol && eval(screenTextWithoutEqual)}
        </div>
    </div>
}