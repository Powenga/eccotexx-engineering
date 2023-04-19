import { FC } from 'react';
import block from 'bem-css-modules';
import Text, { TextStyle, TextTag, TextType } from '../../Text/Text';
import styles from './Intro.module.css';
import logo from '../../../images/logo.svg';

const b = block(styles);

const Intro: FC = () => (
  <div className={b()}>
    <div className={b('text-wrap')}>
      <Text
        Tag={TextTag.h1}
        type={TextType.title}
        style={TextStyle.accent}
        className={b('title')}
      >
        ECCOTEXX
      </Text>
      <Text type={TextType.intro} className={b('paragraph')}>
        EccoTexx - научно-производственная компания, специализирующаяся на
        разработке, производстве и внедрении композитных армирующих материалов
        для применения в бетонных конструкциях.
      </Text>
      <Text type={TextType.intro} className={b('paragraph')}>
        Уникальный комплексный подход включает 3D-сканирование объекта,
        BIM-проектирование, расчет конструкций с помощью программного комплекса
        «ЛИРА-САПР».
      </Text>
    </div>
    <div className={b('logo-wrap')}>
      <img src={logo} alt="Логотип" className={b('logo')} />
    </div>
  </div>
);

export default Intro;
