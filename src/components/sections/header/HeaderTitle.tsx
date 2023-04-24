import TransitionElement from '../../ui/TransitionElement';

const HeaderTitle = () => {
    return (
        <div className="flex w-8/12 grow flex-row items-end  leading-10 dark:text-white">
            <TransitionElement classBase="fadedown" duration={500}>
                <div className="relative flex w-32 flex-row border-2 bg-white py-1 shadow-md dark:bg-slate-900">
                    <h1 className="mx-5 w-full font-rubik text-4xl font-medium italic">J</h1>
                    <div className="absolute bottom-0 left-1/2 h-full w-1 -translate-x-1/2 -skew-x-12 bg-gray-300 dark:bg-white"></div>
                    <h1 className="mx-5 w-full text-right font-rubik text-4xl font-medium italic">K</h1>
                </div>
            </TransitionElement>
        </div>
    );
};

export default HeaderTitle;
