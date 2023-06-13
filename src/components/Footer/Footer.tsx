import { FC } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import Text, { TextType } from '../Text/Text';
import styles from './Footer.module.css';
import Navigation from '../Navigation/Navigation';
import SkolkovoPath from './Skolkovo.png';

const b = block(styles);

type Props = {
  onPolicyClick: () => void;
  className?: string;
};

const Footer: FC<Props> = ({ onPolicyClick, className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' });
  return (
    <footer className={cn(b(), className)}>
      <div className={b('decoration')} />
      <div className={b('decoration')} />
      <div className={b('decoration')} />
      <div className={b('container')}>
        <Navigation className={b('menu')} />
        <div className={b('info')}>
          {t('paragraphs', { returnObjects: true }).map((element) => (
            <Text key={element} type={TextType.footerInfo}>
              {element}
            </Text>
          ))}
        </div>
        <button type="button" className={b('button')} onClick={onPolicyClick}>
          <Text type={TextType.footerPolicy}>{t('policy')}</Text>
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://navigator.sk.ru/orn/1124216"
        >
          <img src={SkolkovoPath} alt={t('skolkovoAlt')} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
