import { keyframes } from 'styled-components';

const TranslateAndBack = (x, y) => keyframes`
    0%{
        transform: translate(0, 0);
    }
    50% {
        transform: translate(${x}px, ${y}px);
    }
`;

export default TranslateAndBack;
