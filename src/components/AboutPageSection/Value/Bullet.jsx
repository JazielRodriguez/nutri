import styled from "styled-components";

export const ContainerBullet = styled.div`
    display: flex;
    position: absolute;
    z-index: 19999;
    bottom: 0;
    right: 0;
    width: 370px;
    gap: 10px;
    @media (max-width: 1080px) {
        width: 200px;
    }
`;

const Bullet = styled.div`
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 0px 12px rgba(162, 180, 164, 0.5);
    cursor: pointer;
    &:hover {
        background: rgba(191, 209, 178, 1);
        box-shadow: 0px 0px 0px 12px rgba(96, 128, 99, 1) !important;
    }

    @media (max-width: 1080px) {
        width: 15px;
        height: 15px;
        box-shadow: 0px 0px 0px 6px rgba(162, 180, 164, 0.5);
        &:hover {
            background-color: rgba(191, 209, 178, 1);
            box-shadow: 0px 0px 0px 6px rgba(90, 128, 99, 1) !important;
        }
    }
`;
export default Bullet;
