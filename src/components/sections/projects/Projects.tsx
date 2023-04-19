import * as React from 'react';

import TransitionElement from '../../ui/TransitionElement';

const Projects = () => {
    return (
        <TransitionElement className={'w-3/5 self-end'} classBase="faderight" duration={500} delay={800}>
            <div id="Projects" className="mt-32 h-fit overflow-hidden rounded-xl">
                <h1 className="m-16 text-end font-rubik text-5xl dark:text-gray-200">Projects {'<'}</h1>
            </div>
        </TransitionElement>
    );
};

export default Projects;
