import React from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import redBg from '../images/red-bg.png';
import colors from '../util/colors';

const AboutPage = () => {
    return (
        <PageBackground bg={redBg}>
            <PageContentBg bgColor={colors.redOne}></PageContentBg>
        </PageBackground>
    );
};

export default AboutPage;
