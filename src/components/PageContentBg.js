import styled from 'styled-components';

const PageContentBg = styled.div`
    width: 90%;
    max-width: 70rem;
    margin: 0 auto;
    background-color: ${(props) => props.bgColor}eb;
    min-height: 100vh;
`;

export default PageContentBg;
