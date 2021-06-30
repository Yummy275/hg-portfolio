import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        flex-direction: column;
    }
`;

const PlanetHover = keyframes`
    0%{
        transform: rotate(0);
    }
    25%{
        transform: rotate(-30deg);
    }
    60%{
        transform: rotate(30deg);
    }
    100%{
        transform: rotate(0);
    }
`;

const PlanetScaleContainer = styled.div`
    transition: 0.3s ease-in;
    transform: scale(${(props) => (props.isBig ? '6' : '1')});
    z-index: ${(props) => (props.isBig ? '1' : 'initial')};
`;

const PlanetImg = styled.input`
    width: 4.5rem;
    height: 4.5rem;
    @media (min-width: 768px) {
        width: 7rem;
        height: 7rem;
    }
    @media (min-width: 1024px) {
        width: 10rem;
        height: 10rem;
    }
    @media (min-width: 1280px) {
        width: 13rem;
        height: 13rem;
    }
    :hover {
        cursor: pointer;
        animation: ${PlanetHover} 2.5s ease infinite;
    }
`;

const PlanetTitle = styled.h2`
    color: white;
    margin-left: 0.5rem;
    @media (min-width: 768px) {
        margin: 0.5rem 0 0 0;
    }
`;

const HomePlanet = ({ planetImg, planetTitle }) => {
    const [planetGrowBig, setPlanetGrowBig] = useState(false);

    const planetClick = () => {
        setPlanetGrowBig(true);
    };

    return (
        <Container onClick={() => planetClick()}>
            <PlanetScaleContainer isBig={planetGrowBig}>
                <PlanetImg
                    type="image"
                    src={planetImg}
                    alt="planet-img"
                ></PlanetImg>
            </PlanetScaleContainer>
            <PlanetTitle>{planetTitle}</PlanetTitle>
        </Container>
    );
};

export default HomePlanet;
