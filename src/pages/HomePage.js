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
    width: 100%;
    position: absolute;
    display: flex;
    bottom: 50%;
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
