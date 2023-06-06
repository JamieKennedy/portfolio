import * as React from 'react';

import { Link, animateScroll, scroller } from 'react-scroll';

import { ReactNode } from 'react';

interface IScrollLinkProps {
    to: string | number;
    offset?: number;
    children: ReactNode;
}

const ScrollLink = ({ to, offset, children }: IScrollLinkProps) => {
    const scrollHandler = () => {
        if (typeof to === 'string') {
            // anchor
            scroller.scrollTo(to, {
                duration: 500,
                offset: offset,
                smooth: 'easeInOutQuart',
            });
            return;
        }

        // to is a number
        animateScroll.scrollTo(to, {
            duration: 500,
            offset: offset,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div>
            <a
                className="transition-[transform, opacity] mx-8  cursor-pointer font-robotoMono duration-200 hover:text-sky-500 hover:dark:text-amber-200"
                onClick={() => scrollHandler()}
            >
                {children}
            </a>
        </div>
    );
};

export default ScrollLink;
