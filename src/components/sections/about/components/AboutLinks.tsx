import { BsDot, BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';

interface IAboutLinksProps {}

const AboutLinks: React.FunctionComponent<IAboutLinksProps> = (props) => {
    return (
        <div className="my-5 ml-16 flex w-fit flex-row justify-between dark:text-white">
            <a href="https://github.com/JamieKennedy" target="_blank" className=" hover:text-slate-500 hover:dark:text-slate-300">
                <BsGithub className="mx-2 h-6 w-6" />
            </a>
            <BsDot className="dark:text-whte h-6 w-6" />
            <a href="https://www.linkedin.com/in/jamiekennedy98/" target="_blank" className=" hover:text-linkedInBlue">
                <BsLinkedin className="mx-2 h-6 w-6" />
            </a>
            {/* <BsDot className="h-6 w-6 dark:text-white" />
            <a href="" target="_blank" className="flex flex-row  hover:text-sky-500 hover:dark:text-amber-300">
                <BsDownload className=" mx-2 h-6  w-6" />
                <p className="font-robotoMono  ">Download my CV</p>
            </a> */}
        </div>
    );
};

export default AboutLinks;
