import { FC, PropsWithChildren } from 'react';
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
};

const Button: FC<PropsWithChildren<Props>> = ({
  type = ButtonType.submit,
  className = '',
  children,
}) => (
  <button type={type} className={cn(b(), className)}>
    {children}
    <div className={b('decoration')} />
    <div className={b('decoration')} />
    <div className={b('decoration')} />
  </button>
);

export default Button;
