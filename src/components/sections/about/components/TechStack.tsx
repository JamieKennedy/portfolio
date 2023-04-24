import * as React from 'react';

import { BsArrowRightShort } from 'react-icons/bs';
import IconListItem from '../../../ui/IconListItem';

const frontend: string[] = ['React', 'TypeScript', 'Tailwind', 'Flutter', 'WebForms'];
const backend: string[] = ['C#', 'VB.Net', 'ASP.Net Core', 'ASP.Net Core Web API', 'ASP.Net Framework', 'Dapper', 'EntityFramework Core'];
const db: string[] = ['MS SQL Server'];
const tools: string[] = ['Git', 'Azure DevOps'];
const other: string[] = ['Python', 'Dart'];

const TechStack: React.FunctionComponent = () => {
    const listIcon = (
        <div className="mr-2 h-9 w-6 self-start">
            <BsArrowRightShort className="mr-2 h-9 w-6 text-xl text-indigo-400" />
        </div>
    );

    return (
        <>
            <h3 className="mb-4 mt-8 font-rubik text-2xl dark:text-white">Tech Stack</h3>
            <div className="flex w-full flex-row flex-wrap justify-between font-robotoMono dark:text-white">
                <div className=" mb-8 flex w-56 flex-col ">
                    <p className="text-xl ">Frontend</p>
                    <ul className="leading-9">
                        {frontend.map((item, i) => (
                            <IconListItem key={i} icon={listIcon}>
                                {item}
                            </IconListItem>
                        ))}
                    </ul>
                </div>
                <div className="mb-8 flex w-56 flex-col ">
                    <p className="text-xl ">Backend</p>
                    <ul className="leading-9">
                        {backend.map((item, i) => (
                            <IconListItem key={i} icon={listIcon}>
                                {item}
                            </IconListItem>
                        ))}
                    </ul>
                </div>
                <div className="mb-8 flex w-56 flex-col ">
                    <p className="text-xl ">Database</p>
                    <ul className="">
                        {db.map((item, i) => (
                            <IconListItem key={i} icon={listIcon}>
                                {item}
                            </IconListItem>
                        ))}
                    </ul>
                </div>
                <div className="mb-8 flex w-56 flex-col ">
                    <p className="text-xl ">Tools</p>
                    <ul className="leading-9">
                        {tools.map((item, i) => (
                            <IconListItem key={i} icon={listIcon}>
                                {item}
                            </IconListItem>
                        ))}
                    </ul>
                </div>
                <div className="mb-8 flex w-56 flex-col ">
                    <p className="text-xl ">Other</p>
                    <ul className="leading-9">
                        {other.map((item, i) => (
                            <IconListItem key={i} icon={listIcon}>
                                {item}
                            </IconListItem>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TechStack;
