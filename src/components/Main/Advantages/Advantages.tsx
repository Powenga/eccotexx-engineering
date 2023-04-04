import { FC } from 'react';
import block from 'bem-css-modules';
import styles from './Advantages.module.css';
import { advantages } from './data';
import Text, { TextType } from '../../Text/Text';

const b = block(styles);

const Advantages: FC = () => (
  <div className={b()}>
    <ul className={b('list')}>
      {advantages.map(({ id, text, accent }) => (
        <li key={id}>
          <Text className={b('text')} type={TextType.advantages}>
            {text}
          </Text>
          <Text className={b('text')} type={TextType.title}>
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

export default Advantages;
