import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styleOne from "./Stages.module.css";
import imgOne from "../img/image1.png";
import imgTwo from "../img/image2.png";
import imgThree from "../img/image3.png";
import imgFour from "../img/image4.png";
import circle from "../../../assets/icons/circle.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.css";
import { IconContext } from "react-icons";

function Stages() {
    const [t] = useTranslation("aboutUsPage");
    const stages = [
        {
            img: imgOne,
            title: "Stage 1",
            text: t("translations.stageOne"),
        },
        {
            img: imgTwo,
            title: "Stage 2",
            text: t("translations.stageTwo"),
        },
        {
            img: imgThree,
            title: "Stage 3",
            text: t("translations.stageThree"),
        },
        {
            img: imgFour,
            title: "Stage 4",
            text: t("translations.stageFour"),
        },
    ];
    const [value, setValue] = useState(stages[0]);
    // const [data, setData] = useState({
    //     img: imgOne,
    //     title: "Stage 1",
    //     text: t("translations.stageOne"),
    // });
    const containerStyle = {
        backgroundImage: `url(${value.img})`,
        WebkitBackgroundImage: `url(${value.img})`,
        width: "100%",
        height: "20%",
    };
    const leftHandler = () => {
        if (value.title === stages[0].title) {
            setValue(stages[3]);
        }
        if (value.title === stages[1].title) {
            setValue(stages[0]);
        }
        if (value.title === stages[2].title) {
            setValue(stages[1]);
        }
        if (value.title === stages[3].title) {
            setValue(stages[2]);
        }
    };
    const rightHandler = () => {
        if (value.title === stages[0].title) {
            setValue(stages[1]);
        }
        if (value.title === stages[1].title) {
            setValue(stages[2]);
        }
        if (value.title === stages[2].title) {
            setValue(stages[3]);
        }
        if (value.title === stages[3].title) {
            setValue(stages[0]);
        }
    };
    console.log(value);
    return (
        <>
            <div className={styleOne.stageMain} style={containerStyle}>
                <IconContext.Provider value={{ size: "60px", color: "#fff" }}>
                    <div className={styleOne.izquierda} onClick={leftHandler}>
                        <IoIosArrowBack />
                    </div>
                    <div className={styleOne.derecha} onClick={rightHandler}>
                        <IoIosArrowForward />
                    </div>
                </IconContext.Provider>
                <div className={styleOne.stageContentAlbum}>
                    <div className={styleOne.stageInfoAlbum}>
                        {/* <h2 className="text-left">{value.title}</h2> */}
                        <p className="text-left">{value.text}</p>
                    </div>
                    {/* <div className={styleOne.stageSlider}>
                        <input
                            className={valueRange.range}
                            type="range"
                            min="1"
                            max="4"
                            autoComplete="off"
                            step="1"
                            value={initialValue}
                            onChange={function (e) {
                                Data(e.target.value);
                                setInitialValue(e.target.value);
                            }}
                        />
                    </div> */}
                </div>
            </div>
            <div className={styleOne.decoration}>
                <img className={styleOne.first} src={circle} alt="" />
                <img className={styleOne.second} src={circle} alt="" />
            </div>
        </>
    );
}

export default Stages;
