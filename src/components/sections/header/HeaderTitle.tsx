import TransitionElement from '../../ui/TransitionElement';

const HeaderTitle = () => {
    return (
        <div className="flex w-8/12 grow flex-row items-end  leading-10 dark:text-white">
            <TransitionElement classBase="fadedown" duration={500}>
                <div className="bg-white shadow-md dark:bg-slate-900">
                    <h1 className="border-2 px-5 py-1 text-center font-rubik text-4xl font-medium italic">J K</h1>
                </div>
            </TransitionElement>
        </div>
    );
};

export default HeaderTitle;
