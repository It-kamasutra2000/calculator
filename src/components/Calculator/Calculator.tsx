import { FC } from 'react';
import { Add } from '../../assets/svg/Add';
import { Divide } from '../../assets/svg/Divide';
import { Multiple } from '../../assets/svg/Multiple';
import { Button } from './Button/Button';

import styles from './Calculator.module.scss';
import { Screen } from './Screen/Screen';

export const Calculator: FC = () => {
    return <div className={styles.calculator}>
        <Screen />
        <div className={styles.test}>
            <Button Icon={Divide} />
            <Button Icon={Add} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
         
        </div>
    </div>
}