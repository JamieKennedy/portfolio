import TransitionElement from '../../ui/TransitionElement';

const Experience = () => {
    return (
        <TransitionElement className={'w-3/5 self-end'} classBase="faderight" duration={500} delay={800}>
            <div id="Experience" className="mt-32 flex h-fit flex-row items-center justify-end overflow-hidden rounded-xl">
                <hr className="w-48 text-sky-200" />
                <h1 className="my-16 ml-8 mr-16 text-end font-rubik text-5xl dark:text-gray-200">Experience</h1>
            </div>
        </TransitionElement>
    );
};

export default Experience;
