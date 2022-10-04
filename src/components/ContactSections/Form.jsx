import style from "./Form.module.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Form = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formHandler = (e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            message: messageRef.current.value,
            name: nameRef.current.value,
        };
        console.log(data);
        emailjs
            .send(
                "service_0ju96ts",
                "template_uzn535b",
                data,
                "6y6DWNcP2VTmvD6Nl"
            )
            .then((result) => alert(result.text))
            .catch((err) => alert(err.text));
        e.target.reset();
    };
    const { t } = useTranslation("contactPage");
    return (
        <div className={style.form}>
            <div>
                <h2>{t("translations.getInTouch")}</h2>
                <p>mailexample@gmail.com</p>
                <p>+5491160543303</p>
                <p>City, Capital, Number</p>
                <div className={style.formSpecial}></div>
            </div>
            <form onSubmit={formHandler}>
                <div>
                    <label>{t("translations.inputName")}</label>
                    <input
                        placeholder={t("translations.PlaceHolderName")}
                        ref={nameRef}
                    />
                </div>
                <div>
                    <label>{t("translations.inputEmail")}</label>
                    <input placeholder="email@gmail.com" ref={emailRef} />
                </div>
                <div>
                    <label>{t("translations.inputMessage")}</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder={t("translations.PlaceHolderMessage")}
                        ref={messageRef}
                    ></textarea>
                </div>
                <div>
                    <button>{t("translations.button")}</button>
                </div>
            </form>
        </div>
    );
};
export default Form;
