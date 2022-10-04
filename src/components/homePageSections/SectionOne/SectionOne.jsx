import { useState, useEffect, useRef } from "react";
import style from "./SectionOneStyle.module.css";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import seal from "../../../assets/icons/seal-removebg-preview.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { Trans,useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SectionOne = () => {
    const {t, i18n} = useTranslation("homeSectionOne");
    const [textChange, setTextChange] = useState("")

    const lng = useSelector(store => store.changeLngReducer)

    useEffect(() => {
        if (lng === "en") {
            setTextChange("¡Welcome!")
        } else {
            console.log("super Es ")
            setTextChange("¡Bienvenidos!")
        }
    }, [textChange])


    const [textStatus, setTextStatus] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0,
        delay: 1000,
        triggerOnce: true,
    });
    useEffect(() => {
        if (!inView) {
            return;
        }
        setTextStatus(1);
    }, [inView]);

    const refText = useRef();


    const { text } = useTypewriter({
        words: textStatus === 1 ? [textChange] : null,
        loop: textStatus, // Infinit
    });

    return (
        <section
            ref={ref}
            className={style.contentSectionOne}
            /* data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" */
        >
            <div className={style.descriptionContent}>
                <div className={style.titlesWrip}>
                <h1 className={style.titleSection} id="textTitle" ref={refText}>
                    {/* Welcome, to Nutripharco. */}
                    {text}
                </h1>
                </div>
                <div className={style.descriptionSection}>
                    {/* <AiOutlineArrowDown />
                    <br />
                    <br />
                    <br /> */}
                    <p><Trans>{t(`translations.gmp`)}</Trans></p>
                    <p>{t(`translations.description`)}</p>
                </div>
            </div>  
            <div className={style.imageContent}>
                <img
                    className={style.logo}
                    src={seal}
                    alt="seal"
                    /* data-aos="zoom-out"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="1100"
                    data-aos-offset="0"
                    data-aos-duration="200" */
                />
                    {/* <Link className={style.learMore} to="/">
                        <i>
                            {t(`translations.more`)} <FiArrowUpRight />
                        </i>
                    </Link> */}
            </div>
        </section>
    );
};

export default SectionOne;
