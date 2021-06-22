import styled from 'styled-components';
import HomeLetterHover from './animations/HomeLetterHover';

const LetterSpan = styled.span`
    display: inline-block;
`;

//takes in a string and returns <span></span> around each letter and a empty space at the end.
const stringCharsSpanWrapper = (string) => {
    const stringChars = string.split('');
    const spanWrappedChars = stringChars.map((char, index) => {
        return (
            <HomeLetterHover key={index}>
                <LetterSpan>{char}</LetterSpan>
            </HomeLetterHover>
        );
    });
    spanWrappedChars.push(' ');
    return spanWrappedChars;
};

export default stringCharsSpanWrapper;
