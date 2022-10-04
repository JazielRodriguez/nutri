import { useState } from "react";
import style from "./ProductCardMobile.module.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { IconContext } from "react-icons";
import gmp from "./../../../assets/icons/seal-removebg-preview.png";
import thc from "../../../assets/icons/thc.png";
const ProductCardMobile = (props) => {
    const [infoVisible, setInfoVisible] = useState(false);
    const infoHandler = () => {
        setInfoVisible((prev) => !prev);
    };
    return (
        <section className={style.mobileCard}>
            <img src={props.img} alt={props.name} />
            <div onClick={infoHandler} className={style.mobileCardHandler}>
                <h2>{props.name}</h2>{" "}
                <IconContext.Provider value={{ size: "24px" }}>
                    {infoVisible ? (
                        <AiOutlineArrowUp />
                    ) : (
                        <AiOutlineArrowDown />
                    )}
                </IconContext.Provider>
            </div>

            {infoVisible && (
                <div className={style.mobileCardInfo}>
                    <p>{props.text}</p>
                    <div className={style.productCardSeals}>
                        <img src={gmp} alt="GMP" />
                        {props.thc && <img src={thc} alt="THC" />}
                    </div>
                </div>
            )}
        </section>
    );
};
export default ProductCardMobile;
