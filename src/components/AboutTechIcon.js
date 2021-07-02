import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const IconContainer = styled.div`
    text-align: center;
    padding: 1rem;
`;

const Icon = styled.img`
    height: 3.2rem;
    width: 3.2rem;
    transition: all 0.3s ease;

    opacity: ${(props) => (props.visible ? '1' : '0')};
    transform: ${(props) =>
        props.visible ? 'scale(1) rotate(0)' : 'scale(.1) rotate(-360deg)'};
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
    transition: all 0.3s ease;
    color: white;
    font-style: italic;
    opacity: ${(props) => (props.visible ? '1' : '0')};
`;

const AboutTechIcon = ({ name, icon }) => {
    const [iconDiv, inView] = useInView({
        threshold: 0.8,
    });

    return (
        <IconContainer ref={iconDiv}>
            <Icon src={icon} alt={name} visible={inView}></Icon>
            <IconName visible={inView}>{name}</IconName>
        </IconContainer>
    );
};

export default AboutTechIcon;
