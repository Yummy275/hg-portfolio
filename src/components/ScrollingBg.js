import styled, { keyframes } from 'styled-components';

const BackgroundScroll = keyframes`
    0%{
        transform: translate(0%, 0%);
    }
    100%{
        transform: translate(-20%, -20% );
    }
`;

const ScrollingBg = styled.div`
    z-index: 0;
    height: 500%;
    width: 500%;
    background-image: url(${(props) => props.bg});
    background-repeat: repeat;
    animation: ${BackgroundScroll} 80s ease alternate infinite;
`;

export default ScrollingBg;
