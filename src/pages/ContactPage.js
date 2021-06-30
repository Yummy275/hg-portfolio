import React from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import greenBg from '../images/green-bg.png';
import colors from '../util/colors';

const AboutPage = () => {
    return (
        <PageBackground bg={greenBg}>
            <PageContentBg bgColor={colors.greenOne}></PageContentBg>
        </PageBackground>
    );
};

export default AboutPage;
