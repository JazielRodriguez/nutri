import style from "./ProductCard.module.css";
import gmp from "../../../assets/icons/seal-removebg-preview.png";
import thc from "../../../assets/icons/thc.png";
import { useState } from "react";
import { Trans } from "react-i18next";
const ProductCard = (props) => {
    const [descriptionIsVisible, setDescriptionIsVisible] = useState(false);
    const openDescriptionHandler = () => {
        setDescriptionIsVisible(true);
    };
    const closeDescriptionHandler = () => {
        setDescriptionIsVisible(false);
    };
    return (
        <section className={style.productCard}>
            {!props.right && (
                <div className={style.productCardImage}>
                    <img src={props.img} alt={props.name} />
                </div>
            )}
            <div
                onMouseEnter={openDescriptionHandler}
                onMouseLeave={closeDescriptionHandler}
                className={style.productCardInfo}
            >
                <h1><strong>{props.name}</strong></h1>
                {descriptionIsVisible && (
                    <>
                        <Trans><p>{props.text}</p></Trans>
                        <div className={style.productCardSeals}>
                            <img src={gmp} alt="GMP" />
                            {props.thc && <img src={thc} alt="THC" />}
                        </div>
                    </>
                )}
            </div>
            {props.right && (
                <div className={style.productCardImage}>
                    <img src={props.img} alt={props.name} />
                </div>
            )}
        </section>
    );
};
export default ProductCard;
