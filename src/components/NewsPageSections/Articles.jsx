import styled from "styled-components";

const Articles = styled.section`
    display: flex;
    gap: 20px;
    width: 80%;
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: auto;
    @media (max-width: 768px) {
        width: 95%;
    }
`;
export default Articles;
