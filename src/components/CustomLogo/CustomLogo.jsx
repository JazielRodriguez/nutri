import style from "./CustomLogoStyle.module.css";
import logo from "../../assets/icons/Logo_Final-01.png";

const CustomLogo = () => {
    return (
        <article className={style.logoContent}>
            {/* <section className={style.imgContent}>
                <img src={logo} alt="logo" />
            </section>
            <section className={style.textContent}>
                <h1>NUTRIPHARCO</h1>
                <hr></hr>
                <p>Nutrition and Pharmaceutical Company</p>
            </section> */}
            <img src={logo} alt="Nutripharco" />
        </article>
    );
};

export default CustomLogo;
