import { ReactNode, useEffect, useState } from 'react';

import moment from 'moment';

export interface IListItem {
    label: string;
    title: string;
    dateFrom: Date;
    dateTo?: Date;
    subTitle: string;
    content: ReactNode;
}

interface IDetailedListProps {
    data: IListItem[];
    className?: string;
}

const DetailedList: React.FunctionComponent<IDetailedListProps> = ({ data, className }) => {
    const [index, setIndex] = useState(0);

    const labels = data.map((item, i) => {
        return (
            <div key={i} className="h-10 w-full cursor-pointer border-r-2 border-white" onClick={() => setIndex(i)}>
                <h4 className="px-2 font-robotoMono text-sm leading-10 dark:text-white">{item.label}</h4>
            </div>
        );
    });

    const getDate = (date?: Date): string => {
        if (!date) {
            return 'present';
        }

        const dateMoment = moment(date);

        return dateMoment.format('MMMM, YYYY');
    };

    if (data.length === 0) {
        return <></>;
    }
    return (
        <div className={`flex w-full flex-row justify-start ${className ?? ''}`}>
            <div className=" relative w-2/6 ">
                <div
                    className="pointer-events-none absolute h-10 w-full border-r-8 bg-white/5 transition-transform duration-200 ease-in-out"
                    style={{ transform: `translateY(${index * 100}%)` }}
                ></div>
                {labels}
            </div>

            <div className="flex min-h-max w-4/5 flex-grow flex-col space-y-2 px-4 font-robotoMono dark:text-white">
                <h3 className=" text-lg ">{data[index].title}</h3>
                <p className="text-sm ">{data[index].subTitle}</p>
                <p className="text-sm italic text-sky-500 dark:text-amber-200">
                    {getDate(data[index].dateFrom)} - {getDate(data[index].dateTo)}
                </p>
                {data[index].content}
            </div>
        </div>
    );
};

export default DetailedList;
