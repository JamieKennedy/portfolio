import { useEffect, useRef, useState } from 'react';

import { useAtom } from 'jotai';
import { Link } from 'react-scroll';
import { themeAtom } from '../../../state/ThemeState';
import ScrollLink from '../../ui/ScrollLink';
import Seperator from '../../ui/Seperator';
import Toggle from '../../ui/Toggle';
import HeaderLinks from './HeaderLinks';
import HeaderTitle from './HeaderTitle';

const dynamicHeaderClassesInitial = 'h-28 dark:bg-slate-900 bg-white';
const dynamicHeaderClassesScroll = 'dark:bg-slate-900/80 bg-white/80 backdrop-blur-sm shadow-xl h-20 ';

const Header = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [dynamicHeaderClasses, setDynamicHeaderClasses] = useState(dynamicHeaderClassesInitial);
    const [theme, setTheme] = useAtom(themeAtom);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [scrollTop]);

    const scrollHandler = (event: any) => {
        const newScrollTop = document.documentElement.scrollTop;

        headerClasses(newScrollTop);
        setScrollTop(newScrollTop);
    };

    const changeTheme = (isDark: boolean) => {
        setTheme(isDark ? 'dark' : 'light');
    };

    const headerClasses = (newScrollTop: number) => {
        if (newScrollTop === 0) {
            // Scrolled to the top of the page
            setDynamicHeaderClasses(dynamicHeaderClassesInitial);
            return;
        }

        setDynamicHeaderClasses(dynamicHeaderClassesScroll);
    };

    return (
        <header
            className={`fixed z-50  flex w-full flex-row items-center justify-between place-self-center px-20 transition-all duration-300 ease-in-out ${dynamicHeaderClasses}`}
        >
            <HeaderTitle />
            <HeaderLinks />
            <Toggle toggleFn={changeTheme} defaultState={theme === 'dark'} />
        </header>
    );
};

export default Header;
