import React from 'react';
import PageOutline from '../components/PageOutline';
import blueBg from '../images/blue-bg.png';
import bluePlanet from '../images/blue-planet.png';
import colors from '../util/colors';

const AboutPage = () => {
    return (
        <PageOutline
            bgImg={blueBg}
            contentBgColor={colors.blueOne}
            title="About Me"
            titlePlanet={bluePlanet}
        ></PageOutline>
    );
};

export default AboutPage;
