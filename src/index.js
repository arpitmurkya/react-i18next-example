import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";
import common_fr from "./translations/fr/common.json";
import subtitle_en from "./translations/en/subtitle.json";
import subtitle_ru from "./translations/ru/subtitle.json";
import subtitle_fr from "./translations/fr/subtitle.json";
import { BrowserRouter } from 'react-router-dom';

const dataFromStore = {
    en: {
        common: common_en,               // 'common' is our custom namespace
        subtitle: subtitle_en
    },
    ru: {
        common: common_ru,
        subtitle: subtitle_ru
    },
    fr: {
        common: common_fr,
        subtitle: subtitle_fr
    }
}

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: dataFromStore,
});


ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

