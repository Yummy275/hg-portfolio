import React from 'react';
import styled from 'styled-components';
import ScrollingBg from '../components/ScrollingBg';
import spaceBg from '../images/space-bg.png';

const OverflowContainer = styled.div`
    height: 100vh;
    overflow: hidden;
`;

const HomePage = () => {
    return (
        <OverflowContainer>
            <ScrollingBg bg={spaceBg}>
                <div>Hello</div>
            </ScrollingBg>
        </OverflowContainer>
    );
};

export default HomePage;
