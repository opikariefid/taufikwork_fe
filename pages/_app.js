import AppTheme from '../components/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppTheme>
      <Component {...pageProps} />
    </AppTheme>
  )
}

export default MyApp
