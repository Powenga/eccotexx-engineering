import {
  ReactNode,
  SyntheticEvent,
  KeyboardEvent,
  useCallback,
  useState,
  FC,
  PropsWithChildren,
} from 'react';
import block from 'bem-css-modules';
import { motion, AnimatePresence } from 'framer-motion';
import { ENTER_KEY_CODE, SPACE_KEY_CODE } from '../../../../utils/config';
import styles from './Accordion.module.css';

const b = block(styles);

interface Props {
  preview?: ReactNode;
  className?: string;
}

const Accordion: FC<PropsWithChildren<Props>> = ({
  preview = undefined,
  className = '',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsOpen((state) => !state);
  };

  const keyDownHandler = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === SPACE_KEY_CODE || event.key === ENTER_KEY_CODE) {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    },
    [isOpen]
  );

  const content = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClickCapture={(event) => {
            event.stopPropagation();
          }}
          initial={{
            height: 0,
            y: 100,
            opacity: 0,
          }}
          animate={{
            height: 'auto',
            y: 0,
            opacity: 1,
          }}
          exit={{
            height: 0,
            y: 100,
            opacity: 0,
            margin: 0,
          }}
          className={b('content')}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      tabIndex={0}
      role="button"
      className={`${b(undefined, { open: isOpen })} ${className}`}
      onClick={toggleOpen}
      onKeyDown={keyDownHandler}
    >
      <div className={b('title-container')}>
        <div className={b('preview-wrap')}>{preview}</div>
      </div>
      {content}
    </div>
  );
};

export default Accordion;
