import { FC } from 'react';

import styles from './Calculator.module.scss';
import { Screen } from './Screen/Screen';

export const Calculator: FC = () => {
    return <div className={styles.calculator}>
        <Screen/>
    </div>
}