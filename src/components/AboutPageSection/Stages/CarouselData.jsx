import imgOne from "../img/image1.png";
import imgTwo from "../img/image2.png";
import imgThree from "../img/image3.png";
import imgFour from "../img/image4.png";
import { useTranslation } from "react-i18next";
const [t] = useTranslation("aboutUsPage");
const data = [
    {
        img: imgOne,
        title:"stage 1",
        text:t("translations.stageOne"),
    },
    {
        img: imgTwo,
        title: "Stage 2",
        text: "As the industry realises the potential of this incredible plant, we stand.",
    },
    {
        img: imgThree,
        title: "Stage 3 ",
        text: "As the industry realises the potential of this incredible plant, we stand.",
    },
    {
        img: imgFour,
        title: "Stage 4",
        text: "As the industry realises the potential of this incredible plant, we stand.",
    },
];

export default data;
