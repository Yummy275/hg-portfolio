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
    color: ${(props) =>
        props.activePage === props.navPage ? props.activeColor : 'white'};
    font-size: 1.1rem;
    margin: 0 0.5rem;
`;

const Navbar = ({ changePage, activePage }) => {
    return (
        <Container>
            <NavOption onClick={() => changePage('home')} navPage="home">
                Home
            </NavOption>
            <NavOption
                onClick={() => changePage('about')}
                activePage={activePage}
                navPage="about"
                activeColor={colors.blueThr}
            >
                About
            </NavOption>
            <NavOption
                onClick={() => changePage('projects')}
                activePage={activePage}
                navPage="projects"
                activeColor={colors.redThr}
            >
                Projects
            </NavOption>
            <NavOption
                onClick={() => changePage('contact')}
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
