import React from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import blueBg from '../images/blue-bg.png';
import colors from '../util/colors';

const AboutPage = () => {
    return (
        <PageBackground bg={blueBg}>
            <PageContentBg bgColor={colors.blueOne}></PageContentBg>
        </PageBackground>
    );
};

export default AboutPage;
