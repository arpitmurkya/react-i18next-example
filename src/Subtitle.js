import React from 'react';
import { useTranslation } from 'react-i18next';

const HighOrderComponent = () => {
    const { t } = useTranslation('common');
    const { t: subtitleT } = useTranslation('subtitle');

    return (
        <div>
            <h1>{t('welcome.subtitle')}</h1>
            <h2>{subtitleT('subtitle.title')}</h2>
        </div>
    )
}

export default HighOrderComponent;