import { Children, JSXElementConstructor, ReactElement, ReactNode, cloneElement, useEffect } from 'react';

import { ITransitionElementProps } from './TransitionElement';

interface ITransitionGroupProps {
    className?: string;

    offset?: number;
    children: ReactElement<ITransitionElementProps, string | JSXElementConstructor<any>>[];
}

const TransitionGroup: React.FunctionComponent<ITransitionGroupProps> = ({ className, offset, children }) => {
    let newChildren: ReactElement<ITransitionElementProps, string | JSXElementConstructor<any>>[] = [];

    return <div className={className}>{children}</div>;
};

export default TransitionGroup;
