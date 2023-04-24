import * as React from 'react';

interface IAboutHeaderProps {}

const AboutHeader: React.FunctionComponent<IAboutHeaderProps> = (props) => {
    return (
        <div id="About" className=" mt-48 flex h-fit flex-row items-center overflow-hidden rounded-xl">
            <h1 className="ml-16 mr-8  font-rubik text-5xl dark:text-gray-200">About Me</h1>
            <hr className=" w-72  dark:text-sky-200" />
        </div>
    );
};

export default AboutHeader;
