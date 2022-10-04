import style from "./SectionThreeStyle.module.css";
import styled from "styled-components";
import cromatografo from "../../../assets/images/cromatografo.png";
import crom from "../../../assets/images/crom.png";
import { Trans, useTranslation } from "react-i18next";
import squareTwo from "../../../assets/icons/squareTwo.png";
import crom2 from "../../../assets/images/crom2.png";
import cromDescrp from "../../../assets/images/cromDescrp.png";
import { useInView } from "react-intersection-observer";

const SectionThree = () => {
    const { ref, inView } = useInView();
    const [secondRef, secondInView] = useInView();
    const [t] = useTranslation("homeSectionThree");

    return (
        <>
            <section className={style.contentSection}>
                <div className={style.styckyContent}>
                    <div className={style.titlesContent}>
                        <h1>
                            <b>{t("translations.title")} </b>
                        </h1>
                    </div>
                    <section
                        className={style.contentCromatografo}
                        data-aos="fade-right"
                    >
                        <img
                            // data-aos="fade-right"
                            src={cromatografo}
                            alt="cromatografo"
                            className={style.cromatografo}
                        />
                        <div className={style.grafictContent}>
                            <img src={cromDescrp} alt="desc" className={style.cromDescrp} />
                                <div className={style.graficTwo}></div>
                            <div className={style.grafic}>
                                <img
                                    className={style.cromImg}
                                    alt="crom"
                                    src={crom2}
                                />
                            </div>
                            {/* <div className={style.graficTwo}>
                                <img
                                    className={style.cromImgTwo}
                                    alt="crom"
                                    src={crom2}
                                />
                            </div> */}
                        </div>
                    </section>
                </div>
                <div className={style.wrapperContent}>
                    <div className={style.alingFirstText}>
                        <div className={style.boxText} data-aos="fade-left">
                            <p>
                                <Trans>{t(`translations.textOne`)}</Trans>
                            </p>
                        </div>
                    </div>
                    <div className={style.alingFirstText}>
                        <div className={style.boxTextTwo}>
                            <p
                                data-aos="fade-up"
                                ref={ref}
                                className={inView ? style.fade : undefined}
                            >
                                <Trans>{t(`translations.textTwo`)}</Trans>
                            </p>
                        </div>
                    </div>
                    <div className={style.alingFirstText}>
                        <div className={style.boxTextThree}>
                            <p
                                data-aos="fade-up"
                                ref={secondRef}
                                className={
                                    secondInView ? style.fade : undefined
                                }
                            >
                                <Trans>{t(`translations.textThree`)}</Trans>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <article className={style.mobileView}>
                <div className={style.titlesContent}>
                    <h1>
                        <b>{t("translations.title")} </b>
                    </h1>
                </div>
                <section>
                    <section className={style.contentCromatografo}>
                        <img
                            src={cromatografo}
                            alt="cromatografo"
                            className={style.cromatografo}
                        />
                        <div className={style.grafictContent}>
                        <img src={cromDescrp} alt="desc" className={style.cromDescrp} />
                                <div className={style.graficTwo}></div>
                            <div className={style.grafic}>
                                <img
                                    className={style.cromImg}
                                    alt="crom"
                                    src={crom2}
                                />
                            </div>
                        </div>
                    </section>
                </section>
                <div className={style.wrapperResponsiveText}>
                    <section
                        className={style.alignResponsiveText}
                        data-aos="fade-left"
                    >
                        <div className={style.boxTextResponsive}>
                            <div className={style.square}>
                                <img src={squareTwo} alt="" />
                            </div>
                            <div className={style.boxResponsive}>
                                <p>
                                    <Trans>{t(`translations.textOne`)}</Trans>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section
                        className={style.alignResponsiveText}
                        data-aos="fade-right"
                    >
                        <div className={style.boxTextTwoResponsive}>
                            <div className={style.boxResponsive}>
                                <p>
                                    <Trans>{t(`translations.textTwo`)} </Trans>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section
                        className={style.alignResponsiveText}
                        data-aos="fade-right"
                    >
                        <div className={style.boxTextThreeResponsive}>
                            {/* <img
                                src={squareTwo}
                                alt=""
                                className={style.squareTwo}
                            /> */}
                            <div className={style.boxResponsive}>
                                <p>
                                    <Trans>{t(`translations.textThree`)}</Trans>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </>
    );
};

const SectionWipes2Styled = styled.div`
    overflow: hidden;
    height: 300vh;
    @media (max-width: 1060px) {
        display: none;
    }
    #pinContainer {
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }
    #pinContainer .panel {
        // top: 10vh;
        height: 80vh;
        width: 100%;
        position: absolute;
        text-align: center;
        top: 20%;
    }
    .panel {
    }
    .panel.blue {
    }
    .panel.turqoise {
    }
    .panel.green {
    }
    .panel.bordeaux {
    }
`;

export default SectionThree;
