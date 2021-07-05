import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../util/colors';
import FadeShiftIn from './FadeShiftIn';

const Container = styled.div`
    min-width: 14rem;
    width: 85%;
    margin: -1rem auto 3rem auto;
    border-radius: 10px;
    background-color: ${colors.redTwo};

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        height: 22rem;
    }

    @media (min-width: 1280px) {
        height: 24rem;
    }
`;

const ProjectPicOpeningAni = keyframes`
0% {
    -webkit-transform: translateY(-150px) rotateX(-90deg);
            transform: translateY(-150px) rotateX(-90deg);
            opacity: 0;
  }100% {
    -webkit-transform: translateY(0) rotateX(0deg);
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
  }
  
`;

const ProjectPic = styled.img`
    width: 100%;
    min-height: 10rem;
    border-radius: 10px 10px 0 0;
    opacity: 0;
    animation: ${ProjectPicOpeningAni} 0.5s 0.8s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @media (min-width: 1024px) {
        height: 100%;
        border-radius: 10px 0 0 10px;
    }
`;

const LinkWrapper = styled.a`
    display: block;
    position: relative;
    color: white;
    height: 100%;
    width: 100%;
`;

const TextHolder = styled.div`
    color: white;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: initial;
        width: 35%;
    }
`;

const Title = styled.h2`
    margin-bottom: 2rem;
    opacity: 0;
    animation: ${FadeShiftIn('20px', '10px')} 0.3s 1.1s ease-in forwards;
`;

const Info = styled.p`
    opacity: 0;
    margin: 0.5rem 0 0.75rem 0;
    animation: ${FadeShiftIn('20px', '10px')} 0.3s 1.2s ease-in forwards;
`;

const ProjectCard = ({
    picture,
    link,
    repoLink,
    title,
    tech,
    bio,
    imgTxtColor,
}) => {
    return (
        <Container>
            <LinkWrapper href={link} target="_blank">
                <ProjectPic src={picture} alt="project-picture"></ProjectPic>
            </LinkWrapper>
            <TextHolder>
                <Title>{title}</Title>
                <LinkWrapper href={repoLink} target="_blank">
                    <Info>Visit GitHub Repo</Info>
                </LinkWrapper>
                <Info>{`Built with ${tech}`}</Info>
                <Info>{bio}</Info>
            </TextHolder>
        </Container>
    );
};

export default ProjectCard;
