import React from 'react';
import PageOutline from '../components/PageOutline';
import redBg from '../images/red-bg.png';
import redPlanet from '../images/red-planet.png';
import colors from '../util/colors';

const ContactPage = ({ changePage, activePage }) => {
    return (
        <PageOutline
            bgImg={redBg}
            contentBgColor={colors.redOne}
            title="Projects"
            titlePlanet={redPlanet}
            changePage={changePage}
            activePage={activePage}
        ></PageOutline>
    );
};

export default ContactPage;
