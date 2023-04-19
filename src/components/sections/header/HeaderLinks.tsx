import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import TransitionElement, { ITransitionElementProps } from '../../ui/TransitionElement';

import ScrollLink from '../../ui/ScrollLink';
import Seperator from '../../ui/Seperator';
import TransitionGroup from '../../ui/TransitionGroup';

interface linkData {
    title: string;
    to: string;
}

const links: linkData[] = [
    {
        title: 'About',
        to: 'About',
    },
    {
        title: 'Projects',
        to: 'Projects',
    },
    {
        title: 'Blog',
        to: '',
    },
];
const HeaderLinks = () => {
    const [isMounted, setIsMounted] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    let linkElements: ReactElement<ITransitionElementProps, string | JSXElementConstructor<any>>[] = [];
    if (links && links.length > 0) {
        linkElements = links.map<any>((link, i) => {
            return (
                <TransitionElement key={i} classBase={'fadedown'} duration={500} delay={i * 200}>
                    <ScrollLink to={link.to} offset={-80}>
                        {link.title}
                    </ScrollLink>
                </TransitionElement>
            );
        });
    }

    return <div className={'mx-10 flex h-full w-fit flex-row items-center justify-evenly dark:text-white'}>{linkElements}</div>;
};

export default HeaderLinks;
