import style from "./CustomFooterStyle.module.css";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const CustomFooter = () => {
    const { t } = useTranslation("footer");
    return (
        <footer className={style.footerSeparatePage}>
            <section className={style.contentFooter}>
                <h2 className={style.mediaQueryDesktop}>Nutripharco - 2022</h2>
                <h6 className={style.mediaQueryDesktop}>
                    <i>{t("translations.footer")}</i>{" "}
                    <a href="https://it-techgroup.com/" target="_blank">
                        IT-TechGroup
                    </a>
                </h6>
                <div className={style.mediaQueryMobile}>
                    <h2>Nutripharco - 2022</h2>
                    <h6>
                        <i>{t("translations.footer")}</i>{" "}
                        <a href="https://it-techgroup.com/" target="_blank">
                            IT-TechGroup
                        </a>
                    </h6>
                </div>
                <div className={style.dataAling}>
                    <div className={style.iconsMedia}>
                        <BsTwitter />
                        <BsLinkedin />
                        <BsInstagram />
                    </div>
                    <h6>nutripharco@gmail.com</h6>
                    <h6>+5491160483535</h6>
                </div>
            </section>
            <section className={style.decoreBoxFooter} />
        </footer>
    );
};

export default CustomFooter;
