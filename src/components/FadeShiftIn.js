import { keyframes } from 'styled-components';

const FadeShiftIn = (startX, startY) => keyframes`
    from {
        opacity: 0;
        transform: translate(${startX}, ${startY});
    }
    to {
        opacity: 1;
        transform: translate: (0);
    }
`;

export default FadeShiftIn;
