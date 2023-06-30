import { FC, PropsWithChildren, SyntheticEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import styles from './Popup.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { KeyboardKeys, MODAL_ROOT_SELECTOR } from '../../utils/config';

const b = block(styles);
let MODAL_ROOT = document.querySelector(MODAL_ROOT_SELECTOR);

if (!MODAL_ROOT) {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.appendChild(modalRoot);
  MODAL_ROOT = modalRoot;
}

type Props = {
  onClose: () => void;
  type?: 'policy';
  styleModifier?: 'error';
};

const Popup: FC<PropsWithChildren<Props>> = ({
  onClose,
  type = undefined,
  styleModifier: style = undefined,
  children,
}) => {
  const { t } = useTranslation();
  const handleCloseClick = (event: SyntheticEvent) => {
    event.preventDefault();
    onClose();
  };

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
      <FocusLock returnFocus>
        <div className={b()}>
          <ModalOverlay closeModal={onClose} />
          <div className={b('wrap', { type, style })}>
            <button
              type="button"
              className={b('close')}
              onClick={handleCloseClick}
              aria-label={t('closePopup')}
            />
            <div className={b('content')}>{children}</div>
          </div>
        </div>
      </FocusLock>,
      MODAL_ROOT
    );
  }
  return null;
};

export default Popup;
