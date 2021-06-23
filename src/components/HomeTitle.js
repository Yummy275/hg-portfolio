import React from 'react';
import styled from 'styled-components';
import HomeLetterSpanWrapper from './HomeLetterSpanWrapper';

const Title = styled.h1`
    color: white;
`;

const hello = HomeLetterSpanWrapper('Hello!');
const im = HomeLetterSpanWrapper("I'm");
const fname = HomeLetterSpanWrapper('Humberto');
const lname = HomeLetterSpanWrapper('Gonzalez.');
const web = HomeLetterSpanWrapper('Web');
const developer = HomeLetterSpanWrapper('Developer.');

const HomeTitle = () => {
    return (
        <Title>
            {hello}
            {im}
            {fname}
            {lname}
            {web}
            {developer}
        </Title>
    );
};

export default HomeTitle;
