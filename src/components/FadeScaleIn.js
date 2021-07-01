import { keyframes } from 'styled-components';

const FadeScaleIn = keyframes`
    0%{
        opacity: 0;
        transform: scale(.1);
    }

    75%{
        opacity: 1;
        transform: scale(1.5);
    }

    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

export default FadeScaleIn;
