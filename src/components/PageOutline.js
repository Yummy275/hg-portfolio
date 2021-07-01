import React, { useEffect, useState } from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import PageTitle from '../components/PageTitle';
import ContentHider from '../components/ContentHider';

const PageOutline = ({ bgImg, contentBgColor, title, titlePlanet }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const hideContent = () => {
        setIsContentVisible(false);
    };

    useEffect(() => {
        setTimeout(() => setIsContentVisible(true), 100);
    }, []);

    return (
        <ContentHider isVisible={isContentVisible}>
            <PageBackground bg={bgImg}>
                <PageContentBg bgColor={contentBgColor}>
                    <PageTitle
                        title={title}
                        planetImg={titlePlanet}
                    ></PageTitle>
                </PageContentBg>
            </PageBackground>
        </ContentHider>
    );
};

export default PageOutline;
