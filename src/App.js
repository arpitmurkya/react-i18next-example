import React, { Suspense } from 'react';
import './App.css';
// import { I18nextProvider } from "react-i18next";
import { useTranslation, withTranslation } from "react-i18next";
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
// import about_ru from "./translations/ru/about.json";
// import about_en from "./translations/en/about.json";
// import about_fr from "./translations/fr/about.json";
import i18next from 'i18next';


function HeaderComponent() {
    const [t] = useTranslation('common');
    return <div>
        <h1>{t('welcome.title', { framework: 'React' })}</h1>
        <button onClick={() => i18next.changeLanguage('en')}>en</button>
        <button onClick={() => i18next.changeLanguage('ru')}>ru</button>
        <button onClick={() => i18next.changeLanguage('fr')}>fr</button>
    </div>
}

// const storeDataForThisRoute = {
//     en: about_en,
//     ru: about_ru,
//     fr: about_fr
// }

class App extends React.Component {
    render() {

        // Get App messages
        // const {i18n} = this.props;
        // let langResource;
        // let appMessages = {};
        // let language = i18n.language;
        // if(language) {
        //     langResource = i18n.getDataByLanguage(language);
        //     appMessages = langResource['common'];
        //     console.log(appMessages)
        // }

        return (
            <Suspense fallback="loading">
                <div className="App">
                    <HeaderComponent {...this.props} />
                    <Switch >
                        {routes.map((route, index) => {
                                // new instance of i18next for nested provider

                                // const newInstance = i18next.createInstance();
                                // const pageMessages = {
                                //     en: storeDataForThisRoute.en,
                                //     ru: storeDataForThisRoute.ru,
                                //     fr: storeDataForThisRoute.fr
                                // }
                                // newInstance.init({
                                //     fallbackLng: "en",
                                //     interpolation: {
                                //         escapeValue: false,
                                //     },
                                //     language:i18next.language,
                                //     resources: pageMessages
                                // });
                                
                                return (
                                    // <I18nextProvider i18n={newInstance} key={index}>
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    // </I18nextProvider>
                                )
                        })}
                    </Switch>
                </div>
            </Suspense>
        );
    }
}



export default withTranslation()(App);
