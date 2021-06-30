import React from 'react';
import HomeLetter from './HomeLetter';

const HomeLetterSpanWrapper = (string) => {
    const splitString = string.split('');
    const letterArray = splitString.map((letter, index) => {
        return <HomeLetter key={index} char={letter}></HomeLetter>;
    });
    return letterArray;
};

export default HomeLetterSpanWrapper;
