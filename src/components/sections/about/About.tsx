import TransitionElement from '../../ui/TransitionElement';
import AboutBody from './components/AboutBody';
import AboutHeader from './components/AboutHeader';
import AboutLinks from './components/AboutLinks';

const About = () => {
    return (
        <TransitionElement className={'w-full'} classBase="fadeleft" duration={500} delay={600}>
            <AboutHeader />
            <AboutLinks />
            <AboutBody />
        </TransitionElement>
    );
};

export default About;
