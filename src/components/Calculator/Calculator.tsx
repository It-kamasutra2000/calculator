import { FC } from 'react';
import { Button } from './Button/Button';

import styles from './Calculator.module.scss';
import { Screen } from './Screen/Screen';

export const Calculator: FC = () => {
    return <div className={styles.calculator}>
        <Screen />
        <div style={{ display: 'flex' }}>
            <Button />
            <Button />
            <Button />
            <Button />
        </div>
    </div>
}