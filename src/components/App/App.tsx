import { FC } from 'react'
import block from 'bem-css-modules'
import Text from '../Text/Text'
import styles from './App.module.css'

const b = block(styles)

const App: FC = () => (
  <div className={b()}>
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text>ECCOTEXX</Text>
      </a>
      <button type="button">fkasdjf</button>
    </header>
  </div>
)

export default App
