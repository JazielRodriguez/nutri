import styled from "styled-components";
const Article = styled.article`
    height: 350px;
    min-width: 250px;
    width: 400px;
    position: relative;
    /* font-family: "DM Sans", sans-serif; */
`;
export const Description = styled.div`
    padding: 10px;
    position: absolute;
    /* font-family: "DM Sans", sans-serif; */
    bottom: 0;
    color: #fff;
    background: rgba(97, 128, 100, 0.49);
    /* h2,
    p {
        font-family: "DM Sans", sans-serif;
    } */
`;
export const Image = styled.img`
    /* font-family: "DM Sans", sans-serif; */
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export default Article;
