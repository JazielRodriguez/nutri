import style from "./Title.module.css";
import { useTranslation } from "react-i18next";
import rombo from "../../../assets/icons/squareTwo.png";

function Title() {
    const { t } = useTranslation("aboutUsPage");
    return (
        <>
            <div className={style.Title}>
                {/* <h1>{t('translations.ourHistory')}</h1> */}
            </div>
            <div className={style.imgContent}>
                <div className={style.cuadrado}>
                    <img alt="" src={rombo} />
                </div>
            </div>
        </>
    );
}

export default Title;
