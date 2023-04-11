import { FC, useState } from 'react';
import block from 'bem-css-modules';
import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const b = block(styles);

const App: FC = () => {
  const [isPolicyOpened, setIsPolicyOpened] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const closePolicy = () => {
    setIsPolicyOpened(false);
  };

  const openPolicy = () => {
    setIsPolicyOpened(true);
  };

  const onSubmit = () => {};

  return (
    <div className={b()}>
      <Header className={b('header')} />
      <Main
        onPolicyOpen={openPolicy}
        isSending={isSending}
        onSubmit={onSubmit}
      />
      <Footer />
    </div>
  );
};

export default App;
