import * as React from 'react';

import { ReactNode } from 'react';
import { Link } from 'react-scroll';

interface IScrollLinkProps {
    to: string;
    offset?: number;
    children: ReactNode;
}

const ScrollLink = ({ to, offset, children }: IScrollLinkProps) => {
    return (
        <div>
            <Link
                className="transition-[transform, opacity] mx-8  cursor-pointer font-robotoMono duration-200 hover:text-sky-500 hover:dark:text-amber-200"
                to={to}
                smooth={true}
                duration={200}
                spy={true}
                offset={offset}
            >
                {children}
            </Link>
        </div>
    );
};

export default ScrollLink;
