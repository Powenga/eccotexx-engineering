import { FC } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import Text, { TextTag, TextType } from '../Text/Text';
import styles from './Navigation.module.css';
import navigationItems from './navigation-items';

export enum NavigationType {
  column = 'column',
}

type Props = {
  type?: NavigationType;
  className?: string;
  onClick?: () => void;
};

const b = block(styles);

const Navigation: FC<Props> = ({ type, className, onClick = undefined }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <nav className={cn(b(), className)}>
      <ul className={b('nav-list', { type })}>
        {navigationItems.map(({ title, to }) => (
          <li className={b('nav-item')} key={title}>
            <a href={to} className={b('link')} onClick={handleClick}>
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
};

export default Navigation;
