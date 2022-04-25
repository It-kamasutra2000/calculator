interface IScreen {
    count: string;
}

interface IIcon {
    color: string;
    height: number;
    width: string;
}

interface IClearBlock {
    setCount: (count: string) => void;
    count: string
}

interface IButton {
    Icon?: React.Component | any;
    bgrCol?: string;
    figure?: number | string;
    clickAction: string;
    setCount: any;
    count?: string;
    isEqualButton?: boolean;
}
