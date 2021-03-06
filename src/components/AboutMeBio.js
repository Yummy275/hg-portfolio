import React from 'react';
import styled from 'styled-components';
import FadeShiftIn from './FadeShiftIn';
import AboutTechIcons from './AboutTechIcons';

const Container = styled.div`
    margin-top: 1rem;
    padding: 2rem;
`;

const Paragraph = styled.p`
    line-height: 1.3;
    color: white;
    margin: 1rem 0 1rem 0;
    animation: ${FadeShiftIn('-20px', '10px')} 0.3s 1.3s ease forwards;
    opacity: 0;
`;

const AboutMeBio = () => {
    return (
        <Container>
            <Paragraph>
                My name is Humberto Gonzalez. I'm a self-taught developer
                looking to get started with a web development career. My initial
                interest in learning how to program came from my childhood dream
                of wanting to make a game. I figured, in order to make a game I
                would need to know how to program.
            </Paragraph>
            <Paragraph>
                I began by reading 'The C# Programming Yellow Book' by Rob
                Miles. This book taught me the fundamentals of programming using
                the C# language. Arrays, objects, loops, functions, parameters,
                and all that fun building blocks stuff. Wanting to learn more I
                chose to look into web development and found an online course
                called The Odin Project. With this curriculm, alongside 'Youtube
                University', I've become proficient in many technologies such
                as:
            </Paragraph>
            <AboutTechIcons></AboutTechIcons>
            <Paragraph>
                Now I wish to take my skills and become a valuable asset to
                you/your organization. Whether you're looking for a website or
                web app from scratch, an update to an existing design, or are
                trying to find your organizations next passionate web developer:
                I'm here and ready for any challenge! I hope we can work
                together to see how I could potentially fit in with you/your
                organizations goals.
            </Paragraph>
        </Container>
    );
};

export default AboutMeBio;
