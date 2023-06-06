import * as React from 'react';

import FilterItem from './FilterItem';

const filters: string[] = ['React', 'TypeScript', 'C#', 'Tailwind', '.Net Core'];

interface IFilterListProps {
    selectedFilters: string[];
    changeFilters: (label: string) => void;
}

const FilterList = ({ selectedFilters, changeFilters }: IFilterListProps) => {
    const buttons = filters.map((filter) => (
        <FilterItem key={filter} label={filter} selected={selectedFilters.includes(filter)} onClick={(label) => changeFilters(filter)}></FilterItem>
    ));

    return <div className="mx-auto flex w-2/3 flex-row flex-wrap justify-evenly">{buttons}</div>;
};

export default FilterList;
