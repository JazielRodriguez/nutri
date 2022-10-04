import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import style from "./Title.module.css";
const Title = () => {
    const { t } = useTranslation("contactPage");
    return (
        <h1 className={style.title}>
            <span>
                <AiOutlineArrowRight />
            </span>
            {t("translations.title")}
        </h1>
    );
};
export default Title;
