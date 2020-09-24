import React, { Suspense } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import about_ru from "./translations/ru/about.json";
import about_en from "./translations/en/about.json";
import about_fr from "./translations/fr/about.json";
// import common_ru from "./translations/ru/common.json";
// import common_en from "./translations/en/common.json";
// import common_fr from "./translations/fr/common.json";
import i18next from 'i18next';

const storeDataForThisRoute = {
    en: about_en,
    ru: about_ru,
    fr: about_fr
}

// const storeDataFromApp = {
//     en: common_en,
//     ru: common_ru,
//     fr: common_fr
// }

const About = (props) => {
    const [t, i18n] = useTranslation('about');
    console.log('i18n : ',i18n )

    // Get App messages
    let appMessages = {}, language = i18n.language;
    if(language) {
        let langResource = i18n.getDataByLanguage(language);
        appMessages = langResource['common'];
        console.log(appMessages)
    }


    // new instance of i18next for nested provider
    const newInstance = i18next.createInstance();
    const pageMessages = {
        en: storeDataForThisRoute.en,
        ru: storeDataForThisRoute.ru,
        fr: storeDataForThisRoute.fr
    }
    newInstance.init({
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        language:i18next.language,
        resources: pageMessages
    });

    return (
        <I18nextProvider i18n={newInstance} >
            <Suspense fallback="loading">
                <div>
                    <h2> About Page </h2>
                    <p> {t('about.title')} </p>
                    <p> {t('welcome.title')} </p>
                </div>
            </Suspense>
        </I18nextProvider>
    )



    // ====== Working - adding resource bundles

    // i18n.addResourceBundle("en", "about", {
    //     ...appMessages,
    //     ...storeDataForThisRoute.en
    // });
    // i18n.addResourceBundle("fr", "about", {
    //     ...appMessages,
    //     ...storeDataForThisRoute.fr
    // });
    // i18n.addResourceBundle("ru", "about", {
    //     ...appMessages,
    //     ...storeDataForThisRoute.ru
    // });

    // return (
    //     <div>
    //         <h2> About Page </h2>
    //         <p> {t('about.title')} </p>
    //         <p> {t('welcome.title')} </p>
    //     </div>
    // )
}

export default About;