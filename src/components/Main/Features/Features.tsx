import { FC } from 'react';
import block from 'bem-css-modules';
import styles from './Features.module.css';
import { features } from './data';
import Text, { TextType } from '../../Text/Text';

const b = block(styles);

const Features: FC = () => (
  <div className={b()}>
    <ul className={b('list')}>
      {features.map(({ id, text, accent }) => (
        <li className={b('item')} key={id}>
          <Text className={b('text')} type={TextType.features}>
            {text}
          </Text>
          <Text className={b('text')} type={TextType.featuresAccent}>
            {accent}
          </Text>
        </li>
      ))}
    </ul>
    <div className={b('decoration')} />
    <div className={b('decoration')} />
    <div className={b('decoration')} />
  </div>
);

export default Features;
