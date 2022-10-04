import style from "./HomePageStyle.module.css";
import SectionIntro from "../../components/homePageSections/SectionIntro/SectionIntro";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import SectionOne from "../../components/homePageSections/SectionOne/SectionOne";
import SectionThree from "../../components/homePageSections/SectionThree/SectionThree";
import SectionTwo from "../../components/homePageSections/SectionTwo/SectionTwo";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import square from "../../assets/icons/square.png";
import circle from "../../assets/icons/circle.png";
import squareTwo from "../../assets/icons/squareTwo.png";
import figure from "../../assets/icons/figure.png";
import { useEffect } from "react";
const HomePage = () => {
    const { t, i18n } = useTranslation("homePage");
    const [loaderEnabled, setLoaderEnabled] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= window.innerHeight) {
                if (loaderEnabled) {
                    setLoaderEnabled(false);
                }
            }
        });
    }, []);

    return (
        <main className={style.mainHomeContent}>
            {loaderEnabled && <SectionIntro />}
            <article className={style.sectionsContent}>
                <CustomNavbar />
                <SectionOne />
                <div className={style.deco}>
                    <section className={style.decoreImages}>
                        <div className={style.squaresContent}>
                            <img src={square} alt="" className={style.square} />
                            <div className={style.squareTwo}>
                                <img src={squareTwo} alt="" />
                            </div>
                        </div>
                        <div className={style.figureContent}>
                            <div className={style.circle}>
                                <img
                                    src={circle}
                                    alt=""
                                    className={style.img}
                                />
                            </div>
                            <div className={style.figure}>
                                <img src={figure} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <SectionTwo />
                <SectionThree />
                <section className={style.textCenter}>
                    <div className={style.finalSquare}>
                        <img
                            src={squareTwo}
                            alt=""
                            className={style.squareTwo}
                        />
                    </div>
                </section>
            </article>
        </main>
    );
};

export default HomePage;
