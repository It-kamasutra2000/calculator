interface IScreen {
    screenText: string;
}

interface IIcon {
    color: string;
    height: number;
    width: string;
}

interface IClearBlock {
    setScreenText: (screenText: string) => void;
    screenText: string;
}

interface IButton {
    params: {
        Icon?: ComponentType;
        bgrCol?: string;
        figure?: number | string;
       buttonText: string;
        setScreenText: (screenText: (prevValue: string) => string) => void;
        screenText?: string;
        isEqualButton?: boolean;
    }
}
