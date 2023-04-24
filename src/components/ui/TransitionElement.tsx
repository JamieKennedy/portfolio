import { useEffect, useRef, useState } from 'react';

export interface ITransitionElementProps {
    className?: string;
    classBase: string;
    duration: number;
    delay?: number;
    children?: React.ReactNode;
}

enum TransitionState {
    Inactive,
    Start,
    Active,
    End,
}

const TransitionElement: React.FunctionComponent<ITransitionElementProps> = ({ className, classBase, delay, duration, children }) => {
    const [transitionState, setTransitionState] = useState<TransitionState>(TransitionState.Start);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement | null>(null);

    const getClassName = (): string => {
        if (transitionState === TransitionState.Start) return `${classBase}-start`;

        if (transitionState === TransitionState.Active) return `${classBase}-active`;

        if (transitionState === TransitionState.End) return `${classBase}-end`;

        return classBase;
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);

                observer.unobserve(domRef.current!);
            }
        });

        if (domRef.current) observer.observe(domRef.current);

        let timer: number;

        if (isVisible) {
            if (transitionState === TransitionState.Start) {
                // Initial delay
                timer = setTimeout(() => setTransitionState(TransitionState.Active), delay ?? 0);
            }

            if (transitionState === TransitionState.Active) {
                timer = setTimeout(() => setTransitionState(TransitionState.End), duration);
            }
        }

        return () => {
            clearTimeout(timer);
            observer.disconnect;
        };
    }, [transitionState, isVisible]);

    return (
        <div className={className + ' ' + getClassName()} ref={domRef}>
            {children}
        </div>
    );
};

export default TransitionElement;
