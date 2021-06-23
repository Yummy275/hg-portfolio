import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TranslateAndBack from './TranslateAndBack';

const AnimationCSS = css`
    animation: ${TranslateAndBack(0, -30)} 0.3s;
`;

const HomeLetterHoverAnimation = styled.span`
    display: inline-block;
    ${(props) => (props.playingAnimation ? AnimationCSS : '')}
`;

const HomeLetterHover = () => {
    const [playAnimation, setPlayAnimation] = useState(false);

    const playAniStateUpdater = () => {
        setPlayAnimation(true);
        setTimeout(() => setPlayAnimation(false), 4000);
    };

    return (
        <HomeLetterHoverAnimation
            playingAnimation={playAnimation}
            onMouseEnter={() => playAniStateUpdater()}
        ></HomeLetterHoverAnimation>
    );
};

export default HomeLetterHover;
