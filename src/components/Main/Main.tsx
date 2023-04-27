import { FC } from 'react';
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

const Main: FC<Props> = ({
  onPolicyClick,
  handleSuccessMessage,
  handleErrorMessage,
}) => (
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
    <section className={b('section')}>
      <Advantages />
    </section>
    <section className={b('section')}>
      <Interaction />
    </section>
    <section className={b('section')}>
      <Callback
        onPolicyClick={onPolicyClick}
        onSuccess={handleSuccessMessage}
        onError={handleErrorMessage}
      />
    </section>
    <section className={b('section')}>
      <Contacts />
    </section>
  </main>
);

export default Main;
