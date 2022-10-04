import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { changeLngAction } from "../../redux/actions/setLngAction";

const CustomNavbar = () => {
    // const [lng, setLng] = useState("en");
    const dispatch = useDispatch()

    const lng = useSelector(store => store.changeLngReducer)

    const {t} = useTranslation("customNavbar");

    const changeLanguage = (lng) => {
        console.log(lng)
        dispatch(changeLngAction(lng))
        window.location.reload()
    };

    return (
        <>
            <DesktopNavbar t={t} lng={lng} changeLanguage={changeLanguage} />
            <MobileNavbar t={t} lng={lng} changeLanguage={changeLanguage} />
        </>
    );
};

export default CustomNavbar;
