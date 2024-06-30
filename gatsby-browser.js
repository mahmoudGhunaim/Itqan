// gatsby-browser.js or gatsby-ssr.js
import React from 'react';
import { LocalizationProvider } from './src/context/LocalizationContext';

export const wrapRootElement = ({ element }) => (
    <LocalizationProvider>
        {element}
    </LocalizationProvider>
);
