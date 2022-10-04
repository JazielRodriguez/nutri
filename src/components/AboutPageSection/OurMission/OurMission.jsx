import styleTwo from "./OurMission.module.css";
import imgOne from "../img/image5.png";
import { useTranslation } from "react-i18next";
import figure from "../../../assets/icons/figureTwo.png";
function OurMission() {
    const [t] = useTranslation("aboutUsPage");

    return (
        <>
            <div className={styleTwo.mainOurMission}>
                <div className={styleTwo.contentOurMission}>
                    <div
                        className={styleTwo.imgOurMission}
                        data-aos="fade-left"
                    >
                        <img src={imgOne} />
                    </div>
                    <div className={styleTwo.infoOurMission}>
                        <div
                            className={styleTwo.textOurMission}
                            data-aos="fade-right"
                        >
                            <div className={styleTwo.titleNews}>
                                <h1>
                                    <strong>
                                        {'<'} {t("translations.titleFour")}
                                    </strong>
                                </h1>
                            </div>
                            <div className={styleTwo.textInfoContent}>
                                <p>{t("translations.mission")}</p>
                                <br />
                                <p>{t("translations.vision")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styleTwo.decoration}>
                <img src={figure} alt="" />
            </div>
        </>
    );
}

export default OurMission;
