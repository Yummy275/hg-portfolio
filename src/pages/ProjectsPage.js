import React from 'react';
import styled from 'styled-components';
import PageOutline from '../components/PageOutline';
import ProjectCard from '../components/ProjectCard';
import redBg from '../images/red-bg.png';
import redPlanet from '../images/red-planet.png';
import falcosImg from '../images/falcos-home.png';
import coinWatcherImg from '../images/coin-watcher.png';
import colors from '../util/colors';

const ProjectsContainer = styled.div`
    padding: 2rem;
`;

const content = (
    <ProjectsContainer>
        <ProjectCard
            picture={falcosImg}
            title="Falco's"
            link="https://yummy275.github.io/falcos-pies/"
            repoLink="https://github.com/Yummy275/falcos-pies"
            tech="React and Styled Components"
            bio="A simple mock restaurant site. Clean and smooth design."
        ></ProjectCard>
        <ProjectCard
            picture={coinWatcherImg}
            title="Coin Watcher"
            link="https://yummy275.github.io/coin-watcher/"
            repoLink="https://github.com/Yummy275/coin-watcher"
            tech="React and Tailwind"
            bio="Crypto portfolio tracker. Add crypto currency and hold amounts to see current value. Gets data from API."
        ></ProjectCard>
    </ProjectsContainer>
);

const ContactPage = ({ changePage, activePage }) => {
    return (
        <PageOutline
            bgImg={redBg}
            contentBgColor={colors.redOne}
            title="Projects"
            titlePlanet={redPlanet}
            changePage={changePage}
            activePage={activePage}
            content={content}
        ></PageOutline>
    );
};

export default ContactPage;
