import { FC } from 'react'
import block from 'bem-css-modules'
import styles from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

const b = block(styles)

const App: FC = () => (
  <div className={b()}>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default App
