import React from 'react';
import PageOutline from '../components/PageOutline';
import greenBg from '../images/green-bg.png';
import greenPlanet from '../images/green-planet.png';
import colors from '../util/colors';

const ContactPage = () => {
    return (
        <PageOutline
            bgImg={greenBg}
            contentBgColor={colors.greenOne}
            title="Contact"
            titlePlanet={greenPlanet}
        ></PageOutline>
    );
};

export default ContactPage;
