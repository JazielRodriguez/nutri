import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// ES
import HomePage_es from './es/HomePage.json';
import customNavbar_es from './es/customNavbar.json';
import homeSectionOne_es from './es/homeSectionOne.json';
import homeSectionTwo_es from './es/homeSectionTwo.json';
import homeSectionThree_es from './es/homeSectionThree.json';
import ourProducts_es from './es/ourProducts.json';
import aboutUs_es from './es/aboutUsPage.json';
import contactPage_es from './es/contactPage.json';
import newsPage_es from './es/newsPage.json';
import footer_es from './es/footer.json';

// EN
import HomePage_en from './en/HomePage.json';
import customNavbar_en from './en/customNavbar.json';
import homeSectionOne_en from './en/homeSectionOne.json';
import homeSectionTwo_en from './en/homeSectionTwo.json';
import homeSectionThree_en from './en/homeSectionThree.json';
import ourProducts_en from './en/ourProducts.json';
import aboutUs_en from './en/aboutUsPage.json';
import contactPage_en from './en/contactPage.json';
import newsPage_en from './en/newsPage.json';
import footer_en from './en/footer.json';

const resources = {
    es: {
        homePage: HomePage_es,
        customNavbar: customNavbar_es,
        homeSectionOne: homeSectionOne_es,
        homeSectionTwo: homeSectionTwo_es,
        homeSectionThree: homeSectionThree_es,
        ourProducts: ourProducts_es,
        aboutUsPage: aboutUs_es,
        contactPage: contactPage_es,
        newsPage: newsPage_es,
        footer: footer_es,
    },
    en: {
        homePage: HomePage_en,
        customNavbar: customNavbar_en,
        homeSectionOne: homeSectionOne_en,
        homeSectionTwo: homeSectionTwo_en,
        homeSectionThree: homeSectionThree_en,
        ourProducts: ourProducts_en,
        aboutUsPage: aboutUs_en,
        contactPage: contactPage_en,
        newsPage: newsPage_en,
        footer: footer_en,
    },
};

i18next.use(initReactI18next).init({
    debug: false,
    resources,
    lng: localStorage.getItem("leng") || "en", // Initial language
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
