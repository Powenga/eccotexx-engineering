import { FC } from 'react';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../../Text/Text';
import styles from './Interaction.module.css';
import Accordion from './Accordion/Accordion';

const b = block(styles);

const Interaction: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'interaction' });
  return (
    <div className={b('')}>
      <Text Tag={TextTag.h2} type={TextType.title}>
        {t('title')}
      </Text>
      <Text type={TextType.main} className={b('text')}>
        {t('content')}
      </Text>
      <ul className={b('list')}>
        {t('ways', { returnObjects: true }).map(({ id, preview, content }) => (
          <li key={id} className={b('item')}>
            <Accordion
              preview={
                <Text Tag={TextTag.h3} type={TextType.accordionPreview}>
                  {preview}
                </Text>
              }
            >
              <Text className={b('content')}>{content}</Text>
            </Accordion>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interaction;
