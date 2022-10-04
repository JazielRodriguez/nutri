import ProviderRoutes from "./routes/ProviderRoutes";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n/i18nProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18next}>
                <ProviderRoutes />
            </I18nextProvider>
        </Provider>
    );
};

export default App;
