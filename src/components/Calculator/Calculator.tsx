import { FC, useCallback, useEffect, useState } from 'react';
import { Add } from '../../assets/svg/Add';
import { Divide } from '../../assets/svg/Divide';
import { Equal } from '../../assets/svg/Equal';
import { Multiple } from '../../assets/svg/Multiple';
import { Subtract } from '../../assets/svg/Subtract';
import { colors, getIsEqual } from '../../utils';
import { Button } from './Button/Button';

import styles from './Calculator.module.scss';
import { ClearBlock } from './ClearBlock/ClearBlock';
import { Header } from './Header/Header';
import { Screen } from './Screen/Screen';

export const Calculator: FC = () => {

    const [count, setCount] = useState<string>('');


    return <div className={styles.calculator}>
        <Header />
        <div className={styles.screenBlock}>
            <ClearBlock />
            <Screen count={count} />
        </div>
        <div className={styles.buttons}>
            <Button count={count} setCount={setCount} figure={7} bgrCol={colors.topFiguresColor} clickAction={'7'} />
            <Button count={count} setCount={setCount} figure={8} bgrCol={colors.topFiguresColor} clickAction={'8'} />
            <Button count={count} setCount={setCount} figure={9} bgrCol={colors.topFiguresColor} clickAction={'9'} />
            <Button setCount={setCount} Icon={Multiple} bgrCol={colors.mathActionColor} clickAction={'*'} />
            <Button count={count} setCount={setCount} figure={4} bgrCol={colors.figuresColor} clickAction={'4'} />
            <Button count={count} setCount={setCount} figure={5} bgrCol={colors.figuresColor} clickAction={'5'} />
            <Button count={count} setCount={setCount} figure={6} bgrCol={colors.figuresColor} clickAction={'6'} />
            <Button setCount={setCount} Icon={Divide} bgrCol={colors.mathActionColor} clickAction={'/'} />
            <Button count={count} setCount={setCount} figure={1} bgrCol={colors.figuresColor} clickAction={'1'} />
            <Button count={count} setCount={setCount} figure={2} bgrCol={colors.figuresColor} clickAction={'2'} />
            <Button count={count} setCount={setCount} figure={3} bgrCol={colors.figuresColor} clickAction={'3'} />
            <Button setCount={setCount} Icon={Add} bgrCol={colors.mathActionColor} clickAction={'+'} />
            <Button count={count} setCount={setCount} figure={0} bgrCol={colors.figuresColor} clickAction={'0'} />
            <Button count={count} setCount={setCount} figure={'.'} clickAction={'.'} />
            <Button isEqualButton={true} setCount={setCount} Icon={Equal} clickAction={'='} />
            <Button setCount={setCount} Icon={Subtract} bgrCol={colors.mathActionColor} clickAction={'-'} />
        </div>
    </div>
}