import { FC } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import Text, { TextType } from '../Text/Text';
import styles from './Footer.module.css';
import Navigation from '../Navigation/Navigation';
import SkolkovoPath from './Skolkovo.png';

const b = block(styles);

type Props = {
  className?: string;
};

const Footer: FC<Props> = ({ className }) => (
  <footer className={cn(b(), className)}>
    <div className={b('decoration')} />
    <div className={b('decoration')} />
    <div className={b('decoration')} />
    <div className={b('container')}>
      <Navigation className={b('menu')} />
      <div className={b('info')}>
        <Text type={TextType.footerInfo}>
          ООО &quot;ЭКОТЕКС ИНЖИНИРИНГ&quot;
        </Text>

        <Text type={TextType.footerInfo}>
          399260, Липецкая область, Хлевенский район, с.п. Хлевенский сельсовет,
          с. Хлевное, ул. Дорожная д. 1, оф. 2
        </Text>

        <a className={b('link')} href="tel:+74742783343">
          <Text type={TextType.footerInfo}>+7 (4742) 783-343</Text>
        </a>
        <a className={b('link')} href="tel:+74742710509">
          <Text type={TextType.footerInfo}>+7 (4742) 710-509</Text>
        </a>
        <a className={b('link')} href="tel:+79202405728">
          <Text type={TextType.footerInfo}>+7 (920) 240-5728</Text>
        </a>

        <Text type={TextType.footerInfo}>
          Генеральный директор: Пикалова Елена Алексеевна
        </Text>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://navigator.sk.ru/orn/1124216"
      >
        <img src={SkolkovoPath} alt="Экотекс инжиниринг - участник Сколково" />
      </a>
    </div>
  </footer>
);

export default Footer;
