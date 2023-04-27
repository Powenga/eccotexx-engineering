import { FC, PropsWithChildren, SyntheticEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import block from 'bem-css-modules';
import styles from './Popup.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { KeyboardKeys, MODAL_ROOT_SELECTOR } from '../../utils/config';

const b = block(styles);
const MODAL_ROOT = document.querySelector(MODAL_ROOT_SELECTOR);

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
      <div className={b()}>
        <ModalOverlay closeModal={onClose} />
        <div className={b('wrap', { type, style })}>
          <button
            className={b('close')}
            onClick={handleCloseClick}
            aria-label="Закрыть окно"
          />
          <div className={b('content')}>{children}</div>
        </div>
      </div>,
      MODAL_ROOT
    );
  }
  return null;
};

export default Popup;
