import * as React from 'react';

interface IFilterItemProps {
    label: string;
    selected: boolean;
    onClick: (label: string) => void;
}

const FilterItem: React.FunctionComponent<IFilterItemProps> = ({ label, selected, onClick }) => {
    return (
        <button
            className={`h-10 w-28 rounded-md border-2 font-robotoMono dark:text-white ${
                selected ? 'border-sky-500 dark:border-amber-200' : 'border-slate-500'
            } mb-2 hover:bg-white/5`}
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    );
};

export default FilterItem;
