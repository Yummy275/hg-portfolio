import React from 'react';
import styled, { keyframes } from 'styled-components';
import HomePlanet from './HomePlanet';
import bluePlanet from '../images/blue-planet.png';
import greenPlanet from '../images/green-planet.png';
import redPlanet from '../images/red-planet.png';

const ScaleFadeIn = keyframes`
    0%{
        transform: scale(.3);
        opacity: 0;
    }
    65%{
        transform: scale(1.5);
        opacity: 1;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    animation: ${ScaleFadeIn} 0.5s 0.5s ease-in forwards;
    opacity: 0;

    @media (min-width: 768px) {
        margin-top: 5rem;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const HomePlanetsHolder = ({ hideHomePage, changePageTo }) => {
    const planetClickHandler = (page) => {
        hideHomePage();
        setTimeout(() => changePageTo(page), 500);
    };

    return (
        <Container>
            <HomePlanet
                planetImg={bluePlanet}
                planetTitle="About Me"
                clickHandler={() => planetClickHandler('about')}
            ></HomePlanet>
            <HomePlanet
                planetImg={redPlanet}
                planetTitle="Projects"
                clickHandler={() => planetClickHandler('projects')}
            ></HomePlanet>
            <HomePlanet
                planetImg={greenPlanet}
                planetTitle="Contact"
                clickHandler={() => planetClickHandler('contact')}
            ></HomePlanet>
        </Container>
    );
};

export default HomePlanetsHolder;
