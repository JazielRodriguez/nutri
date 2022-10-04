import CustomLogo from "../../CustomLogo/CustomLogo";
import { NavLink } from "react-router-dom";
import style from "./DesktopNavbarStyle.module.css";

const DesktopNavbar = (props) => {

    const esHandler = () => {
        props.changeLanguage("es");
    };
    const enHandler = () => {
        props.changeLanguage("en");
    };
    return (
        <nav className={style.customNavbarContent}>
            <article className={style.alignContentNavbar}>
                <CustomLogo />
                <section className={style.alginNavLinks}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? style.activeLink : style.inactiveLink
                        }
                        to="/"
                    >
                        {props.t(`translations.home`)}
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? style.activeLink : style.inactiveLink
                        }
                        to="/about"
                    >
                        {props.t(`translations.aboutUs`)}
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? style.activeLink : style.inactiveLink
                        }
                        to="/news"
                    >
                        {props.t(`translations.news`)}
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? style.activeLink : style.inactiveLink
                        }
                        to="/ourProducts"
                    >
                        {props.t(`translations.ourProducts`)}
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? style.activeLink : style.inactiveLink
                        }
                        to="/contact"
                    >
                        {props.t(`translations.contact`)}
                    </NavLink>
                </section>
                <section className={style.alignLenguaje}>
                    <p onClick={esHandler}>
                        {props.lng === "es" ? <b>ES</b> : "ES"}
                    </p>
                    <p>|</p>
                    <p onClick={enHandler}>
                        {props.lng === "en" ? <b>EN</b> : "EN"}
                    </p>
                </section>
            </article>
            <div className={style.decoreBoxNavbar} />
        </nav>
    );
};

export default DesktopNavbar;
