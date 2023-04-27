import { FC, SyntheticEvent, useRef } from 'react';
import { useLockBodyScroll } from 'react-use';

const style: Record<string, string | number> = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, .6)',
  cursor: 'pointer',
};

type TModalOverlay = {
  closeModal: () => void;
};

const ModalOverlay: FC<TModalOverlay> = ({ closeModal }) => {
  const overlayRef = useRef(null);
  
  useLockBodyScroll(true);

  function handleClick(event: SyntheticEvent) {
    if (event.target === overlayRef.current) {
      closeModal();
    }
  }

  return <div ref={overlayRef} style={style} onClickCapture={handleClick} />;
};

export default ModalOverlay;
