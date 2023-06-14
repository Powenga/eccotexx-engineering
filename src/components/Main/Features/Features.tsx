import { FC } from 'react';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import styles from './Features.module.css';
import Text, { TextType } from '../../Text/Text';

const b = block(styles);

const Features: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={b()}>
      <ul className={b('list')}>
        {t('features', { returnObjects: true }).map(({ id, text, accent }) => (
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
};

export default Features;
