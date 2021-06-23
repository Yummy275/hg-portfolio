import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.span`
    display: inline-block;
`;

const HomeLetterSpanWrapper = (string) => {
    const splitString = string.split('');
    const letterArray = splitString.map((letter) => {
        return <LetterWrapper>{letter}</LetterWrapper>;
    });
    letterArray.push(' ');
    return letterArray;
};

export default HomeLetterSpanWrapper;
