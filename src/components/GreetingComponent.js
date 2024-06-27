// src/components/GreetingComponent.js
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useLocalization } from '../context/LocalizationContext';

const GreetingComponent = () => {
    const { locale } = useLocalization();

    return (
        <div>
            <FormattedMessage id="greeting" />
        </div>
    );
};

export default GreetingComponent;
