import React from 'react';
import PageOutline from '../components/PageOutline';
import ContactInfo from '../components/ContactInfo';
import ContactMessage from '../components/ContactMessage';
import greenBg from '../images/green-bg.png';
import greenPlanet from '../images/green-planet.png';
import colors from '../util/colors';

const content = (
    <>
        <ContactInfo></ContactInfo>
        <ContactMessage></ContactMessage>
    </>
);

const ContactPage = ({ changePage, activePage }) => {
    return (
        <PageOutline
            bgImg={greenBg}
            contentBgColor={colors.greenOne}
            title="Contact"
            titlePlanet={greenPlanet}
            changePage={changePage}
            activePage={activePage}
            content={content}
        ></PageOutline>
    );
};

export default ContactPage;
