import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScrollingBg from '../components/ScrollingBg';
import HomeTitle from '../components/HomeTitle';
import HomePlanetsHolder from '../components/HomePlanetsHolder';
import ContentHider from '../components/ContentHider';
import spaceBg from '../images/space-bg.png';

const OverflowContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Flex = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    bottom: 5%;
    justify-content: center;
`;

const HomePage = ({ changePageTo }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const hideContent = () => {
        setIsContentVisible(false);
    };

    useEffect(() => {
        setTimeout(() => setIsContentVisible(true), 100);
    }, []);

    return (
        <ContentHider isVisible={isContentVisible}>
            <OverflowContainer>
                <ScrollingBg bg={spaceBg}></ScrollingBg>

                <Flex>
                    <HomeTitle></HomeTitle>
                    <HomePlanetsHolder
                        hideHomePage={hideContent}
                        changePageTo={changePageTo}
                    ></HomePlanetsHolder>
                </Flex>
            </OverflowContainer>
        </ContentHider>
    );
};

export default HomePage;
