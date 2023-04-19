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
                className="mx-8 cursor-pointer font-robotoMono transition-all duration-200 hover:text-amber-200"
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
