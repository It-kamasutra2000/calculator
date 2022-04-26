import { FC } from 'react';
import { getIsEqual } from '../../../utils';
import styles from './ClearBlock.module.scss';

export const ClearBlock: FC<IClearBlock> = ({ setScreenText, screenText }) => {

    const isEqual = getIsEqual(screenText);

    const onHandleClear = () => {
        if (isEqual) {
            setScreenText('');
            return;
        }
        const newscreenText = screenText.slice(0, screenText.length - 1);
        setScreenText(newscreenText);
    }

    return <div className={styles.clear}>
        <div className={styles.clearIcon} onClick={onHandleClear}>
            C
        </div>
    </div>
}