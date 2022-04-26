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
import { colors } from '../../utils';
import { Button } from './Button/Button';

export const Calculator: FC = () => {

    const [screenText, setScreenText] = useState<string>('');

    const datas = [
        { screenText, setScreenText, figure: 7, bgrCol: colors.topFiguresColor, clickAction: '7' },
        { screenText, setScreenText, figure: 8, bgrCol: colors.topFiguresColor, clickAction: '8' },
        { screenText, setScreenText, figure: 9, bgrCol: colors.topFiguresColor, clickAction: '9' },
        { screenText, setScreenText, Icon: Multiple, bgrCol: colors.mathActionColor, clickAction: '*' },
        { screenText, setScreenText, figure: 4, bgrCol: colors.figuresColor, clickAction: '4' },
        { screenText, setScreenText, figure: 5, bgrCol: colors.figuresColor, clickAction: '5' },
        { screenText, setScreenText, figure: 6, bgrCol: colors.figuresColor, clickAction: '6' },
        { screenText, setScreenText, Icon: Divide, bgrCol: colors.mathActionColor, clickAction: '/' },
        { screenText, setScreenText, figure: 1, bgrCol: colors.figuresColor, clickAction: '1' },
        { screenText, setScreenText, figure: 2, bgrCol: colors.figuresColor, clickAction: '2' },
        { screenText, setScreenText, figure: 3, bgrCol: colors.figuresColor, clickAction: '3' },
        { screenText, setScreenText, Icon: Add, bgrCol: colors.mathActionColor, clickAction: '+' },
        { screenText, setScreenText, figure: 0, bgrCol: colors.figuresColor, clickAction: '0' },
        { screenText, setScreenText, figure: '.', bgrCol: colors.figuresColor, clickAction: '.' },
        { screenText, setScreenText, Icon: Equal, bgrCol: colors.figuresColor, clickAction: '=' },
        { screenText, setScreenText, Icon: Subtract, bgrCol: colors.mathActionColor, clickAction: '-' },
    ]

    return <div className={styles.calculator}>
        <Header />
        <div className={styles.screenBlock}>
            <ClearBlock screenText={screenText} setScreenText={setScreenText} />
            <Screen screenText={screenText} />
        </div>
        <div className={styles.buttons}>
            {datas.map(data => {
                return <Button
                    key={data.clickAction}
                    params={{
                        screenText: data.screenText,
                        setScreenText: data.setScreenText,
                        figure: data.figure,
                        bgrCol: data.bgrCol,
                        clickAction: data.clickAction,
                        Icon: data.Icon
                    }}
                />
            })}
        </div>
    </div>
}