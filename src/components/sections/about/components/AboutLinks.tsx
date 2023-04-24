import { BsDot, BsDownload, BsGithub, BsLinkedin } from 'react-icons/bs';

interface IAboutLinksProps {}

const AboutLinks: React.FunctionComponent<IAboutLinksProps> = (props) => {
    return (
        <div className="my-5 ml-16 flex w-80 flex-row justify-between dark:text-white">
            <a href="https://github.com/JamieKennedy" target="_blank">
                <BsGithub className="mx-2 h-6 w-6 transition-transform duration-200 ease-in-out hover:scale-125 " />
            </a>
            <BsDot className="dark:text-whte h-6 w-6" />
            <a href="https://www.linkedin.com/in/jamiekennedy98/" target="_blank">
                <BsLinkedin className="mx-2 h-6 w-6  transition-transform  duration-200 ease-in-out hover:scale-125   " />
            </a>
            <BsDot className="h-6 w-6 dark:text-white" />
            <a href="" target="_blank" className="flex flex-row  ">
                <BsDownload className=" mx-2 h-6  w-6 transition-transform duration-200 ease-in-out hover:scale-125" />
                <p className="font-robotoMono  ">Download my CV</p>
            </a>
        </div>
    );
};

export default AboutLinks;
