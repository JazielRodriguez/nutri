import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import Title from "../../components/AboutPageSection/Title/Title";
import Stages from "../../components/AboutPageSection/Stages/Stages";
import OurMission from "../../components/AboutPageSection/OurMission/OurMission";
import Value from "../../components/AboutPageSection/Value/Value";
import Responsibility from "../../components/AboutPageSection/Responsibility/Responsibility";
import SectionFive from "../../components/AboutPageSection/SectionFive/SectionFive";
import style from "./AboutPageStyle.module.css";
import square from "../../assets/icons/squareTwo.png";
import squareTwo from "../../assets/icons/square.png";
import circle from "../../assets/icons/circle.png";
import figure from "../../assets/icons/figure.png";

const AboutPage = () => {
    return (
        <>
            <CustomNavbar />
            <main className={style.aboutContent}>
                <Title />
                <Stages />
                <SectionFive />
                <OurMission />
                <Value />
                <Responsibility />
                <div className={style.decos}>
                    <div className={style.fourthDecoration}>
                        <img src={square} alt="" />
                    </div>
                    <img
                        src={figure}
                        className={style.fifthDecoration}
                        alt=""
                    />
                </div>
            </main>
        </>
    );
};

export default AboutPage;

/*

            */
