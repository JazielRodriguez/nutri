import styles from "./Value.module.css";
import image6 from "../img/image6.png";
import Bullet, { ContainerBullet } from "./Bullet";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import figure from "../../../assets/icons/figureTwo.png";
import { ContainerTitleValues, TitleValues } from "./TitleValues";
import { useMediaQuery } from "react-responsive";

function Value() {
    const { t } = useTranslation("aboutUsPage");
    const [valueIsVisible, setValueIsVisible] = useState(false);
    const [titleValue, setTitleValue] = useState("");
    const [value, setValue] = useState("");
    const [activeOne, setActiveOne] = useState(false);
    const [activeTwo, setActiveTwo] = useState(false);
    const [activeThree, setActiveThree] = useState(false);
    const [activeFour, setActiveFour] = useState(false);
    const [activeFive, setActiveFive] = useState(false);
    const [titlePage, setTitlePage] = useState(t("translations.titleOne"));

    const isMobile = screen.width < 768 ? true : false;
    return (
        <>
            <div className={styles.mainSectionThree}>
                <h1 className={styles.title}>
                    <b>
                        {"<"} {titlePage}
                    </b>
                </h1>
                <div className={styles.imgValue} data-aos="fade-right">
                    <ContainerBullet className={styles.bullets}>
                        <Bullet
                            onMouseEnter={() => {
                                setTitleValue(t("translations.valueTitleOne"));
                                setValue(t("translations.valueOne"));
                                setValueIsVisible(true);
                                setActiveOne(true);
                                isMobile
                                    ? setTitlePage(
                                          t("translations.valueTitleOne")
                                      )
                                    : null;
                            }}
                            onMouseLeave={() => {
                                setTitleValue(t("translations.titleOne"));
                                setValue("");
                                setValueIsVisible(false);
                                setActiveOne(false);
                                setTitlePage(t("translations.titleOne"));
                            }}
                        ></Bullet>
                        <Bullet
                            onMouseEnter={() => {
                                setTitleValue(t("translations.valueTitleTwo"));
                                setValue(t("translations.valueTwo"));
                                setValueIsVisible(true);
                                setActiveTwo(true);
                                isMobile
                                    ? setTitlePage(
                                          t("translations.valueTitleTwo")
                                      )
                                    : null;
                            }}
                            onMouseLeave={() => {
                                setTitleValue(t("translations.titleOne"));
                                setValue("");
                                setValueIsVisible(false);
                                setActiveTwo(false);
                                setTitlePage(t("translations.titleOne"));
                            }}
                        ></Bullet>
                        <Bullet
                            onMouseEnter={() => {
                                setTitleValue(
                                    t("translations.valueTitleThree")
                                );
                                setValue(t("translations.valueThree"));
                                setValueIsVisible(true);
                                setActiveThree(true);
                                isMobile
                                    ? setTitlePage(
                                          t("translations.valueTitleThree")
                                      )
                                    : null;
                            }}
                            onMouseLeave={() => {
                                setTitleValue(t("translations.titleOne"));
                                setValue("");
                                setValueIsVisible(false);
                                setActiveThree(false);
                                setTitlePage(t("translations.titleOne"));
                            }}
                        ></Bullet>
                        <Bullet
                            onMouseEnter={() => {
                                setTitleValue(t("translations.valueTitleFour"));
                                setValue(t("translations.valueFour"));
                                setValueIsVisible(true);
                                setActiveFour(true);
                                isMobile
                                    ? setTitlePage(
                                          t("translations.valueTitleFour")
                                      )
                                    : null;
                            }}
                            onMouseLeave={() => {
                                setTitleValue(t("translations.titleOne"));
                                setValue("");
                                setValueIsVisible(false);
                                setActiveFour(false);
                                setTitlePage(t("translations.titleOne"));
                            }}
                        ></Bullet>
                        <Bullet
                            onMouseEnter={() => {
                                setTitleValue(t("translations.valueTitleFive"));
                                setValue(t("translations.valueFive"));
                                setValueIsVisible(true);
                                setActiveFive(true);
                                isMobile
                                    ? setTitlePage(
                                          t("translations.valueTitleFive")
                                      )
                                    : null;
                            }}
                            onMouseLeave={() => {
                                setTitleValue(t("translations.titleOne"));
                                setValue("");
                                setValueIsVisible(false);
                                setActiveFive(false);
                                setTitlePage(t("translations.titleOne"));
                            }}
                        ></Bullet>
                    </ContainerBullet>
                    <ContainerTitleValues className={styles.titleValues}>
                        <TitleValues
                            style={
                                activeOne
                                    ? {
                                          fontWeight: "bold",
                                          fontSize: "1.4rem",
                                          left: "55%",
                                      }
                                    : undefined
                            }
                        >
                            {t("translations.valueTitleOne")}
                        </TitleValues>
                        <TitleValues
                            style={
                                activeTwo
                                    ? {
                                          fontWeight: "bold",
                                          fontSize: "1.4rem",
                                          right: "-35%",
                                          top: "12%",
                                      }
                                    : undefined
                            }
                        >
                            {t("translations.valueTitleTwo")}
                        </TitleValues>
                        <TitleValues
                            style={
                                activeThree
                                    ? {
                                          fontWeight: "bold",
                                          fontSize: "1.4rem",
                                          right: "-42%",
                                      }
                                    : undefined
                            }
                        >
                            {t("translations.valueTitleThree")}
                        </TitleValues>
                        <TitleValues
                            style={
                                activeFour
                                    ? {
                                          fontWeight: "bold",
                                          fontSize: "1.4rem",
                                          right: "-29%",
                                          bottom: "10%",
                                      }
                                    : undefined
                            }
                        >
                            {t("translations.valueTitleFour")}
                        </TitleValues>
                        <TitleValues
                            style={
                                activeFive
                                    ? {
                                          fontWeight: "bold",
                                          fontSize: "1.4rem",
                                          bottom: "-10%",
                                          left: "55%",
                                          width: "fit-content",
                                      }
                                    : undefined
                            }
                        >
                            {t("translations.valueTitleFive")}
                        </TitleValues>
                    </ContainerTitleValues>
                    <img src={image6} />
                </div>

                <div
                    className={styles.contentSectionThree}
                    data-aos="fade-left"
                >
                    {valueIsVisible && (
                        <div data-aos="fade-up-left">
                            {/* <h2>
                                <b>{titleValue}</b>
                            </h2> */}
                            <p style={{ fontSize: "24px" }}>{value}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.decoration}>
                <img src={figure} alt="" />
            </div>
        </>
    );
}

export default Value;
