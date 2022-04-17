import { FC } from 'react';
import { Multiple } from '../../assets/svg/Multiple';
import { colors } from '../../utils';
import { Button } from './Button/Button';

import styles from './Calculator.module.scss';
import { ClearBlock } from './ClearBlock/ClearBlock';
import { Header } from './Header/Header';
import { Screen } from './Screen/Screen';

export const Calculator: FC = () => {
    return <div className={styles.calculator}>
        <Header />
        <div className={styles.screenBlock}>
            <ClearBlock />
            <Screen />
        </div>
        <div className={styles.buttons}>
            <Button figure={7} bgrCol={colors.topFiguresColor} />
            <Button figure={8} bgrCol={colors.topFiguresColor} />
            <Button figure={9} bgrCol={colors.topFiguresColor} />
            <Button Icon={Multiple} bgrCol={colors.mathActionColor} />
            <Button figure={4} bgrCol={colors.figuresColor} />
            <Button figure={5} bgrCol={colors.figuresColor} />
            <Button figure={6} bgrCol={colors.figuresColor} />
            <Button Icon={Multiple} bgrCol={colors.mathActionColor} />
            <Button figure={1} bgrCol={colors.figuresColor} />
            <Button figure={2} bgrCol={colors.figuresColor} />
            <Button figure={3} bgrCol={colors.figuresColor} />
            <Button Icon={Multiple} bgrCol={colors.mathActionColor} />
            <Button figure={0} bgrCol={colors.figuresColor} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} />
            <Button Icon={Multiple} bgrCol={colors.mathActionColor} />
        </div>
    </div>
}