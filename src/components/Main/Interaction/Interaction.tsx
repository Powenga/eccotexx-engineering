import { FC } from 'react';
import block from 'bem-css-modules';
import Text, { TextTag, TextType } from '../../Text/Text';
import styles from './Interaction.module.css';
import Accordion from './Accordion/Accordion';
import { ways } from './data';

const b = block(styles);

const Interaction: FC = () => (
  <div className={b('')}>
    <Text Tag={TextTag.h2} type={TextType.title}>
      Схемы взаимодействия
    </Text>
    <Text type={TextType.main} className={b('text')}>
      Мы можем предложить следующие схемы взаимодействия
    </Text>
    <ul className={b('list')}>
      {ways.map(({ id, preview, content }) => (
        <li key={id} className={b('item')}>
          <Accordion preview={<Text Tag={TextTag.h3} type={TextType.accordionPreview}>{preview}</Text>}>
            <Text className={b('content')}>{content}</Text>
          </Accordion>
        </li>
      ))}
    </ul>
  </div>
);

export default Interaction;
