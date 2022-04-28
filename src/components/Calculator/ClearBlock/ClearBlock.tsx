import { FC } from 'react';
import { cleanSymnol, getIsEqual } from '../../../utils';
import styles from './ClearBlock.module.scss';

export const ClearBlock: FC<IClearBlock> = ({ setScreenText, screenText }) => {

    const isEqualSymbol = getIsEqual(screenText);

    const onHandleClear = () => {
        if (isEqualSymbol) {
            setScreenText('');
            return;
        }
        const newScreenText = screenText.slice(0, screenText.length - 1);
        setScreenText(newScreenText);
    }

    return <div className={styles.clear}>
        <div className={styles.clearIcon} onClick={onHandleClear}>
            {cleanSymnol}
        </div>
    </div>
}