import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    text-align: center;
    padding: 1rem;
`;

const Icon = styled.img`
    height: 3.2rem;
    width: 3.2rem;

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
    font-style: italic;
`;

const AboutTechIcon = ({ name, icon }) => {
    return (
        <IconContainer>
            <Icon src={icon} alt={name}></Icon>
            <IconName>{name}</IconName>
        </IconContainer>
    );
};

export default AboutTechIcon;
