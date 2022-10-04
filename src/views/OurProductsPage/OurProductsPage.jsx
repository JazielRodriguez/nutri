import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import Title from "../../components/OurProductsSections/components/Title";
import ProductCard from "../../components/OurProductsSections/components/ProductCard";
import { useMediaQuery } from "react-responsive";
import ProductCardMobile from "../../components/OurProductsSections/components/ProductCardMobile";
import oil from "../../assets/images/oil.jpeg";
import spectrum from "../../assets/images/broad-spectrum.png";
import distillate from "../../assets/images/cbd-destillate.jpeg";
import isolate from "../../assets/images/isolate.jpeg";
import formulations from "../../assets/images/Formulaciones.jpeg";
import { useTranslation } from "react-i18next";
const OurProductsPage = () => {
    const { t } = useTranslation("ourProducts");
    const products = [
        {
            img: oil,
            name: t("translations.productFullSpectrumOil"),
            text: t("translations.fullSpectrumOil"),
            right: false,
            thc: false,
        },
        {
            img: spectrum,
            name: t("translations.productBroadSpectrum"),
            text: t("translations.broadSpectrum"),
            right: true,
            thc: true,
        },
        {
            img: distillate,
            name: t("translations.productCBDDistillate"),
            text: t("translations.CBDDistillate"),
            right: false,
            thc: true,
        },
        {
            img: isolate,
            name: t("translations.productCBDIsolate"),
            text: t("translations.CBDIsolate"),
            right: true,
            thc: true,
        },
        {
            img: formulations,
            name: t("translations.productBlendAndCustomFormulations"),
            text: t("translations.blendAndCustomFormulations"),
            right: false,
            thc: false,
        },
    ];

    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });

    return (
        <>
            <CustomNavbar />
            <Title
                desc={t("translations.desc")}
                title={t("translations.title")}
            />
            {!isMobile && (
                <>
                    {products.map((product) => (
                        <ProductCard
                            key={product.name}
                            name={product.name}
                            img={product.img}
                            right={product.right}
                            thc={product.thc}
                            text={product.text}
                        />
                    ))}
                </>
            )}
            {isMobile && (
                <>
                    {products.map((product) => (
                        <ProductCardMobile
                            key={product.name}
                            name={product.name}
                            img={product.img}
                            thc={product.thc}
                            text={product.text}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default OurProductsPage;
