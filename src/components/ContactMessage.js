import React from 'react';
import styled from 'styled-components';
import FadeShiftIn from './FadeShiftIn';
import FadeIn from './FadeIn';
import astroGif from '../images/astroWave.gif';

const Container = styled.div`
    text-align: center;
    margin-top: 5rem;
    color: white;
`;

const Title = styled.div`
    font-size: 2rem;
    @media (min-width: 768px) {
        font-size: 3rem;
    }
    font-style: italic;
    opacity: 0;
    animation: ${FadeShiftIn('-50px', '0')} 0.3s 1s ease-in forwards;
`;

const Info = styled.p`
    margin-top: 1.5rem;
    opacity: 0;
    animation: ${FadeShiftIn('50px', '0')} 0.3s 1.2s ease-in forwards;
`;

const Gif = styled.img`
    padding: 2rem;
    width: 80%;
    max-width: 20rem;
    opacity: 0;
    animation: ${FadeIn} 0.3s 1.5s ease-in forwards;
`;

const ContactMessage = () => {
    return (
        <Container>
            <Title>Thank you for visiting!</Title>
            <Info>
                Contact me about anything! I'll typically respond within a day.
            </Info>
            <Gif src={astroGif} alt="waving-astronaut-gif"></Gif>
        </Container>
    );
};

export default ContactMessage;
