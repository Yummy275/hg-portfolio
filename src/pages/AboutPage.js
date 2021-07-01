import React, { useEffect, useState } from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import PageTitle from '../components/PageTitle';
import blueBg from '../images/blue-bg.png';
import bluePlanet from '../images/blue-planet.png';
import ContentHider from '../components/ContentHider';
import colors from '../util/colors';

const AboutPage = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const hideContent = () => {
        setIsContentVisible(false);
    };

    useEffect(() => {
        setTimeout(() => setIsContentVisible(true), 100);
    }, []);

    return (
        <ContentHider isVisible={isContentVisible}>
            <PageBackground bg={blueBg}>
                <PageContentBg bgColor={colors.blueOne}>
                    <PageTitle
                        title="About Me"
                        planetImg={bluePlanet}
                    ></PageTitle>
                </PageContentBg>
            </PageBackground>
        </ContentHider>
    );
};

export default AboutPage;
