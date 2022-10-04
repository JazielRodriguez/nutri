import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CustomFooter from "../components/customFooter/CustomFooter";

const HomePage = lazy(() => import("../views/HomePage/HomePage"));
const AboutPage = lazy(() => import("../views/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("../views/ContactPage/ContactPage"));
const NewsPage = lazy(() => import("../views/NewsPage/NewsPage"));
const OurPrducts = lazy(() =>
    import("../views/OurProductsPage/OurProductsPage")
);

const ProviderRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            color: 'green',
                            fontSize:'22px',
                        }}
                    >
                        <p>Loading, please wait</p>
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/ourProducts" element={<OurPrducts />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <CustomFooter />
            </Suspense>
        </BrowserRouter>
    );
};

export default ProviderRoutes;
