import React from 'react';
import styled from 'styled-components';
import headshot from '../images/headshot.jpg';
import colors from '../util/colors';

const Container = styled.div`
    background-color: ${colors.blueTwo};
    width: 90%;
    margin: 0 auto;
    max-width: 24rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (min-width: 768px) {
        display: flex;
        max-width: 45rem;
    }
`;

const Headshot = styled.img`
    width: 100%;
    @media (min-width: 768px) {
        width: 16rem;
    }

    @media (min-width: 1024px) {
        width: 18rem;
    }

    @media (min-width: 1280px) {
        width: 20rem;
    }
`;

const GreetingContainer = styled.div`
    padding: 1rem;
    text-align: center;

    @media (min-width: 768px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Greeting = styled.h2`
    color: white;
`;

const AboutGreeting = () => {
    return (
        <Container>
            <Headshot src={headshot} alt="headshot"></Headshot>
            <GreetingContainer>
                <Greeting>It's a pleasure to meet you!</Greeting>
            </GreetingContainer>
        </Container>
    );
};

export default AboutGreeting;
