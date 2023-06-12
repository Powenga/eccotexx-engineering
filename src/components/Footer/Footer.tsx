import { FC } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import Text, { TextType } from '../Text/Text';
import styles from './Footer.module.css';
import Navigation from '../Navigation/Navigation';
import SkolkovoPath from './Skolkovo.png';

const b = block(styles);

type Props = {
  onPolicyClick: () => void;
  className?: string;
};

const Footer: FC<Props> = ({ onPolicyClick, className }) => (
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
          Юридический адрес: 399260, Липецкая область, Хлевенский район, с.п.
          Хлевенский сельсовет, с. Хлевное, ул. Дорожная д. 1, оф. 2
        </Text>
        <Text type={TextType.footerInfo}>ИНН: 4817006399</Text>
        <Text type={TextType.footerInfo}>КПП: 481701001</Text>
        <Text type={TextType.footerInfo}>ОГРН: 1214800010776</Text>
        <Text type={TextType.footerInfo}>ОКПО: 48182818</Text>
        <Text type={TextType.footerInfo}>ОКВЭД: 72.19</Text>
        <Text type={TextType.footerInfo}>
          Банк: Липецкое отделение № 8593 ПАО СБЕРБАНКА РОССИИ г. Липецка
        </Text>
        <Text type={TextType.footerInfo}>к/с: 30101810800000000604</Text>
        <Text type={TextType.footerInfo}>
          р/с (рубль): 40702810535000003644
        </Text>
        <Text type={TextType.footerInfo}>БИК: 044206604</Text>
      </div>
      <button type="button" className={b('button')} onClick={onPolicyClick}>
        <Text type={TextType.footerPolicy}>Политика конфеденциальности</Text>
      </button>
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
