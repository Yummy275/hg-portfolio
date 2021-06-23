import React from 'react';
import styled from 'styled-components';
import ScrollingBg from '../components/ScrollingBg';
import HomeTitle from '../components/HomeTitle';
import HomePlanetsHolder from '../components/HomePlanetsHolder';
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

const HomePage = () => {
    return (
        <OverflowContainer>
            <ScrollingBg bg={spaceBg}></ScrollingBg>
            <Flex>
                <HomeTitle></HomeTitle>
                <HomePlanetsHolder></HomePlanetsHolder>
            </Flex>
        </OverflowContainer>
    );
};

export default HomePage;
