import { FC, useState } from 'react';
import { Add } from '../../assets/svg/Add';
import { Divide } from '../../assets/svg/Divide';
import { Equal } from '../../assets/svg/Equal';
import { Multiple } from '../../assets/svg/Multiple';
import { Subtract } from '../../assets/svg/Subtract';
import { colors } from '../../utils';
import { Button } from './Button/Button';

import styles from './Calculator.module.scss';
import { ClearBlock } from './ClearBlock/ClearBlock';
import { Header } from './Header/Header';
import { Screen } from './Screen/Screen';

export const Calculator: FC = () => {

    const [count, setCount] = useState<string>('10');

    return <div className={styles.calculator}>
        <Header />
        <div className={styles.screenBlock}>
            <ClearBlock />
            <Screen count={count}  />
        </div>
        <div className={styles.buttons}>
            <Button figure={7} bgrCol={colors.topFiguresColor} />
            <Button figure={8} bgrCol={colors.topFiguresColor} />
            <Button figure={9} bgrCol={colors.topFiguresColor} />
            <Button Icon={Multiple} bgrCol={colors.mathActionColor} />
            <Button figure={4} bgrCol={colors.figuresColor} />
            <Button figure={5} bgrCol={colors.figuresColor} />
            <Button figure={6} bgrCol={colors.figuresColor} />
            <Button Icon={Divide} bgrCol={colors.mathActionColor} />
            <Button figure={1} bgrCol={colors.figuresColor} />
            <Button figure={2} bgrCol={colors.figuresColor} />
            <Button figure={3} bgrCol={colors.figuresColor} />
            <Button Icon={Add} bgrCol={colors.mathActionColor} />
            <Button figure={0} bgrCol={colors.figuresColor} />
            <Button figure={'.'}/>
            <Button Icon={Equal} />
            <Button Icon={Subtract} bgrCol={colors.mathActionColor} />
        </div>
    </div>
}