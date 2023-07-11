import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {palette} from '@pg-enzian/client/theme/Palette';
import {ReactNode} from 'react';
import {components} from './Components';
import {typography} from './Typography';

const theme = createTheme({
    palette,
    typography,
    components
});

export const Theme = ({children}: {children: ReactNode}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
