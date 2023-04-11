import { FC, PropsWithChildren, SyntheticEvent } from 'react';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './Button.module.css';

const b = block(styles);

export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

type Props = {
  type?: ButtonType;
  className?: string;
  onClick: (event: SyntheticEvent) => void;
  disabled?: boolean;
};

const Button: FC<PropsWithChildren<Props>> = ({
  type = ButtonType.submit,
  className = '',
  children,
  onClick,
  disabled = false,
}) => {
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button
      type={type}
      className={cn(b(), className)}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
      <div className={b('decoration')} />
      <div className={b('decoration')} />
    </button>
  );
};

export default Button;
