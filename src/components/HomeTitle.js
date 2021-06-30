import React from 'react';
import styled from 'styled-components';
import HomeLetterSpanWrapper from './HomeLetterSpanWrapper';

const Title = styled.h1`
    color: white;
    text-align: center;
    padding: 1rem;
`;

const WordWrapper = styled.div`
    display: inline-block;
    margin-left: 8px;
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
            <WordWrapper>{hello}</WordWrapper>
            <WordWrapper> {im}</WordWrapper>
            <WordWrapper>{fname}</WordWrapper>
            <WordWrapper>{lname}</WordWrapper>
            <WordWrapper>{web}</WordWrapper>
            <WordWrapper>{developer}</WordWrapper>
        </Title>
    );
};

export default HomeTitle;
