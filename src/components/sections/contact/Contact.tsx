import * as React from 'react';

import TransitionElement from '../../ui/TransitionElement';
import ContactBody from './components/ContactBody';
import ContactHeader from './components/ContactHeader';

interface IContactProps {}

const Contact: React.FunctionComponent = () => {
    return (
        <TransitionElement className={'w-full'} classBase="fadeleft" duration={500}>
            <ContactHeader />
            <ContactBody />
        </TransitionElement>
    );
};

export default Contact;
