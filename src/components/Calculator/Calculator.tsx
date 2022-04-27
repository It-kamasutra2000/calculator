import { FC, useState } from 'react';

import styles from './Calculator.module.scss';

import { ClearBlock } from './ClearBlock/ClearBlock';
import { Header } from './Header/Header';
import { Screen } from './Screen/Screen';
import { Add } from '../../assets/svg/Add';
import { Divide } from '../../assets/svg/Divide';
import { Equal } from '../../assets/svg/Equal';
import { Multiple } from '../../assets/svg/Multiple';
import { Subtract } from '../../assets/svg/Subtract';
import { add, colors, divide, equal, multiple, point, subtract } from '../../utils';
import { Button } from './Button/Button';

export const Calculator: FC = () => {

    const [screenText, setScreenText] = useState<string>('');

    const buttonsData = [
        { screenText, setScreenText, figure: 7, bgrCol: colors.topFiguresColor,buttonText: '7' },
        { screenText, setScreenText, figure: 8, bgrCol: colors.topFiguresColor,buttonText: '8' },
        { screenText, setScreenText, figure: 9, bgrCol: colors.topFiguresColor,buttonText: '9' },
        { screenText, setScreenText, Icon: Multiple, bgrCol: colors.mathActionColor,buttonText: multiple },
        { screenText, setScreenText, figure: 4, bgrCol: colors.figuresColor,buttonText: '4' },
        { screenText, setScreenText, figure: 5, bgrCol: colors.figuresColor,buttonText: '5' },
        { screenText, setScreenText, figure: 6, bgrCol: colors.figuresColor,buttonText: '6' },
        { screenText, setScreenText, Icon: Divide, bgrCol: colors.mathActionColor,buttonText: divide },
        { screenText, setScreenText, figure: 1, bgrCol: colors.figuresColor,buttonText: '1' },
        { screenText, setScreenText, figure: 2, bgrCol: colors.figuresColor,buttonText: '2' },
        { screenText, setScreenText, figure: 3, bgrCol: colors.figuresColor,buttonText: '3' },
        { screenText, setScreenText, Icon: Add, bgrCol: colors.mathActionColor,buttonText: add },
        { screenText, setScreenText, figure: 0, bgrCol: colors.figuresColor,buttonText: '0' },
        { screenText, setScreenText, figure: point, bgrCol: colors.figuresColor,buttonText: point },
        { screenText, setScreenText, Icon: Equal, bgrCol: colors.figuresColor,buttonText: equal },
        { screenText, setScreenText, Icon: Subtract, bgrCol: colors.mathActionColor,buttonText: subtract},
    ]

    return <div className={styles.calculator}>
        <Header />
        <div className={styles.screenBlock}>
            <ClearBlock screenText={screenText} setScreenText={setScreenText} />
            <Screen screenText={screenText} />
        </div>
        <div className={styles.buttons}>
            {buttonsData.map(data => {
                return <Button
                    key={data.buttonText}
                    params={{
                        screenText: data.screenText,
                        setScreenText: data.setScreenText,
                        figure: data.figure,
                        bgrCol: data.bgrCol,
                       buttonText: data.buttonText,
                        Icon: data.Icon
                    }}
                />
            })}
        </div>
    </div>
}