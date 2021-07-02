import React from 'react';
import styled, { keyframes } from 'styled-components';
import techIcons from '../util/aboutTechIcons';

const IconsContainer = styled.div`
    width: 90%;
    max-width: 540px;
    display: flex;
    flex-wrap: wrap;
    align-items: space-evenly;
    justify-content: center;
`;

const IconContainer = styled.div`
    text-align: center;
`;

const Icon = styled.img`
    height: 3.2rem;
    width: 3.2rem;
    margin: 0.5rem;

    @media (min-width: 640px) {
        height: 4rem;
        width: 4rem;
        margin: 1rem;
    }
    @media (min-width: 1024px) {
        height: 4.5rem;
        width: 4.5rem;
    }
    :hover {
        transform: scale(1.2);
    }
`;

const IconName = styled.p`
    color: white;
    margin-top: 0.5rem;
`;

const icons = [];
Object.values(techIcons).forEach((techIcon) =>
    icons.push(
        <IconContainer key={techIcon.name}>
            <Icon src={techIcon.icon} alt={techIcon.name}></Icon>
            <IconName>{techIcon.name}</IconName>
        </IconContainer>
    )
);

const AboutTechInfo = () => {
    return <IconsContainer>{icons}</IconsContainer>;
};

export default AboutTechInfo;
