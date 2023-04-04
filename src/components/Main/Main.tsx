import block from 'bem-css-modules';
import styles from './Main.module.css';
import Intro from './Intro/Intro';

const b = block(styles);

const Main = () => (
  <main className={b()}>
    <section className={b('section')}>
      <Intro />
    </section>
  </main>
);

export default Main;
