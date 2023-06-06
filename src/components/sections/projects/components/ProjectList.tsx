import { useDeferredValue, useEffect, useState, useTransition } from 'react';
import { IProject, Projects } from '../data';

import TransitionElement from '../../../ui/TransitionElement';
import ProjectListItem from './ProjectListLitem';

interface IProjectListProps {
    filters: string[];
}

const ProjectList: React.FunctionComponent<IProjectListProps> = ({ filters }) => {
    const [visibleProjects, setVisibleProjects] = useState<IProject[]>([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            const filteredProjects = Projects.filter((p) => p.Tags.filter((tag) => filters.length === 0 || filters.includes(tag)).length > 0);
            setVisibleProjects(filteredProjects);
        });
    }, [filters]);

    const elements = visibleProjects.map((project, i) => {
        return (
            <TransitionElement key={i} classBase={'fadedown'} duration={300} delay={i * 100} className="my-5 w-4/5">
                <ProjectListItem project={project} />
            </TransitionElement>
        );
    });

    if (isPending) {
        return <></>;
    }

    return <div className=" flex w-full flex-col items-center">{elements}</div>;
};

export default ProjectList;
