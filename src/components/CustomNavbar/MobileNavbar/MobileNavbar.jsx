import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import style from "./MobileNavbarStyle.module.css";
import { NavLink } from "react-router-dom";
import CustomLogo from "../../CustomLogo/CustomLogo";
const MobileNavbar = (props) => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    const esHandler = () => {
        props.changeLanguage("es");
    };
    const enHandler = () => {
        props.changeLanguage("en");
    };
    const menuHandler = () => {
        setMenuIsVisible((p) => !p);
    };
    return (
        <nav className={menuIsVisible ? style.navOpen : style.nav}>
            <section className={style.language}>
                <p onClick={esHandler}>
                    {props.lng === "es" ? <b>ES</b> : "ES"}
                </p>
                <p>|</p>
                <p onClick={enHandler}>
                    {props.lng === "en" ? <b>EN</b> : "EN"}
                </p>
            </section>
            {!menuIsVisible && <CustomLogo />}
            {menuIsVisible && (
                <div className={style.linkContainer}>
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
                </div>
            )}
            <IconContext.Provider value={{ size: "24px" }}>
                <div onClick={menuHandler}>
                    <AiOutlineMenu />
                </div>
            </IconContext.Provider>
        </nav>
    );
};
export default MobileNavbar;
