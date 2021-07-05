import React from 'react';
import PageOutline from '../components/PageOutline';
import AboutGreeting from '../components/AboutGreeting';
import AboutMeBio from '../components/AboutMeBio';
import blueBg from '../images/blue-bg.png';
import bluePlanet from '../images/blue-planet.png';
import colors from '../util/colors';

const pageContent = (
    <>
        <AboutGreeting></AboutGreeting>
        <AboutMeBio></AboutMeBio>
    </>
);

const AboutPage = ({ changePage, activePage }) => {
    return (
        <PageOutline
            bgImg={blueBg}
            contentBgColor={colors.blueOne}
            title="About Me"
            titlePlanet={bluePlanet}
            content={pageContent}
            changePage={changePage}
            activePage={activePage}
        ></PageOutline>
    );
};

export default AboutPage;
