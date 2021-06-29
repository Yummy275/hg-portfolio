import styled from 'styled-components';

const PageBackground = styled.div`
    background-image: url(${(props) => props.bg});
    background-position: center;
    background-size: 100% 100%;
    min-height: 100vh;
`;

export default PageBackground;
