import * as React from 'react';

import { BsArrowUpRightSquare, BsDot, BsGithub } from 'react-icons/bs';

import { IProject } from '../data';

interface IProjectListItemProps {
    project: IProject;
}

const ProjectListItem: React.FunctionComponent<IProjectListItemProps> = ({ project }) => {
    return (
        <div className="relative h-fit w-full overflow-clip  rounded-md border-2 border-sky-500 p-5 font-robotoMono dark:border-amber-200 dark:bg-white/5">
            {project.WIP && (
                <div className="absolute -right-8  -top-3 flex h-10  w-20 rotate-45  flex-col  items-center justify-end border-2 border-sky-500 dark:border-amber-200">
                    <p className="text-center text-sm leading-5 dark:text-white">WIP</p>
                </div>
            )}
            <div className="flex flex-row items-center dark:text-white">
                <h1 className="text-lg ">{project.Title}</h1>

                {project.GitHubLink && (
                    <>
                        <BsDot className="ml-2 h-6 w-6" />
                        <a href={project.GitHubLink} target="_blank" className=" hover:text-slate-500 hover:dark:text-slate-300">
                            <BsGithub className="mx-2 h-5 w-5" />
                        </a>
                    </>
                )}
                {project.DemoLink && (
                    <>
                        <BsDot className="ml-2 h-6 w-6 dark:text-white" />
                        <a href={project.DemoLink} target="_blank" className="flex flex-row items-center hover:text-sky-500 hover:dark:text-amber-300">
                            <BsArrowUpRightSquare className=" mx-2 h-5  w-5" />
                            <p className="text-md font-robotoMono">View Demo</p>
                        </a>
                    </>
                )}
            </div>
            <div className="text-sm dark:text-white">
                <p>{project.Description}</p>
            </div>
            <div className="mt-5 flex flex-row items-center dark:text-white">
                {project.Tags.map((tag) => (
                    <div key={tag} className="mr-2 h-8 w-24 rounded-e-full rounded-s-full border-2 border-sky-500 dark:border-amber-200 dark:bg-slate-900">
                        <p className="text-center text-xs leading-6 ">{tag}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectListItem;
