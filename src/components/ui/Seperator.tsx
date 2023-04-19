import * as React from 'react';

interface ISeperatorProps {
    heightString?: string;
    widthString?: string;
}

const Seperator = ({ heightString, widthString }: ISeperatorProps) => {
    return (
        <div
            className={`w-1 ${heightString ?? 'h-1/2'} ${
                widthString ?? 'w-[1px]'
            } bg-black dark:bg-white`}
        ></div>
    );
};

export default Seperator;
