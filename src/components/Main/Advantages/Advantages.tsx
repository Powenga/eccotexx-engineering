import { FC } from 'react';
import block from 'bem-css-modules';
import styles from './Advantages.module.css';
import Text, { TextStyle, TextTag, TextType } from '../../Text/Text';
import { advantages } from './data';

const b = block(styles);

const Advantages: FC = () => (
  <div className={b()}>
    <Text Tag={TextTag.h2} type={TextType.title}>
      Преимущества работы с компанией
    </Text>
    <ul className={b('list')}>
      {advantages.map(({ id, title, content }) => (
        <li key={id} className={b('card')}>
          <div className={b('decoration')} />
          <div className={b('decoration')} />
          <Text
            Tag={TextTag.h3}
            type={TextType.advantagesTitle}
            style={TextStyle.white}
            className={b('card-title')}
          >
            {title}
          </Text>
          <Text
            type={TextType.advantagesContent}
            style={TextStyle.white}
            className={b('card-content')}
          >
            {content}
          </Text>
        </li>
      ))}
    </ul>
  </div>
);

export default Advantages;
