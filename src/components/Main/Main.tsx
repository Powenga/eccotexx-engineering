import block from 'bem-css-modules';
import styles from './Main.module.css';
import Intro from './Intro/Intro';
import Advantages from './Advantages/Advantages';

const b = block(styles);

const Main = () => (
  <main className={b()}>
    <section className={b('section')}>
      <Intro />
    </section>
    <section className={b('section', { type: 'accent' })}>
      <Advantages />
    </section>
  </main>
);

export default Main;
