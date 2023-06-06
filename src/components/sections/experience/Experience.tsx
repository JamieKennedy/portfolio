import DetailedList, { IListItem } from './components/DetailedList';

import TransitionElement from '../../ui/TransitionElement';
import EducationList from './components/EducationList';
import WorkList from './components/WorkList';

const Experience = () => {
    return (
        <TransitionElement className={'mb-10 w-full self-end'} classBase="faderight" duration={500} delay={800}>
            <div id="Experience" className="mt-16 flex h-fit flex-row items-center justify-end overflow-hidden rounded-xl">
                <hr className="w-72 text-sky-200" />
                <h1 className="my-16 ml-8 mr-16 text-end font-rubik text-5xl dark:text-gray-200">Experience</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-start">
                <EducationList />
                <WorkList />
            </div>
        </TransitionElement>
    );
};

export default Experience;
