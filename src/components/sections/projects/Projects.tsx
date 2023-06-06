import { useState } from 'react';
import { BsArrow90DegDown } from 'react-icons/bs';
import TransitionElement from '../../ui/TransitionElement';
import FilterList from './components/FilterList';
import ProjectList from './components/ProjectList';

const Projects = () => {
    const [filters, setFilters] = useState<string[]>([]);

    const changeFilters = (label: string) => {
        if (filters.includes(label)) {
            // remove from filters
            setFilters(filters.filter((f) => f != label));
            return;
        }

        setFilters((prev) => [...prev, label]);
    };

    return (
        <TransitionElement className={'mb-20 w-full self-end'} classBase="fadedown" duration={500}>
            <div id="Projects" className="mt-32 flex h-fit flex-row items-center justify-center overflow-hidden rounded-xl">
                <hr className="w-48 text-sky-200" />
                <h1 className="mx-8 my-16 text-center font-rubik text-5xl dark:text-gray-200">Projects</h1>
                <hr className="w-48 text-sky-200" />
            </div>
            <FilterList selectedFilters={filters} changeFilters={changeFilters} />
            <ProjectList filters={filters} />
        </TransitionElement>
    );
};

export default Projects;
