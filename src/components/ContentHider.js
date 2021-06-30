import styled from 'styled-components';

const ContentHider = styled.div`
    transition: opacity 0.5s ease-in;
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
`;

export default ContentHider;
