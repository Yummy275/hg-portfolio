import styled from 'styled-components';

const PageContentBg = styled.div`
    width: 90%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${(props) => props.bgColor}eb;
    min-height: calc(100vh - 2rem);
`;

export default PageContentBg;
