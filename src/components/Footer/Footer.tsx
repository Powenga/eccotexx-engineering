import { FC } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import Text from '../Text/Text';
import styles from './Footer.module.css';

const b = block(styles);

type Props = {
  className?: string;
};

const Footer: FC<Props> = ({ className }) => (
  <footer className={cn(b(), className)}>
    <Text>Footer</Text>
  </footer>
);

export default Footer;
