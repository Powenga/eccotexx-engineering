import { FC } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import Text, { TextTag, TextType } from '../Text/Text';
import styles from './Menu.module.css';
import menuItems from './menu-items';

type Props = {
  className?: string;
};

const b = block(styles);

const Menu: FC<Props> = ({ className }) => (
  <nav className={cn(b(), className)}>
    <ul className={b('nav-list')}>
      {menuItems.map(({ title, to }) => (
        <li className={b('nav-item')} key={title}>
          <a href={to} className={b('link')}>
            <Text
              Tag={TextTag.span}
              type={TextType.menu}
              className={b('link-text')}
            >
              {title}
            </Text>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
