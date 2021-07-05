import React, { useEffect, useState } from 'react';
import PageBackground from '../components/PageBackground';
import PageContentBg from '../components/PageContentBg';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle';
import ContentHider from '../components/ContentHider';

const PageOutline = ({
    bgImg,
    contentBgColor,
    title,
    titlePlanet,
    content,
    changePage,
    activePage,
}) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const hideContent = () => {
        setIsContentVisible(false);
    };

    useEffect(() => {
        setTimeout(() => setIsContentVisible(true), 100);
    }, []);

    const changingPage = (page) => {
        hideContent();
        setTimeout(() => changePage(page), 500);
    };

    return (
        <ContentHider isVisible={isContentVisible}>
            <PageBackground bg={bgImg}>
                <PageContentBg bgColor={contentBgColor}>
                    <Navbar
                        changingPage={changingPage}
                        activePage={activePage}
                    ></Navbar>
                    <PageTitle
                        title={title}
                        planetImg={titlePlanet}
                    ></PageTitle>
                    {content}
                </PageContentBg>
            </PageBackground>
        </ContentHider>
    );
};

export default PageOutline;
