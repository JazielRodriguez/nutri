import style from "./ContactPageStyle.module.css";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import Title from "../../components/ContactSections/Title";
import Form from "../../components/ContactSections/Form";
import square from "../../assets/icons/squareTwo.png";
import circle from "../../assets/icons/circle.png";
const ContactPage = () => {
    return (
        <>
            <CustomNavbar />
            <div className={style.contactPageContainer}>
                <Title />
                <Form />
            </div>
            <div className={style.contactPageDecoration}>
                <div className={style.square}>
                    <img src={square} alt="" />
                </div>
                <div className={style.contactPageSecondDecoration}>
                    <img src={circle} alt="" />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
