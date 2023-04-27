import { FC, useRef, useState } from 'react';
import block from 'bem-css-modules';
import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Popup from '../Popup/Popup';
import SuccessMessage from '../PopupContent/SuccessMessage';
import ErrorMessage from '../PopupContent/ErrorMessage';
import Policy from '../PopupContent/PolicyContent';

const b = block(styles);

const App: FC = () => {
  const [isPolicyOpened, setIsPolicyOpened] = useState(false);
  const [isCallbackSuccess, setIsCallbackSuccess] = useState(false);
  const [isCallbackError, setIsCallbackError] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const callbackRef = useRef<HTMLElement>(null);

  const closePolicy = () => {
    setIsPolicyOpened(false);
  };

  const openPolicy = () => {
    setIsPolicyOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const openCallbackSuccessMessage = () => {
    setIsCallbackSuccess(true);
  };

  const closeCallbackSuccessMessage = () => {
    setIsCallbackSuccess(false);
  };

  const openCallbackErrorMessage = () => {
    setIsCallbackError(true);
  };

  const closeCallbackErrorMessage = () => {
    setIsCallbackError(false);
  };

  const scrollToCallback = () => {
    callbackRef.current?.scrollIntoView();
  };

  return (
    <>
      <div className={b()}>
        <Header
          onMenuOpen={openMenu}
          className={b('header')}
          onCallbackClick={scrollToCallback}
        />
        <Main
          ref={callbackRef}
          onPolicyClick={openPolicy}
          handleSuccessMessage={openCallbackSuccessMessage}
          handleErrorMessage={openCallbackErrorMessage}
        />
        <Footer />
      </div>
      {isMenuOpened && <Menu onClose={closeMenu} />}
      {isCallbackSuccess && (
        <Popup onClose={closeCallbackSuccessMessage}>
          <SuccessMessage />
        </Popup>
      )}
      {isCallbackError && (
        <Popup onClose={closeCallbackErrorMessage} styleModifier="error">
          <ErrorMessage />
        </Popup>
      )}
      {isPolicyOpened && (
        <Popup onClose={closePolicy} type="policy">
          <Policy />
        </Popup>
      )}
    </>
  );
};

export default App;
