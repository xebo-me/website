import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

import BarlowSemiBold from './fonts/BarlowSemiBold.ttf';
import InterSemiBold from './fonts/InterSemiBold.ttf';
import InterThin from './fonts/InterThin.ttf';
import { palette } from './palette';
import { typography } from './typography';

export const theme: Theme = responsiveFontSizes(createTheme({
    palette,
    typography,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'InterSemiBold';
                    src: url(${InterSemiBold});
                    font-style: normal;
                }
                @font-face {
                    font-family: 'InterThin';
                    src: url(${InterThin});
                    font-style: normal;
                }
                @font-face {
                    font-family: 'BarlowSemiBold';
                    src: url(${BarlowSemiBold});
                    font-style: normal;
                }
            `,
        }
    }
}));

export default theme;