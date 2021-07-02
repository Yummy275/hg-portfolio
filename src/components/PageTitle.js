import React from 'react';
import styled, { keyframes } from 'styled-components';
import FadeIn from './FadeIn';
import FadeShiftIn from './FadeShiftIn';

const Container = styled.div`
    display: flex;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    opacity: 0;
    animation: ${FadeIn} 0.3s 0.7s linear forwards;
    margin-left: 0.5rem;
`;

const planetRoll = keyframes`
    from{
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`;

const PlanetFadeShiftIn = styled.div`
    animation: ${FadeShiftIn('18rem', '0')} 0.5s 0.5s ease-out forwards;
    opacity: 0;
`;

const PlanetImg = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    margin-right: 0.5rem;
    animation: ${planetRoll} 25s 1.2s linear infinite;
    z-index: 1;
`;

const PageTitle = ({ title, planetImg }) => {
    return (
        <Container>
            <PlanetFadeShiftIn>
                <PlanetImg src={planetImg}></PlanetImg>
            </PlanetFadeShiftIn>
            <Title>{title}</Title>
        </Container>
    );
};

export default PageTitle;
