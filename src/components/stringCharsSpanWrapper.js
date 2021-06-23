import React from 'react';
import HomeLetterHover from './animations/HomeLetterHover';

//takes in a string and returns <span></span> around each letter and a empty space at the end.
const stringCharsSpanWrapper = (string) => {
    const stringChars = string.split('');
    const spanWrappedChars = stringChars.map((char, index) => {
        return <HomeLetterHover key={index}>{char}</HomeLetterHover>;
    });
    spanWrappedChars.push(' ');
    console.log(spanWrappedChars);
    return spanWrappedChars;
};

export default stringCharsSpanWrapper;
