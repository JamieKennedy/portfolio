import TransitionElement from '../../ui/TransitionElement';

const HeaderTitle = () => {
    return (
        <div className="flex w-8/12 grow flex-row items-end  leading-10 dark:text-white">
            <TransitionElement classBase="fadedown" duration={500}>
                <h1 className="ml-5 text-center font-rubik text-4xl font-medium italic">Jamie Kennedy</h1>
            </TransitionElement>
        </div>
    );
};

export default HeaderTitle;
