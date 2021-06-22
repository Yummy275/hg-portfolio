import React from 'react';
import stringCharsSpanWrapper from '../components/stringCharsSpanWrapper';

const hello = stringCharsSpanWrapper('Hello!');
const im = stringCharsSpanWrapper("I'm");
const firstName = stringCharsSpanWrapper('Humberto');
const lastName = stringCharsSpanWrapper('Gonzalez.');
const web = stringCharsSpanWrapper('Web');
const developer = stringCharsSpanWrapper('Developer.');

const HomeTitle = () => {
    return (
        <h1 style={{ color: 'white', textAlign: 'center', width: '100%' }}>
            {hello}
            {im}
            {firstName}
            {lastName}
            {web}
            {developer}
        </h1>
    );
};

export default HomeTitle;
