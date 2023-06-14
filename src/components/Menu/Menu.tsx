import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import block from 'bem-css-modules';
import Navigation, { NavigationType } from '../Navigation/Navigation';
import styles from './Menu.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { KeyboardKeys, MODAL_ROOT_SELECTOR } from '../../utils/config';
import LanguageSelector, {
  LanguageSelectorTypes,
} from '../LanguageSelector/LanguageSelector';

const b = block(styles);

const MODAL_ROOT = document.querySelector(MODAL_ROOT_SELECTOR);

const Menu: FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    function handleEscPress(event: KeyboardEvent) {
      if (event.key === KeyboardKeys.esc) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [onClose]);

  if (MODAL_ROOT) {
    return createPortal(
      <div className={b()}>
        <div className={b('container')}>
          <Navigation onClick={onClose} type={NavigationType.column} />
          <LanguageSelector
            className={b('lang-sel')}
            type={LanguageSelectorTypes.row}
          />
        </div>
        <ModalOverlay closeModal={onClose} />
      </div>,
      MODAL_ROOT
    );
  }

  return null;
};

export default Menu;
