import styled from "styled-components";

const TopArticle = styled.aside`
    position: relative;
    padding: 30px;
    background: rgba(97, 128, 100, 0.08);
    margin: 30px 80px;
    margin-top: 0;
    h2 {
        color: rgba(97, 128, 100, 1);
    }
    @media (max-width: 768px) {
        width: 95%;
        margin: 30px auto;
        h2 {
            text-align: center;
        }
    }
`;
export const Content = styled.div`
    /* font-family: "DM Sans", sans-serif; */
    display: flex;
    padding: 30px 100px;
    align-items: center;
    gap: 20px;
    #image {
        height: 280px;
        width: 420px;
    }
    p {
        padding: 0 60px;
    }
    @media (max-width: 768px) {
        padding: 30px;
        flex-direction: column;
        p {
            padding: 0;
        }
        #image {
            width: 100%;
            margin: 0 auto;
        }
    }
`;
export default TopArticle;
