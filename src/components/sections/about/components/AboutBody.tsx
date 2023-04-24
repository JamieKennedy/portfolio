import TechStack from './TechStack';

interface IAboutBodyProps {}

const AboutBody: React.FunctionComponent<IAboutBodyProps> = (props) => {
    const getAge = (): string => {
        const dob: Date = new Date(1998, 10, 19);

        const dayDiff = (dob.getTime() - Date.now()) / 1000 / (60 * 60 * 24);
        const daysInYear = 365.25;

        return Math.abs(Math.round(dayDiff / daysInYear)).toLocaleString();
    };

    return (
        <div className="ml-16">
            <p className="w-4/5 font-robotoMono dark:text-white">
                Hi! My name is <span className="text-sky-500 dark:text-amber-200">Jamie</span> and I am a {getAge()} year old, full stack software developer
                based in the north west of England. With 2 years of commercial experience under my belt, I specialize in creating dynamic and responsive web
                applications using the latest technologies, as well as maintaining legacy applications. I'm passionate about creating user-friendly and engaging
                digital experiences that make a real impact.
            </p>
            <TechStack />
        </div>
    );
};

export default AboutBody;
