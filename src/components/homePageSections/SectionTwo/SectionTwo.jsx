import { useLayoutEffect, useEffect, useRef, useState } from "react";
import style from "./SectionTwoStyle.module.css";
import styled from "styled-components";
import customMap from "../../../assets/images/Map.png";
import fabrica from "../../../assets/images/fabrica.png";
import { useInView } from "react-intersection-observer";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Trans, useTranslation } from "react-i18next";

const SectionTwo = () => {
    const [t] = useTranslation("homeSectionTwo");

    return (
        <>
            {/* <div className={style.titleSectionTwo}>
                <h1> <b>Salto, Uruguay </b></h1>

            </div> */}
            <SectionWipes2Styled>
                <Controller>

                    <Scene triggerHook="onLeave" duration='300%' pin>
                        <Timeline wrapper={<div id="pinContainer" />}>
                            <div className={style.normalMap}>
                                <Tween
                                    from={{ scale: "1" }}
                                    to={{ scale: "2", x: "30%", y: "-70%" }}
                                >
                                    <section className="panel blue">
                                        <img
                                            src={customMap}
                                            alt=""
                                            className={style.imgToChange}
                                        />
                                    </section>
                                </Tween>
                            </div>
                            <div className={style.responsiveMap}>
                                <Tween
                                    from={{ scale: "1" }}
                                    to={{ scale: "2", x: "-10%", y: "-7%" }}
                                >
                                    <section className="panel blue">
                                        <img
                                            src={customMap}
                                            alt=""
                                            className={style.imgToChange}
                                        />
                                    </section>
                                </Tween>
                            </div>
                            <Tween
                                from={{ opacity: "0", x: "44%", y: "-5%" }}
                                to={{ opacity: "1", x: "44%", y: "-5%" }}
                            >
                                <section className="panel turqoise">
                                    <div className={style.contentSalto}>
                                        <h1>Salto,</h1>
                                        <h1>Uruguay</h1>
                                    </div>
                                    <div className={style.circleUruguay} />
                                </section>
                            </Tween>
                            <div className={style.normalImage}>
                                <Tween
                                    from={{
                                        scale: 0,
                                        x: "-1%",
                                        y: "-2.5%",
                                        // borderRadius: "100%",
                                    }}
                                    to={{
                                        scale: 1.5,
                                        x: "0%",
                                        y: "0%",
                                        // borderRadius: "0%",
                                    }}
                                >
                                    <section className="panel bordeaux">
                                        <div className={style.contentFinalTxt}>
                                            <div className={style.finalTextBox}>
                                                <h1>
                                                    {" "}
                                                    {t(
                                                        `translations.title`
                                                    )}{" "}
                                                </h1>
                                                <p>
                                                    <Trans>
                                                        {t(
                                                            `translations.description`
                                                        )}
                                                    </Trans>
                                                </p>
                                                <p>
                                                    {" "}
                                                    {t(
                                                        `translations.descriptionTwo`
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </Tween>
                            </div>
                            <div className={style.normalImageResponsive}>
                                <Tween
                                    from={{
                                        scale: 0,
                                        x: "10%",
                                        y: "-2.5%",
                                        // borderRadius: "100%",
                                    }}
                                    to={{
                                        scale: 1.5,
                                        x: "0%",
                                        y: "0%",
                                        // borderRadius: "0%",
                                    }}
                                >
                                    <section className="panel bordeaux">
                                        <div className={style.contentFinalTxt}>
                                            <div className={style.finalTextBox}>
                                                <h1>
                                                    {" "}
                                                    {t(`translations.title`)}
                                                </h1>
                                                <p>
                                                    <Trans>
                                                        {t(
                                                            `translations.description`
                                                        )}
                                                    </Trans>
                                                </p>
                                                <p>
                                                    {" "}
                                                    {t(
                                                        `translations.descriptionTwo`
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </Tween>
                            </div>
                            <div className={style.normalImage}>
                                <Tween
                                    from={{
                                        x: "-100%",
                                        opacity: "0",
                                        scale: "1.5",
                                    }}
                                    to={{ x: "0%", opacity: "1", scale: "1.5" }}
                                >
                                    <section className="panel green">
                                        <div className="panel super">
                                            <div
                                                className={
                                                    style.contentSectionTwo
                                                }
                                            >
                                                <div
                                                    className={
                                                        style.contentFinalTxt
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            style.finalTextBox
                                                        }
                                                    >
                                                        <p>
                                                            <Trans>
                                                                {t(
                                                                    "translations.descriptionThree"
                                                                )}
                                                            </Trans>
                                                        </p>
                                                        <p>
                                                            <Trans>
                                                                {t(
                                                                    "translations.descriptionFour"
                                                                )}
                                                            </Trans>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tween>
                            </div>
                            <div className={style.responsiveImage}>
                                <Tween
                                    from={{
                                        x: "0%",
                                        opacity: "0",
                                        scale: "1.5",
                                    }}
                                    to={{ x: "0%", opacity: "1", scale: "1.5" }}
                                >
                                    <section className="panel green">
                                        <div className="panel super">
                                            <div
                                                className={
                                                    style.contentSectionTwo
                                                }
                                            >
                                                <div
                                                    className={
                                                        style.contentFinalTxt
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            style.finalTextBox
                                                        }
                                                    >
                                                        <p>
                                                            <Trans>
                                                                {t(
                                                                    "translations.descriptionThree"
                                                                )}
                                                            </Trans>
                                                        </p>
                                                        <p>
                                                            <Trans>
                                                                {t(
                                                                    "translations.descriptionFour"
                                                                )}
                                                            </Trans>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Tween>
                            </div>
                        </Timeline>
                    </Scene>
                </Controller>
            </SectionWipes2Styled>
        </>
    );
};

const SectionWipes2Styled = styled.div`
    overflow: hidden;
    height: 440vh;
@media (max-width:768px) {
    height:430vh
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
        // background-color: #3883d8;
        overflow: hidden;
    }

    .panel.turqoise {
        // background-color: #38ced7;
        height: 100%;

        display: flex;
        align-items: center;
    }

    .panel.green {
        background: url(${fabrica});
        background-size: cover;
        background-repeat: no-repeat;
    }

    .panel.super {
        background-color: rgba(35, 96, 29, 0.6);
        transform: translateY(-20%);
    }

    .panel.bordeaux {
        background: url(${fabrica});
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export default SectionTwo;
