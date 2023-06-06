import * as React from 'react';

import DetailedList, { IListItem } from './DetailedList';

import { BsArrowRightShort } from 'react-icons/bs';
import IconListItem from '../../../ui/IconListItem';

const arrowIcon = (
    <div className="mr-2 self-start">
        <BsArrowRightShort className=" h-5  w-5 text-xl text-indigo-400" />
    </div>
);

const testData: IListItem[] = [
    {
        label: 'Stopford',
        title: 'Stopford Information Systems',
        dateFrom: new Date(2021, 2),
        subTitle: 'Full Stack Software Developer',
        content: (
            <div className="text-sm">
                <h5>
                    Stopford Information Systems develops online booking and diary management solutions for the public sector and provides solutions for over
                    100 councils across the UK
                </h5>
                <h6 className="mt-2 underline">Key Responsibilities</h6>
                <ul>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Maintained legacy .NET applications
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Developed RESTful API's using .NET Core
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Created large scale single page applications written in JavaScript and TypeScript
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Developed cross-platform mobile apps using Flutter and Dart
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Designed complex relational database schemas and queries with SQL Server
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Participated in planning and executing agile development sprints
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Worked closely with clients in workshops to provide optimal software solutions
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mt-2">
                        Architected modern solutions to improve and refine reliability, performance and security in our software
                    </IconListItem>
                </ul>
            </div>
        ),
    },
];

const WorkList: React.FunctionComponent = () => {
    return (
        <div className="flex h-fit flex-col sm:mt-40 sm:w-full sm:pl-5 md:mt-0 md:w-1/2 lg:pl-0 ">
            <h2 className="mb-8 text-3xl dark:text-white">Work</h2>
            <DetailedList data={testData} />
        </div>
    );
};

export default WorkList;
