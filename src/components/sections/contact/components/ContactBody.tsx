import * as React from 'react';

import { BsDot, BsEnvelopeAt, BsLinkedin } from 'react-icons/bs';

interface IContactBodyProps {}

const ContactBody = () => {
    return (
        <div className="mt-10 flex flex-col items-center">
            <h1></h1>
            <p className="w-1/2 text-center font-robotoMono text-xl dark:text-white">
                Although I am currently not looking for new opportunities. My inbox is always open.
            </p>
            <div className="mt-10 flex flex-row items-center dark:text-white">
                <a href="https://www.linkedin.com/in/jamiekennedy98/" target="_blank" className=" hover:text-linkedInBlue">
                    <BsLinkedin className="mx-2 h-10 w-10" />
                </a>
                <BsDot className="mx-5 h-6 w-6 dark:text-white" />
                <a href="mailto:jamiekennedy97@gmail.com" target="_blank" className="flex flex-row  hover:text-sky-500 hover:dark:text-amber-300">
                    <BsEnvelopeAt className=" mx-2 h-10  w-10" />
                </a>
            </div>
        </div>
    );
};

export default ContactBody;
