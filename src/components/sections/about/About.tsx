import * as React from 'react';

import TransitionElement from '../../ui/TransitionElement';

const About = () => {
    return (
        <TransitionElement className={'w-3/5'} classBase="fadeleft" duration={500} delay={600}>
            <div id="About" className="mt-32 h-fit overflow-hidden rounded-xl ">
                <h1 className="m-16 font-rubik text-5xl dark:text-gray-200">{'>'} About Me</h1>
            </div>
        </TransitionElement>
    );
};

export default About;
