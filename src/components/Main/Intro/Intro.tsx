import { FC } from 'react';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import Text, { TextStyle, TextTag, TextType } from '../../Text/Text';
import styles from './Intro.module.css';
import logo from '../../../images/logo.svg';

const b = block(styles);

const Intro: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'intro' });
  return (
    <div className={b()}>
      <div className={b('text-wrap')}>
        <Text
          Tag={TextTag.h1}
          type={TextType.title}
          style={TextStyle.accent}
          className={b('title')}
        >
          {t('title')}
        </Text>
        {t('content', { returnObjects: true }).map(({ id, text }) => (
          <Text key={id} type={TextType.intro} className={b('paragraph')}>
            {text}
          </Text>
        ))}
      </div>
      <div className={b('logo-wrap')}>
        <img src={logo} alt={t('imageAlt')} className={b('logo')} />
      </div>
    </div>
  );
};

export default Intro;
