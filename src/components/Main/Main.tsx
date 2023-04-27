import { forwardRef } from 'react';
import block from 'bem-css-modules';
import styles from './Main.module.css';
import Intro from './Intro/Intro';
import Features from './Features/Features';
import Products from './Products/Products';
import Objects from './Objects/Objects';
import Advantages from './Advantages/Advantages';
import Interaction from './Interaction/Interaction';
import Callback from './Callback/Callback';
import Contacts from './Contacts/Contacts';

const b = block(styles);

type Props = {
  handleSuccessMessage: () => void;
  handleErrorMessage: () => void;
  onPolicyClick: () => void;
};

const Main = forwardRef<HTMLElement, Props>(
  ({ onPolicyClick, handleSuccessMessage, handleErrorMessage }, ref) => (
    <main className={b()}>
      <section id="company" className={b('section')}>
        <Intro />
      </section>
      <section className={b('section', { type: 'wide' })}>
        <Features />
      </section>
      <section id="products" className={b('section')}>
        <Products />
      </section>
      <section id="objects" className={b('section', { type: 'wide' })}>
        <Objects />
      </section>
      <section id="advantages" className={b('section')}>
        <Advantages />
      </section>
      <section id="cooperation" className={b('section')}>
        <Interaction />
      </section>
      <section ref={ref} className={b('section')}>
        <Callback
          onPolicyClick={onPolicyClick}
          onSuccess={handleSuccessMessage}
          onError={handleErrorMessage}
        />
      </section>
      <section id="contacts" className={b('section')}>
        <Contacts />
      </section>
    </main>
  )
);

export default Main;
