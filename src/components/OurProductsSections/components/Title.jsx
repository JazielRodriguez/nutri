import { AiOutlineArrowRight } from "react-icons/ai";
import style from "./Title.module.css";
import { Trans } from "react-i18next";
const Title = (props) => {

    return (
        <div className={style.title}>
            <h1>
                <span>
                    <AiOutlineArrowRight />
                </span>
                {props.title}
            </h1>
            <p><Trans>{props.desc}</Trans></p>
        </div>
    );
};
export default Title;
