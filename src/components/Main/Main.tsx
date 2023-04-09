import block from 'bem-css-modules';
import styles from './Main.module.css';
import Intro from './Intro/Intro';
import Features from './Features/Features';
import Products from './Products/Products';
import Objects from './Objects/Objects';

const b = block(styles);

const Main = () => (
  <main className={b()}>
    <section className={b('section')}>
      <Intro />
    </section>
    <section className={b('section', { type: 'wide' })}>
      <Features />
    </section>
    <section className={b('section')}>
      <Products />
    </section>
    <section className={b('section', { type: 'wide' })}>
      <Objects />
    </section>
  </main>
);

export default Main;
