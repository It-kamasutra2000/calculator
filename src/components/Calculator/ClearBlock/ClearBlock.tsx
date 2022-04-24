import { FC } from 'react';
import { getIsEqual } from '../../../utils';
import styles from './ClearBlock.module.scss';

interface IClearBlock {
    setCount: (count: string) => void;
    count: string
}

export const ClearBlock: FC<IClearBlock> = ({ setCount, count }) => {

    const isEqual = getIsEqual(count);

    const onHandleClear = () => {
        if (isEqual) {
            setCount('');
            return;
        }
        const newCount = count.slice(0, count.length - 1);
        setCount(newCount);
    }

    return <div className={styles.clear}>
        <div className={styles.clearIcon} onClick={onHandleClear}>
            C
        </div>
    </div>
}