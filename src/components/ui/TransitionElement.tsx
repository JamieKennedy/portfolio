import { useEffect, useState } from 'react';

export interface ITransitionElementProps {
    className?: string;
    classBase: string;
    duration: number;
    delay?: number;
    children?: React.ReactNode;
}

enum TransitionState {
    Start,
    Active,
    End,
}

const TransitionElement: React.FunctionComponent<ITransitionElementProps> = ({ className, classBase, delay, duration, children }) => {
    const [transitionState, setTransitionState] = useState<TransitionState>(TransitionState.Start);

    const getClassName = (): string => {
        if (transitionState === TransitionState.Start) return `${classBase}-start`;

        if (transitionState === TransitionState.Active) return `${classBase}-active`;

        if (transitionState === TransitionState.End) return `${classBase}-end`;

        return classBase;
    };

    useEffect(() => {
        let timer: number;

        if (transitionState === TransitionState.Start) {
            // Initial delay
            timer = setTimeout(() => setTransitionState(TransitionState.Active), delay ?? 0);
        }

        if (transitionState === TransitionState.Active) {
            timer = setTimeout(() => setTransitionState(TransitionState.End), duration);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [transitionState]);

    return <div className={className + ' ' + getClassName()}>{children}</div>;
};

export default TransitionElement;
