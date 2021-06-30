import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const LetterHover = keyframes`
  0%{
      transform: translate(0) rotateY(0);
  }

  50% {
      transform : translateY(35px) rotateY(230deg)
  }

  100% {
    transform: translate(0) rotateY(0);
  }
`;

const HoverAnimationCSS = css`
  animation ${LetterHover} .45s; 
`;

const LetterWrapper = styled.span`
    display: inline-block;
    ${(props) => (props.playAnimation ? HoverAnimationCSS : '')};
`;

const HomeLetter = ({ char }) => {
    const [playAnimation, setPlayAnimation] = useState(false);

    const playAni = () => {
        setPlayAnimation(true);
    };

    const stopAni = () => {
        setPlayAnimation(false);
    };

    return (
        <LetterWrapper
            onMouseEnter={() => playAni()}
            onAnimationEnd={() => stopAni()}
            playAnimation={playAnimation}
        >
            {char}
        </LetterWrapper>
    );
};

export default HomeLetter;
