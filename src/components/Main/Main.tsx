import block from 'bem-css-modules';
import styles from './Main.module.css';
import Intro from './Intro/Intro';
import Advantages from './Advantages/Advantages';
import Products from './Products/Products';

const b = block(styles);

const Main = () => (
  <main className={b()}>
    <section className={b('section')}>
      <Intro />
    </section>
    <section className={b('section', { type: 'wide' })}>
      <Advantages />
    </section>
    <section className={b('section')}>
      <Products />
    </section>
  </main>
);

export default Main;
