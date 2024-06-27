/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
// gatsby-browser.js (and gatsby-ssr.js if needed)
// import React from 'react';
// import Layout from './src/components/layout';

// export const wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };
// gatsby-browser.js (or layout component)
import React from 'react';
import { LocalizationProvider } from './src/context/LocalizationContext';

export const wrapRootElement = ({ element }) => (
    <LocalizationProvider>
        {element}
    </LocalizationProvider>
);
