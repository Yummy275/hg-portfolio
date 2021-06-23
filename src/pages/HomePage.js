import React from 'react';
import styled from 'styled-components';
import ScrollingBg from '../components/ScrollingBg';
import HomeTitle from '../components/HomeTitle';
import spaceBg from '../images/space-bg.png';

const OverflowContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const Flex = styled.div`
    position: absolute;
    display: flex;
    bottom: 50%;
    width: 100%;
    justify-content: center;
`;

const HomePage = () => {
    return (
        <OverflowContainer>
            <ScrollingBg bg={spaceBg}></ScrollingBg>
            <Flex>
                <HomeTitle></HomeTitle>
            </Flex>
        </OverflowContainer>
    );
};

export default HomePage;
