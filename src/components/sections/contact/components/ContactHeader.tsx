import * as React from 'react';

interface IContactHeaderProps {}

const ContactHeader = () => {
    return (
        <div id="Contact" className="flex h-fit flex-row items-center overflow-hidden rounded-xl">
            <h1 className="ml-16 mr-8 font-rubik text-5xl dark:text-gray-200">Get In Touch</h1>
            <hr className=" w-72  dark:text-sky-200" />
        </div>
    );
};

export default ContactHeader;
