import styleThree from "./Responsability.module.css";
import image7 from "../img/image7.png";
import imageResposive from "../img/image9.png";
import { useTranslation } from "react-i18next";
import square from '../../../assets/icons/square.png'
import "bootstrap/dist/css/bootstrap.css";

function SectionFour() {
    const [t] = useTranslation("aboutUsPage");

    return (
        <>
            <div className={styleThree.mainResponsability}>
                <div className={styleThree.contentResponsability}>
                    <div
                        className={styleThree.imgResponsability}
                        data-aos="fade-right"
                    >
                        <img src={image7} className={styleThree.imgDesktop} />
                        <img
                            src={imageResposive}
                            className={styleThree.imgMobile}
                        />
                    </div>
                    <div className={styleThree.infoResponsability}>
                        <div
                            className={styleThree.textResponsability}
                            data-aos="fade-left"
                        >
                            <div className={styleThree.titleResponsability}>
                                <h1><strong>{'<'} {t("translations.titleFive")}</strong></h1>
                            </div>
                            <div className={styleThree.textInfoResponsability}>
                                <p>{t("translations.responsibility")}</p>
                                <br />
                                <p style={{textAlign:'center !important'}}>{t("translations.environmental")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styleThree.decoration}>
                <img src={square} alt="" />
            </div> */}
        </>
    );
}

export default SectionFour;
