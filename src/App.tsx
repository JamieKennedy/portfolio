import './App.css';

import { useAtom } from 'jotai';
import { useState } from 'react';
import About from './components/sections/about/About';
import Experience from './components/sections/experience/Experience';
import Header from './components/sections/header/Header';
import Projects from './components/sections/projects/Projects';
import Toggle from './components/ui/Toggle';
import { themeAtom } from './state/ThemeState';

function App() {
    const [theme, setTheme] = useAtom(themeAtom);

    return (
        <section className={theme === 'dark' ? 'dark' : ''}>
            <div className="overflow-auto dark:bg-slate-900">
                <Header />
                <div className="m-auto flex max-w-7xl flex-col">
                    <About />
                    <Experience />
                    <Projects />
                </div>

                <div className={` m-auto min-h-screen `}></div>
            </div>
        </section>
    );
}

export default App;
