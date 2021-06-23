import React from 'react';
import HomeLetterSpanWrapper from './HomeLetterSpanWrapper';

const hello = HomeLetterSpanWrapper('Hello!');
const im = HomeLetterSpanWrapper("I'm");
const fname = HomeLetterSpanWrapper('Humberto');
const lname = HomeLetterSpanWrapper('Gonzalez.');
const web = HomeLetterSpanWrapper('Web');
const developer = HomeLetterSpanWrapper('Developer.');

const HomeTitle = () => {
    return (
        <h1 style={{ color: 'white' }}>
            {hello}
            {im}
            {fname}
            {lname}
            {web}
            {developer}
        </h1>
    );
};

export default HomeTitle;
