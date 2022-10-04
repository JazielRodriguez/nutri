import styleFour from "./SectionFive.module.css";
import image8 from "../img/image8.png";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";

function SectionFive() {
    const { t } = useTranslation("aboutUsPage");
    return (
        <div className={styleFour.mainSectionFive}>
            <div className={styleFour.contentOneSectionFive}>
                <div className={styleFour.contentOneInfo} data-aos="fade-right">
                    <div className={styleFour.titleOne}>
                        <h1 className={styleFour.colorOne}>
                            {t("translations.titleTwo")}
                        </h1>
                    </div>
                    <div className={styleFour.contentOneInfo}>
                        <p className={styleFour.colorOne}>
                            {t("translations.whoWeAre")}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styleFour.logo}>
                <img src={image8} alt="" />
            </div>
            <div className={styleFour.contentTwoSectionFive}>
                <div className={styleFour.contentTwoInfo} data-aos="fade-left">
                    <h1 className={styleFour.colorTwo}>
                        {t("translations.titleThree")}
                    </h1>
                    <p className={styleFour.colorTwo}>
                        {t("translations.whatWeDoOne")}
                    </p>
                    <p className={styleFour.colorTwo}>
                        {t("translations.whatWeDoTwo")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SectionFive;
