import React from 'react';
import styled from 'styled-components';
import colors from '../util/colors';

const Container = styled.div`
    height: 3.3rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #80808033;
`;

const NavOption = styled.span`
    cursor: pointer;
    pointer-events: ${(props) =>
        props.activePage === props.navPage ? 'none' : 'auto'};
    color: ${(props) =>
        props.activePage === props.navPage ? props.activeColor : 'white'};
    font-size: 1rem;
    margin: 0 0.5rem;
    transition: transform 0.3s ease;

    :hover {
        transform: scale(1.2);
    }
`;

const Navbar = ({ changingPage, activePage }) => {
    return (
        <Container>
            <NavOption onClick={() => changingPage('home')} navPage="home">
                Home
            </NavOption>
            <NavOption
                onClick={() => changingPage('about')}
                activePage={activePage}
                navPage="about"
                activeColor={colors.blueThr}
            >
                About
            </NavOption>
            <NavOption
                onClick={() => changingPage('projects')}
                activePage={activePage}
                navPage="projects"
                activeColor={colors.redThr}
            >
                Projects
            </NavOption>
            <NavOption
                onClick={() => changingPage('contact')}
                activePage={activePage}
                navPage="contact"
                activeColor={colors.greenThr}
            >
                Contact
            </NavOption>
        </Container>
    );
};

export default Navbar;
