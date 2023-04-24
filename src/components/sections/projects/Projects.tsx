import * as React from 'react';

import { BsArrow90DegDown } from 'react-icons/bs';
import TransitionElement from '../../ui/TransitionElement';

const Projects = () => {
    return (
        <TransitionElement className={'w-full self-end'} classBase="fadedown" duration={500}>
            <div id="Projects" className="mt-32 flex h-fit flex-row items-center justify-center overflow-hidden rounded-xl">
                <hr className="w-48 text-sky-200" />
                <h1 className="my-16 ml-8 mr-16 text-end font-rubik text-5xl dark:text-gray-200">Projects</h1>
                <hr className="w-48 text-sky-200" />
            </div>
        </TransitionElement>
    );
};

export default Projects;
