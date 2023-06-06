import './App.css';

import { useAtom } from 'jotai';
import { useState } from 'react';
import About from './components/sections/about/About';
import Contact from './components/sections/contact/Contact';
import Experience from './components/sections/experience/Experience';
import Header from './components/sections/header/Header';
import Projects from './components/sections/projects/Projects';
import Toggle from './components/ui/Toggle';
import { themeAtom } from './state/ThemeState';

function App() {
    const [theme, setTheme] = useAtom(themeAtom);

    return (
        <section className={theme === 'dark' ? 'dark' : ''}>
            <div className="min-h-screen overflow-auto dark:bg-slate-900">
                <Header />
                <div className="m-auto mb-32 flex max-w-7xl flex-col">
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
            </div>
            <footer className="w-screen bg-white dark:bg-slate-900">
                <div className=" max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-gray-500">&copy; 2023 Jamie Kennedy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default App;
