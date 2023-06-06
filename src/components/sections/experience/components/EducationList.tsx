import * as React from 'react';

import { BsArrowRightShort, BsDot } from 'react-icons/bs';
import DetailedList, { IListItem } from './DetailedList';

import IconListItem from '../../../ui/IconListItem';

const arrowIcon = (
    <div className="mr-2 self-start">
        <BsArrowRightShort className=" w-6 text-xl text-indigo-400" />
    </div>
);

const testData: IListItem[] = [
    {
        label: 'University',
        title: 'University of Liverpool',
        dateFrom: new Date(2017, 8),
        dateTo: new Date(2020, 6),
        subTitle: 'BSc. Computer Science (1st Class)',
        content: (
            <div className="h-fit text-sm">
                <h4 className="mb-2 underline">Notable Modules</h4>
                <ul>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        Software Engineering I && II
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        Data Structures and Algorithms
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        Computational Game Theory and Mechanism Design
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        Data Science, Mining and Visualisation
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        Artificial Intelligence
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        High Performance Computing
                    </IconListItem>
                </ul>
            </div>
        ),
    },
    {
        label: 'Sixth Form',
        title: 'West Derby Sixth Form',
        dateFrom: new Date(2015, 8),
        dateTo: new Date(2017, 6),
        subTitle: 'A-Levels',
        content: (
            <div className="h-fit text-sm">
                <ul>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        A* - Computer Science
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        A&nbsp; - Maths
                    </IconListItem>
                    <IconListItem icon={arrowIcon} className="mb-2">
                        A&nbsp; - Physics Science
                    </IconListItem>
                </ul>
            </div>
        ),
    },
];

const EducationList: React.FunctionComponent = () => {
    return (
        <div className="flex h-fit flex-col sm:w-full sm:pl-5 md:w-1/2 lg:pl-0">
            <h2 className="mb-8 text-3xl dark:text-white">Education</h2>
            <DetailedList data={testData} />
        </div>
    );
};

export default EducationList;
