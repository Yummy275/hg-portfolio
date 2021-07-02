import React from 'react';
import styled from 'styled-components';
import TechIcon from './AboutTechIcon';
import techIcons from '../util/aboutTechIcons';

const IconsContainer = styled.div`
    width: 90%;
    margin: 1rem auto 2rem auto;
    max-width: 47rem;
    display: flex;
    flex-wrap: wrap;
    align-items: space-evenly;
    justify-content: center;
`;

const icons = [];
Object.values(techIcons).forEach((techIcon) =>
    icons.push(
        <TechIcon
            key={techIcon.name}
            name={techIcon.name}
            icon={techIcon.icon}
        ></TechIcon>
    )
);

const AboutTechInfo = () => {
    return <IconsContainer>{icons}</IconsContainer>;
};

export default AboutTechInfo;
