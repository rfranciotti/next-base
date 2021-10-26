import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { CssBaseline } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MyApp
