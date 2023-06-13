import { FC } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';
import styles from './Navigation.module.css';

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
  const { t } = useTranslation();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <nav className={cn(b(), className)}>
      <ul className={b('nav-list', { type })}>
        {t('navigation', { returnObjects: true }).map(({ id, content, to }) => (
          <li className={b('nav-item')} key={id}>
            <a href={to} className={b('link')} onClick={handleClick}>
              <Text
                Tag={TextTag.span}
                type={TextType.menu}
                className={b('link-text')}
              >
                {content}
              </Text>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
