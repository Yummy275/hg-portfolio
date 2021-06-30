import styled from 'styled-components';

const PageContentBg = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    max-width: 80rem;
    background-color: ${(props) => props.bgColor};
    min-height: 100%;
`;

export default PageContentBg;
