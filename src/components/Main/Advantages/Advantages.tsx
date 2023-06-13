import { FC } from 'react';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.css';
import Text, { TextStyle, TextTag, TextType } from '../../Text/Text';

const b = block(styles);

const Advantages: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'advantages' });
  return (
    <div className={b()}>
      <Text Tag={TextTag.h2} type={TextType.title}>
        {t('title')}
      </Text>
      <ul className={b('list')}>
        {t('entities', { returnObjects: true }).map(
          ({ id, title, content }) => (
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
          )
        )}
      </ul>
    </div>
  );
};

export default Advantages;
