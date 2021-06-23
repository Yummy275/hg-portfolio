import React from 'react';
import styled from 'styled-components';
import HomePlanet from './HomePlanet';
import bluePlanet from '../images/blue-planet.png';
import greenPlanet from '../images/green-planet.png';
import redPlanet from '../images/red-planet.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const HomePlanetsHolder = () => {
    return (
        <Container>
            <HomePlanet
                planetImg={bluePlanet}
                planetTitle="About Me"
            ></HomePlanet>
            <HomePlanet
                planetImg={greenPlanet}
                planetTitle="Projects"
            ></HomePlanet>
            <HomePlanet
                planetImg={redPlanet}
                planetTitle="Contact"
            ></HomePlanet>
        </Container>
    );
};

export default HomePlanetsHolder;
